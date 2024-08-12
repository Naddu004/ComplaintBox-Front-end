import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo-no-background.png'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AppHeader() {

    const [todayDate, setTodayDate] = useState('');
    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString();
        setTodayDate(formattedDate);
    }, []);

    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: '150px', height: 'auto' }} // Adjust the size as needed
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home" className='nav-link-hover'>Complaint Box</Nav.Link> */}
                        {/* <Nav.Link href="#date" id="date-link" className='nav-link-hover'>Today Date:{todayDate}</Nav.Link> */}
                        <Link to="/" id="date-link" className='nav-link-hover'>Today Date:{todayDate}</Link>
                        <Link to="/aboutus" className='nav-link-hover'>About Us</Link>
                        {/* <Nav.Link to="/about" className='nav-link-hover'>About US</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}