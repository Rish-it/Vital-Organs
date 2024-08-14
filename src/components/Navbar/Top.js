import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink as Link } from 'react-router-hash-link';

const Top = () => {

    const [fix, setfix] = useState(false);

    function setfixed() {
        if (window.scrollY >= 100) {
            setfix(true);
        } else {
            setfix(false);
        }
    }
    window.addEventListener("scroll", setfixed);

    return (

        <Navbar position="sticky" fixed="top" className={fix ? 'navbar fixed' : 'navbar initial'}>
            <Container className='trans'>
                <Link to="#courous" className='trans nav-link nav-link-ltr head' smooth>OrganD</Link>
                <Nav className="me-auto trans">
                    <Link to="#about" className=' trans nav-link nav-link-ltr' smooth>About Us</Link>
                    <Link to="#success" className='trans nav-link nav-link-ltr' smooth>Success Stories</Link>
                    <Link to="#Partner" className='trans nav-link nav-link-ltr'>Partner with us</Link>

                </Nav>
                <Nav className='trans'>
                    <Link to="/Donor_login" className='buttn nav-link' href="#pricing"> Login/Signup</Link>
                </Nav>
            </Container>
        </Navbar>


    );
}

export default Top;