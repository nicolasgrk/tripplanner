// hooks/useSteps.ts
import { useEffect, useState } from 'react'

type StepLog = Record<string, number> // "2025-05-03": 7423

export function useSteps(dateKey: string) {
  const [steps, setSteps] = useState(() => {
    const saved: StepLog = JSON.parse(localStorage.getItem('steps') || '{}')
    return saved[dateKey] ?? 0
  })

  // --- persistence localStorage
  useEffect(() => {
    const saved: StepLog = JSON.parse(localStorage.getItem('steps') || '{}')
    saved[dateKey] = steps
    localStorage.setItem('steps', JSON.stringify(saved))
  }, [steps, dateKey])

  // --- tentative Bluetooth (optionnel)
  const connectBluetooth = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ services: ['fitness_machine'] }], // 0x1826
        optionalServices: ['fitness_machine'],
      })
      const server     = await device.gatt?.connect()
      const service    = await server?.getPrimaryService('fitness_machine')
      const stepChar   = await service?.getCharacteristic(0x2AC4) // Step Count
      const value      = await stepChar?.readValue()
      const newSteps   = value?.getUint32(0, /*littleEndian=*/true) ?? 0
      setSteps(newSteps)
    } catch (err) {
      console.error('BT error', err)
      alert('Bluetooth unavailable sur cet appareil.')
    }
  }

  return { steps, setSteps, connectBluetooth }
}
