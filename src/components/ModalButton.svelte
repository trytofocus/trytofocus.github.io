<script>
  import { modalState } from '../stores/UiStore'

  let open = false;

  const handleClick = () => {
    open = !open
    modalState.set(open)
  }
</script>

<button type=button on:click={handleClick}>{open ? "Close" : "Open"} modal</button>