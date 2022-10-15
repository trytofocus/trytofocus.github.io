<script>
  async function getPlaylists() {
    const res = await fetch("https://api.deezer.com/album/302127")
    const text = await res.text()

    if (res.ok) {
      return text
    } else {
      throw new Error(JSON.parse(text).message)
    }
  }

  let promise = getPlaylists();
</script>

{#await promise}
  <div>Loading weather data..</div>
{:then wheather}
  <div>{wheather}</div>
{:catch error}
  <div>{error.message}</div>
{/await}