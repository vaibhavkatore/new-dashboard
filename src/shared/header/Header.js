import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import './Header.scss'
class Header extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <ul>
                        <li>
                            <Button className="buttons">
                        <FontAwesomeIcon className="icons home" icon={["fas", "home"]} />

                                Dashboard
                                </Button>
                        </li>
                        <li>
                        <FontAwesomeIcon className="icons" icon={["fas", "box"]} />
                        <span>Apps</span>
                        </li>
                        <li>
                        <FontAwesomeIcon className="icons" icon={["fas", "layer-group"]} />
                        <span>UI Eliments</span>
                       
                        </li>
                        <li>
                        <FontAwesomeIcon className="icons" icon={["fas", "pen"]} />
                        <span>Forms & Tables</span>
                       
                        </li>
                        <li>
                        <FontAwesomeIcon className="icons" icon={["fas", "file"]} />
                        <span>Pages</span>
                       
                        </li>
                        <li>
                        <FontAwesomeIcon className="icons" icon={["fas", "chart-bar"]} />
                        <span>Chart & Maps</span>
                        
                        </li>
                        <li>
                        <FontAwesomeIcon className="icons" icon={["fas", "ellipsis-h"]} />
                        <span>Others</span>
                        
                        </li>
                    </ul>
            </div>
            </>
        )
    }
}

export default withRouter(connect()(Header));