import { readable } from 'svelte/store'

export const pageStore = readable(undefined, function start(set) {
  const controller = new AbortController()
  const signal = controller.signal

  fetch("/assets/document-store.json", {method: "GET", signal: signal}).then(async response => {
    if (response.ok) {
      const value = await response.json()
      set(value.pages) 
    } else {
      const err = await response.json()
      throw new Error(err.message)
    }
  }).catch(error => {
    throw new Error(error.message)
  })

  return function stop() {
    controller.abort()
  }
})