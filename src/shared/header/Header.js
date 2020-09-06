import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import './Header.scss'

// faBorderStyle,
// faBell,
// faUser
class Header extends Component {
    render() {
        return (
            <>
            <div className="main-header">
                <Row>
                    <Col>
                    <ul>
                        <li>
                        <FontAwesomeIcon className="icons" icon={["fas", "check-square"]} />
                        </li>
                        <li>
                        <FontAwesomeIcon className="icons" icon={["fas", "comment-alt"]} />
                        </li>
                        <li>
                        <FontAwesomeIcon className="icons" icon={["fas", "envelope"]} />
                        </li>
                        <li>
                        <FontAwesomeIcon className="icons" icon={["fas", "calendar-week"]} />
                       
                        </li>
                        <li>
                        <FontAwesomeIcon className="icons star" icon={["fas", "star"]} />
                        </li>

                    </ul>
                    </Col>
                    <Col className="right-side text-right">
                    <ul>
                        <li>
                            <span>English</span>
                            </li>
                        <li>
                        <FontAwesomeIcon className="icons" icon={["fas", "border-style"]} />
                        </li>
                        <li>
                        <FontAwesomeIcon className="icons" icon={["fas", "search"]} />
                        </li>
                        <li>
                        <FontAwesomeIcon className="icons" icon={["fas", "bell"]} />
                        </li>
                    <li>
                        <span style={{fontSize:13,fontWeight:'600'}}>John Doe</span>
                    </li>
                    <li>
                    <FontAwesomeIcon className="icons user" icon={["fas", "user"]} />

                    </li>
                    </ul>
                    </Col>
                </Row>
            </div>
               
            </>
        )
    }
}

export default withRouter(connect()(Header));