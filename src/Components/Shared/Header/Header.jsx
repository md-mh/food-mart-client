import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Offcanvas, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'
import logo from './../../../images/logo.png'

// Header Components
const Header = () => {
    const { user, admin, logOut } = useAuth();
    const url = `/dashboard`;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {/* Header and navbar area  */}
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>

                    {user.email ?
                        <Button variant="light" className="dashboardCanvas" onClick={handleShow}>
                            <span className="navbar-toggler-icon"></span>
                        </Button>
                        : <span style={{ display: 'none' }}></span>
                    }

                    <Navbar.Brand href="/"><img className='logo' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/home">Home</Link>
                            <Link className="nav-link" to="/foods">Foods</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>


                            {user.email ?
                                <DropdownButton
                                    variant="outline-secondary"
                                    title={<span className="loginUser" >{user.displayName}</span>}
                                    id="input-group-dropdown-1"
                                >
                                    <Link className="nav-link" to={`${url}/myOrder`}>My Order</Link>
                                    <Link className="nav-link" to={`${url}/payment`}>Payment</Link>
                                    <Link className="nav-link" to={`${url}/addReview`}>Add a Review</Link>
                                    {
                                        user.email && admin ?
                                            <span>
                                                <hr />
                                                <Link className="nav-link" to={`${url}/manageOrder`}>Manage Order</Link>
                                                <Link className="nav-link" to={`${url}/addProduct`}>Add Product</Link>
                                                <Link className="nav-link" to={`${url}/manageProduct`}>Manage Product</Link>
                                                <Link className="nav-link" to={`${url}/createAdmin`}>Create an Admin</Link>
                                            </span>
                                            : <span style={{ display: 'none' }}></span>
                                    }

                                    <div className="text-center">
                                        {user.email ?
                                            <button onClick={logOut} className="login p-2" >Logout</button>
                                            : <Link className="login p-2" to="/login">Login</Link>}
                                    </div>
                                </DropdownButton>

                                : <Link className="nav-link login" to="/login">Login</Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container >
            </Navbar >

            {/* Menu Components for Mobile Device */}
            < Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> Category </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <h1>Filter</h1>


                </Offcanvas.Body>
            </Offcanvas >
        </>
    );
};

export default Header;