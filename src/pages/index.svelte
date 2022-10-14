<script>
  import Welcome from '../lib/Welcome.svelte' 
  import Counter from '../lib/Counter.svelte'
  import Image from '../lib/Image.svelte'
  import Checkmarks from '../lib/Checkmarks.svelte';
  import Deezer from '../lib/Deezer.svelte';
  import Form from '../lib/Form.svelte';
  import { afterUpdate, beforeUpdate, onDestroy, onMount } from 'svelte';
  import { onInterval } from '../lib/utils/Timer';
  import { modalState, nightMode } from '../lib/stores/UiStore';
  import { Configurations } from '../lib/stores/Configurations';
  import { thisObject } from '../lib/stores/CustomStore';
  import ModalButton from '../lib/ModalButton.svelte';
  import _array from 'lodash-es/array';

  onMount(() => {
  })

  onDestroy(() => {
    unsubscribe()
  })

  beforeUpdate(() => {
  })

  afterUpdate(() => {
  })

  // await tick()

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

  let currentTime = new Date()
  onInterval(() => {currentTime = new Date()}, 1000)

  let modal
  const unsubscribe = modalState.subscribe(value => {
    modal = value
  })

  thisObject.add({id: 1, data: 'random'})
</script>

<div>{currentTime}</div>
<div>{$Configurations.language} - {$Configurations.region}</div>
<div>Night mode: {$nightMode}</div>
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
<ModalButton/>
<div>Modal state: {modal}</div>
<div>{_array.first($thisObject)?.data}</div>
