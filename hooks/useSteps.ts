/* hooks/useSteps.ts */
'use client'
import { useEffect, useState } from 'react'

type StepLog = Record<string, number> // p. ex. { "2025-05-03": 7423 }

export function useSteps(dateKey: string) {
  const [steps, setSteps] = useState(0)

  // Charger la valeur enregistrée
  useEffect(() => {
    try {
      const saved: StepLog = JSON.parse(localStorage.getItem('steps') || '{}')
      setSteps(saved[dateKey] ?? 0)
    } catch {}
  }, [dateKey])

  // Sauvegarder à chaque modification
  useEffect(() => {
    try {
      const saved: StepLog = JSON.parse(localStorage.getItem('steps') || '{}')
      saved[dateKey] = steps
      localStorage.setItem('steps', JSON.stringify(saved))
    } catch {}
  }, [steps, dateKey])

  /* ---- Bluetooth facultatif (inchangé) ---- */
  const connectBluetooth = async () => {
    try {
      const device   = await navigator.bluetooth.requestDevice({
        filters: [{ services: ['fitness_machine'] }],
        optionalServices: ['fitness_machine'],
      })
      const server   = await device.gatt?.connect()
      const service  = await server?.getPrimaryService('fitness_machine')
      const stepChar = await service?.getCharacteristic(0x2ac4)
      const value    = await stepChar?.readValue()
      setSteps(value?.getUint32(0, true) ?? 0)
    } catch (err) {
      console.error('BT error', err)
      alert('Bluetooth indisponible sur cet appareil.')
    }
  }

  return { steps, setSteps, connectBluetooth }
}
