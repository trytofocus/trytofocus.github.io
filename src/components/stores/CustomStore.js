import { writable } from 'svelte/store'

function createObject() {
  const initialValue = []
  const { subscribe, set, update } = writable(initialValue)

  return {
    subscribe, 
    add: value => update(v => {
      v.push(value)
      return v
    }),
    reset: set(initialValue)
  }   

}

export const thisObject = createObject()