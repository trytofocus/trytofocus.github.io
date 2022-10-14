<script>
  import { Styles } from 'sveltestrap'
  import Layout from './pages/Layout.svelte';
  import Test from './pages/Test.svelte';
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes.js";
</script>

<Styles/>
<Router {routes} />
<Layout>
  <Test></Test>
</Layout>

