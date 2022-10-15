<!-- routify:options preload="proximity" -->

<script>
  import { Col, Container, Row } from 'sveltestrap';
  import NavBar from '../components/navs/NavBar.svelte'
  import Menu from '../components/navs/Menu.svelte';
  import Footer from '../components/navs/Footer.svelte';
</script>

<NavBar/>
<Container fluid>
  <Row>
    <Col md="3" class="py-5"><Menu/></Col>
    <Col class="py-5"><Container><slot></slot></Container></Col>
    <Col md="3" class="py-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, eius. Ratione repudiandae mollitia nobis, porro voluptates perspiciatis alias necessitatibus, earum natus ex voluptate! Enim, architecto unde. Facilis iste accusantium id.</Col>
  </Row>
  <Row>
    <Col><Footer/></Col>
  </Row>
</Container>