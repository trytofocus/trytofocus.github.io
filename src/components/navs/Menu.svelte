<script>
  import { Accordion, AccordionItem, Nav, NavLink } from "sveltestrap";
  import { pageStore } from "../../stores/PageStore.js"
</script>

<Accordion flush>
  {#if $pageStore}
    {#each $pageStore as {id, title, pages} (id)}
      <AccordionItem header={title}>
        <Nav vertical>
          {#each pages as subpage}
            {@const href = `/explore/${id}/${subpage.id}`}
            <NavLink {href}>{subpage.title}</NavLink>
          {/each}
        </Nav>
      </AccordionItem>
    {/each}
  {/if}
</Accordion>