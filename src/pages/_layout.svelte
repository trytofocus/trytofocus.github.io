<!-- routify:options preload="proximity" -->

<script>
  import { Col, Container, Row } from 'sveltestrap';
  import NavBar from '../components/navs/NavBar.svelte'
  import Menu from '../components/navs/Menu.svelte';
</script>

<NavBar/>
<Container fluid class="px-4">
  <Row class="gx-5">
    <Col md="3"><Menu/></Col>
    <Col><slot></slot></Col>
    <Col md="3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, eius. Ratione repudiandae mollitia nobis, porro voluptates perspiciatis alias necessitatibus, earum natus ex voluptate! Enim, architecto unde. Facilis iste accusantium id.</Col>
  </Row>
</Container>