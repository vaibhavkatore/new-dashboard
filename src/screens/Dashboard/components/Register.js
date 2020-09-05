import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            dateOfBirth:new Date(),
            name:'',
            password:'',
            email:'',
            contact:''
        }
    }
    handleChange = date => {
        this.setState({
           dateOfBirth: date,
          
        });
      };

    onChange = (e) =>{
        let name = e.target.name
        this.setState({
            [name] : e.target.value
        })
    }

    onSignup = () =>{
        const { name, dateOfBirth, password, email, contact } =this.state

       const data = { 
            name, dateOfBirth, password, email, contact 
        }
        // Here goes API call
        this.props.history.push('/')
    }

    render(){
        const { name, dateOfBirth, password, email, contact } =this.state
        return (
            <div className="logon-outer-container">
                <div className="login-container">
                    <h3>Register</h3>
                    <Form>
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" value={name} name="name" placeholder="Full Name" onChange={this.onChange}/>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Date of Birth</Form.Label>

                         <DatePicker
                            selected={dateOfBirth}
                            onChange={this.handleChange}
                        />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Contact No.</Form.Label>

                        <Form.Control type="number" value={contact} name="contact" placeholder="Contact No." onChange={this.onChange}/>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Email</Form.Label>

                        <Form.Control type="email" value={email} name="email" placeholder="Email" onChange={this.onChange}/>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Password</Form.Label>

                        <Form.Control type="password" value={password} name="password" placeholder="password" onChange={this.onChange}/>
                        </Form.Group>
                        <Button className="Login-button" onClick={this.onSignup}>Register</Button>
                        <p>Already have an account? <a onClick ={()=> this.props.history.push('/')}>Login</a></p>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(Register));
