<script>
  export let checkMarks = [];

  const deleteItem = (value) => {
    checkMarks = checkMarks.filter(e => e.text !== value)
  }
</script>

<ul>
  {#each checkMarks as {status = false, text} (text)}
    <li on:click={() => deleteItem(text)}>
      <span class="checkbox">{status ? "Done" : "To do"}</span> - {text}
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .checkbox {
    color: green;
  }
</style>