import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.scss';
import { connect } from 'react-redux';
import actions from '../modules/actions'
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    onLogin = () => {
        const {email, password} =this.state

       const  data = {
            email, password
        }
        // Here goes API call
        this.props.actions.loginAction(data)
    }

    onChange = (e) =>{
        let name = e.target.name
        this.setState({
            [name] : e.target.value
        })
    }
    render() {
        const {email, password} =this.state
        
        return (
            <div className="logon-outer-container">
                <div className="login-container">
                    <h3>Login</h3>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Email" value={email} onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="password" value={password} onChange={this.onChange} />
                        </Form.Group>
                        <a onClick={() => this.props.history.push('/forget-password')}>Forget Password ?</a>
                        <Button className="Login-button">Login</Button>
                        <p>Don't have an account? <a onClick={() => this.props.history.push('/register')}>Register</a></p>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
        authDetails: state.auth.loginData
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
        actions: bindActionCreators(actions, dispatch),
	};
};

export default ( withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)));