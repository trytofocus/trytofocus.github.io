<script>
  export let title = undefined
  export let content = undefined
</script>

<h1>{title}</h1>
<div>{content || "Loading..."}</div>