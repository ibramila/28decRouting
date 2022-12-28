import React from 'react'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavbarSide() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand ><Link style={{ textDecoration: 'none' }} to="/">Site</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link> <Link style={{ textDecoration: 'none' }} to="/admin">Dashboard</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none' }} to="/admin/products">Products</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'none' }} to="/admin/suppliers">Suppliers</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarSide