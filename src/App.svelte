<script>
  import Welcome from './lib/Welcome.svelte' 
  import Counter from './lib/Counter.svelte'
  import Image from './lib/Image.svelte'
  import Checkmarks from './lib/Checkmarks.svelte';
  import Deezer from './lib/Deezer.svelte';
  import Form from './lib/Form.svelte';

  const imageProps = {
    image: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    width: 400
  }

  let checkMarks = [
    { status: false, text: "Click button"},
    { status: false, text: "Check the image's alt value"},
    { status: false, text: "Click Me"}
  ]

  const fireButtonEvent = () => {
    const index = checkMarks.findIndex(i => i.text === "Click button") 
    checkMarks[index].status = true
    checkMarks = checkMarks
  }

  
</script>

<Welcome name={"Vlad"}/>
<div>
  <Image {...imageProps} />
</div>
<Counter on:update={fireButtonEvent} />
<br/>
<br/>
<Checkmarks {checkMarks} />
<br/>
<br/>
<br/>
<Deezer/>
<Form/>