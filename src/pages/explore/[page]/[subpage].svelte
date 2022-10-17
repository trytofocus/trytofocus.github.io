<script>
  import Page from "../../../components/content/Page.svelte";
  import { pageStore } from "../../../stores/PageStore.js";
  import { params } from "@roxi/routify"
</script>

<div>
  {#if $pageStore && $params}
    {@const page = $pageStore.find(p => p.id === parseInt($params.page))}
    {@const subpage = page.pages.find(sp => sp.id === parseInt($params.subpage))}
    <Page title={subpage.title} content={subpage.content} />
  {:else}
    <span>Loading..</span>
  {/if}
</div>