import { writable } from 'svelte/store'

export const modalState = writable(false)
export const nightMode = writable(true)

// derived