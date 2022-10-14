<script>
  let menu = [
    {
      name: "First",
      link: "/first"
    },
    {
      name: "Second",
      link: "/second"
    },
    {
      name: "Third",
      link: "/third"
    },
    {
      name: "Thirds",
      link: "/thirds"
    }
  ]

  let current;
</script>

<ul>
  {#each menu as item (item.link)}
    <a href={item.link}><li class:active={current === item.link} on:click={() => current = item.link}>{item.name}</li></a>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    border-right: 1px solid gray;
    margin: 0;
    padding: 0;
    text-align: left;
    background-color: rgb(49, 49, 49);
  }

  li {
    padding: 16px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }

  a {
    text-decoration: none;
    color:rgba(255, 255, 255, 0.87);
  }

  a:active {
    color: #242424;
  }

  li:hover {
    box-shadow: 3px 4px 4px rgb(134, 169, 214);
  }

  li.active {
    background-color: rgba(255, 255, 255, 0.87);
    color: #242424;
  }

</style>