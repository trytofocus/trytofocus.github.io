<script>
  import { Nav, NavItem, NavLink } from 'sveltestrap'

  const menuItems = [
    { url: "/settings", text: "Settings" },
    { url: "/settings1", text: "Settings 1" },
    { url: "/settings2", text: "Settings 2" },
    { url: "/settings3", text: "Settings 3" },
    { url: "/settings4", text: "Settings 4" },
    { url: "/settings5", text: "Settings 5" }
  ]
</script>

<Nav vertical >
  {#each menuItems as item (item.url)}
    <NavItem>
      <NavLink href={item.url} class="text-secondary" >{item.text}</NavLink>
    </NavItem>
  {/each}
</Nav>