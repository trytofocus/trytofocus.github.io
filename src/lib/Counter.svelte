<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let count = 0
  let message = ""
  const MAX_COUNT = 10

  const increment = () => { 
    if (count >= MAX_COUNT) {  message = `${MAX_COUNT} is the maximum value!`; return }
    count += 1 
  }

  const fireEvent = () => dispatch("update")
</script>

<button on:click={increment} on:click|once={fireEvent} type="button">
  {#if !message}
    count is {count} 
  {/if}
  <div>{message}</div>
</button>
