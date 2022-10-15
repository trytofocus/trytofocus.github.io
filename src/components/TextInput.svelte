<script>
  import { FormGroup, Input, Label } from "sveltestrap";
  export let value = "";
</script>

<FormGroup>
  <Label for="customTextInput">Input Text:</Label>
  <Input type="text" id="customTextInput" bind:value />
</FormGroup>