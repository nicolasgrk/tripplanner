// lib/icon.ts
export function toPascal(kebab: string) {
    return kebab
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join('')
  }
  