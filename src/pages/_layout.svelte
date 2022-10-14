<!-- routify:options preload="proximity" -->

<script>
  import Menu from "../lib/menus/Menu.svelte";
  import Topbar from "../lib/topbars/Topbar.svelte";
</script>

<header><Topbar slot="header"/></header>
<div class="content">
  <aside><Menu/></aside>
  <main><slot /></main>
</div>

<style>
  aside {
    padding-top: 4rem;
    min-height: 60vh;
    min-width: 15vw;
  }

  main {
    padding: 4rem 2rem 2rem 4rem;
    width: 100%;
  }

  .content {
    display: flex;
  }
</style>