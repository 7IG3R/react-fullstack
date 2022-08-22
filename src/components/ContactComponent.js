import { tsImportEqualsDeclaration } from '@babel/types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: true,
            contactType:  'Tel,',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name; 
        this.setState({
            [name] : value
        })
    }
    handleSubmit(event){
        console.log(this.state);
        event.preventDefault();
    }
    render(){
        return(
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to={`/home`}>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to={`/contactus`}>ContactUs</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Contact Us</h3>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>Firstname</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="text" name="firstname" id='firstname' placeholder='First Name' value={this.state.firstname}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Lastname</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="text" name="lastname" id='lastname' placeholder='Last Name' value={this.state.lastname}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}>Contact Number</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="tel" name="telnum" id='telnum' placeholder='Telephone Number' value={this.state.telnum}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="text" name="email" id='email' placeholder='Email' value={this.state.email}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6,offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input onChange={this.handleInputChange} type="checkbox" name="agree" checked={this.state.agree}></Input>May we contact you?
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3,offset:1}}>
                                    <Input onChange={this.handleInputChange} type='select' name='contactType' value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="textarea" name="message" id='message' placeholder='Your Feedback' rows="10" value={this.state.message}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10,offset:2}}>
                                    <Button type='submit' color='primary'>Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;