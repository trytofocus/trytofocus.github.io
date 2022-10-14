<script>
    import { url } from '@roxi/routify'
</script>

<div class="e404">
  <div class="huge">404</div>
  <div>Page not found. 
    <!-- link to the parent folder of _fallback.svelte -->
    <a href={$url('../')}>Go back</a>
  </div>
</div>

<style>
  .huge {
    font-size: 12rem;
  }

  .e404 {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>