import { readable } from 'svelte/store'

const initialValue = {
  language: undefined,
  region: undefined
}

export const Configurations = readable(initialValue, function Start(set) {
  set({
    language: "en",
    region: Intl.DateTimeFormat().resolvedOptions().timeZone
  })

  return function Stop() {
    // do nothing
  }
})
