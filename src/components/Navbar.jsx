import React from 'react'
import { Link } from 'gatsby'

import '../assets/css/navbar.scss'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigacija() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navigacija" bg="dark" data-bs-theme="dark" >
            <Container className='kontejner'>
                <Link className='logo' to="/">GatsbyJs Test</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        {/*<Link className='nav-link' to="/prva">Prva</Link>*/}
                    </Nav>
                    <Nav>
                        {/*<Nav.Link href="#deets">More deets</Nav.Link>*/}
                        <Link className='nav-link' to="/prva">Prva</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigacija;


