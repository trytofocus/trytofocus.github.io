<script>
    import TextInput from "./TextInput.svelte";


  let form = undefined
  let name = ""
  let number = 0
  let range = 25
  let checkbox = true
  let radio = "A"
  let checkGroupValues = ["A", "C"]
  let checkGroupNames = ["A", "B", "C"]
  let textarea = ""
  let selected = "A"
  let selectOptions = ["A", "B", "C"]
  let multipleSelect = ["A"]
  let multiselectValues = ["A", "B", "C"]
  let textInput = "Value";
  let control = undefined;

  const handleSubmit = () => {
    
  }
</script>

<h2> Form for {name} </h2>

<form on:submit|preventDefault={handleSubmit} bind:this={form}>

  <label>Text: <input type=text bind:value={name} ></label>
  <br/>
  <label>Number: <input type=number bind:value={number}></label>
  <br/>
  <label>Range: <input type=range bind:value={range} min=0 max=100></label><span>{range}</span>
  <br/>
  <label>Checkbox: <input type=checkbox bind:checked={checkbox}></label>
  
  <div>Radio box Group</div>
  <label><input type=radio bind:group={radio} value=A>A</label>
  <label><input type=radio bind:group={radio} value=B>B</label>
  <label><input type=radio bind:group={radio} value=C>C</label>
  <div>selected: {radio}</div>

  <div>Checkbox Group</div>
  {#each checkGroupNames as checkName}
    <label><input type=checkbox bind:group={checkGroupValues} value={checkName}></label>
  {/each}
  <div>selected: {checkGroupValues}</div>

  <div>Textarea</div>
  <textarea bind:value={textarea} placeholder="Your text here.."></textarea>

  <div>Select</div>
  <select bind:value={selected}>
    {#each selectOptions as value}
      <option {value}>{value}</option>
    {/each}
  </select>
  <div>selected: {selected}</div>

  <div>Multiple select</div>
  <select multiple bind:value={multipleSelect}>
    {#each multiselectValues as value}
      <option {value}>{value}</option>
    {/each}
  </select>
  <div>selected: {multipleSelect}</div>

  <TextInput bind:value={textInput} bind:this={control}/>
  <div>text: {textInput}</div>

  <button type=submit>Submit</button>
</form>

<style>
  form {
    border: 1px solid gray;
    padding: 16px;
  }
</style>