import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:''
        }
    }
    onChange = (e) =>{
        let name = e.target.name
        this.setState({
            [name] : e.target.value
        })
    }

    onClickButton = () =>{
        const {email} =this.state

       const data = { 
             email
        }
        // Here goes API call
        this.props.history.push('/')
    
    }
    render(){
        return (
            <div className="logon-outer-container">
                <div className="login-container">
                    <h3>Forget Password</h3>
                    <Form>
                        <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Email" value={this.state.email} />
                        </Form.Group>
                        <Button className="Login-button" onClick={this.onClickButton}>Send Reset link</Button>
                        <p>Recived password ?  <a onClick ={()=> this.props.history.push('/')}>Login</a></p>

                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(Login));
