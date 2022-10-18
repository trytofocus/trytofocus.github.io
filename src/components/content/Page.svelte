<script>
  import { fly, fade, blur, slide, scale } from 'svelte/transition'
  import { elasticIn } from 'svelte/easing'

  export let title = undefined
  export let content = undefined
</script>

{#key content}
  <h1 in:fly="{{y: -10, duration: 100, delay: 100}}">{title}</h1>
  <div in:fly="{{y: -10, duration: 100, delay: 100}}">{content}</div>
{/key}