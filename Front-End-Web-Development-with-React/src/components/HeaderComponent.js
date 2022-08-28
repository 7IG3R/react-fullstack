

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Collapse, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      toggleModal() {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
      }
      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className='ml-auto' navbar>
                                <NavItem><Button outline onClick={this.toggleModal}><span className='fa fa-sign-in fa-lg'> Login</span></Button></NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className="container-fluid p-5 jumbotron">
                    <div className="container p-5">
                        <h1>Restorante Con Fusion</h1>
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>LOGIN</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Input innerRef = {(input) => this.username = input} type='text' id='username' name='username'></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password</Label>
                                <Input innerRef = {(input) => this.password = input} type='password' id='password' name='password'></Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input innerRef = {(input) => this.remember = input} type='checkbox' name='remember'/>
                                    Remember Me!
                                </Label>
                            </FormGroup>
                            <Button type='submit' value='submit' color='primary '>Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;