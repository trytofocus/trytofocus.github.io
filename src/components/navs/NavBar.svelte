<script>
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'sveltestrap'

  const menuItems = [
    { url: "/first", text: "First" },
    { url: "/second", text: "Sedond" },
    { url: "/third", text: "Third" }
  ]

  let isOpen = false;

  const handleUpdate = (event) => {
    isOpen = event.detail.isOpen
  }
</script>

<Navbar color="dark" dark expand="md">
  <NavbarBrand href="/">Home</NavbarBrand>
  <NavbarToggler on:click={() => isOpen = !isOpen}/>
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate} >
    <Nav class="ms-auto" navbar>
      {#each menuItems as item (item.url)}
        <NavItem>
          <NavLink href={item.url}>{item.text}</NavLink>
        </NavItem>
      {/each}
    </Nav>
  </Collapse>
</Navbar>