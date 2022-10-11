<script>
  import { chain } from 'lodash-es';

  export let image;
  export let width = 400;
</script>

<img width={width} src={image} alt={chain(image).split("/").last().split("?").first()}>