import { Navbar, Nav, Container } from "react-bootstrap";
function Hero() {
  return (
    <div class="hero">
      <Container fluid>
        <Nav class="navbar navbar-dark bg-dark" navbar={true}>
          <Navbar.Brand id="edwin">Edwin Nino Delgado</Navbar.Brand>

          <Nav.Link href="#about" id="mainNavText">
            About
          </Nav.Link>
          <Nav.Link href="https://github.com/eninodel" id="mainNavText">
            GitHub
          </Nav.Link>
          <Nav.Link href="#contact" id="mainNavText">
            Contact
          </Nav.Link>
        </Nav>{" "}
      </Container>

      <Container fluid id="largeTitle">
        <h1 class="largeTitle">Welcome, I'm Glad You're Here</h1>
        <p class="largeTitle">A portfolio by Edwin Nino Delgado</p>
      </Container>
    </div>
  );
}

export default Hero;
