import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import Routes from "./routes";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core';
// import ... from '@fortawesome/free-solid-svg-icons';



library.add(
 

)

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

 
    render() {

        return (
            <Router>

                        {Routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        ))}
               
            </Router>
        );
    }
}
const mapStateToProps = (state) => {
	return {

	}
};

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export default ( connect(
	mapStateToProps,
	mapDispatchToProps
)(App));