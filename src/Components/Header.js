import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar,NavDropdown,Container,Dropdown,Button,ButtonGroup} from 'react-bootstrap';

function Header() {
  return (
    <div>
   

      {/*  */}

      <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwL7hryWeMhAYkDa0cUqF_ThBi_vnCMcyFgg&usqp=CAU" style={"height: 20px"}></img> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/Cards">Cards</Link></Nav.Link>
            <Nav.Link><Link to="/About">About</Link></Nav.Link>
       
            <Dropdown as={ButtonGroup}>
  

 

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
