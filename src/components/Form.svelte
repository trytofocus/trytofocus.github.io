<script>
  import { Button, Form, FormGroup, Input, Label } from 'sveltestrap'
  import TextInput from "./TextInput.svelte";


  let form = undefined
  let name = ""
  let number = 0
  let range = 25
  let checkbox = true
  let checkGroupValues = ["A", "C"]
  let checkGroupNames = ["A", "B", "C"]
  let textarea = ""
  let selected = "A"
  let selectOptions = ["A", "B", "C"]
  let multipleSelect = ["A"]
  let multiselectValues = ["A", "B", "C"]
  let textInput = "Value";
  let control = undefined;
  let radio = "A"
  let radioGroup = [
    {label: "A", value: "A"},
    {label: "B", value: "B"},
    {label: "C", value: "C"}
  ]

  const handleSubmit = () => {
    
  }
</script>

<h2> Form for {name} </h2>

<Form bind:this={form}>
  <FormGroup>
    <Label for="textInput">Text:</Label>
    <Input type="text" id="textInput" bind:value={name} />
  </FormGroup>
  <FormGroup>
    <Label for="numberInput">Number:</Label>
    <Input type="number" id="numberInput" bind:value={number} />
  </FormGroup>
  <FormGroup>
    <Label for="rangeInput">Range:</Label>
    <Input type="range" id="rangeInput" bind:value={range} />
  </FormGroup>
  <div>{range}</div>
  <FormGroup>
    <Label for="checkBoxInput">Checkbox:</Label>
    <Input type="checkbox" id="checkBoxInput" min=0 max=100 bind:checked={checkbox} />
  </FormGroup>

  <div>Radio box Group</div>
  <FormGroup>
    {#each radioGroup as item (item.value)}
      <Input type="radio" label={item.label} bind:group={radio} value={item.value} />
    {/each}
  </FormGroup>
  <div>selected: {radio}</div>

  <div>Checkbox Group</div>
  <FormGroup>
    {#each checkGroupNames as item (item)}
      <Input type="checkbox" label={item} bind:group={checkGroupValues} value={item} />
    {/each}
  </FormGroup>
  <div>selected: {checkGroupValues}</div>

  <FormGroup>
    <Label for="checkAreaInput">Textarea</Label>
    <Input type="textarea" id="checkAreaInput" bind:value={textarea} placeholder="Your text here.." />
  </FormGroup>

  <FormGroup>
    <Label for="selectInput">Select</Label>
    <Input type="select" id="selectInput" bind:value={selected}>
      {#each selectOptions as option}
        <option value={option}>{option}</option>
      {/each}
    </Input>
  </FormGroup>
  <div>selected: {selected}</div>

  <FormGroup>
    <Label for="multipleSelectInput">Multiple select</Label>
    <Input type="select" id="multipleSelectInput" multiple bind:value={multipleSelect}>
      {#each multiselectValues as value}
        <option {value}>{value}</option>
      {/each}
    </Input>
  </FormGroup>
  <div>selected: {multipleSelect}</div>

  <TextInput bind:value={textInput} bind:this={control}/>
  <div>text: {textInput}</div>

  <Button type="submit" color="success">Submit</Button>
</Form>