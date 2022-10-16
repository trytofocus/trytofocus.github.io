<script>
  import { Styles } from 'sveltestrap'
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes.js";

  const config = {
    urlTransform: {
      apply: url => `/Practice.Frontend.Svelte${url}`,
      remove: url => url.replace("/Practice.Frontend.Svelte", "")
    }
  }
</script>

<Styles/>
<Router {routes} {config} />
