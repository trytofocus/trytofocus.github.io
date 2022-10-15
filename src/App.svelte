<script>
  import { Styles } from 'sveltestrap'
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes.js";
</script>

<Styles/>
<Router {routes} />
