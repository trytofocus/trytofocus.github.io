<script>
    import { Icon } from "sveltestrap";

  export let checkMarks = [];

  const deleteItem = (value) => {
    checkMarks = checkMarks.filter(e => e.text !== value)
  }
</script>

<ul>
  {#each checkMarks as {status = false, text} (text)}
    <li on:click={() => deleteItem(text)}>
      {#if status}
        <Icon name="check2-all"/>
      {:else}
        "To do"
      {/if}
      - {text}
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

</style>