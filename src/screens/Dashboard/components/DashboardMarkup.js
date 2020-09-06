import React from 'react';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import './DashboardMarkup.scss';
import decorLeft from '../../../assets/decore-left.png';
import decorRight from '../../../assets/decore-right.png'
import {Graph, Bars} from '../modules/staticFile'
import avg1 from '../../../assets/avg1.png'
import avg2 from '../../../assets/avg2.png'
import Header from '../../../shared/dashboard-header/DashboardHeader'
import MainHeader from '../../../shared/header/Header'
const DashboardMarkup = (props) => {
    return (
        <>
            <MainHeader/>

        <Container className="dashboard-container">
            <Header/>
           <Row>
               <Col md="6" >
                   <div className="congrats-div">
                   <img src={ decorLeft } className="left-decoration"/>
                    <img src={ decorRight } className="right-decoration"/>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award h-8 w-8"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                    </span>
                    <h1>Congratulations John,</h1>
                    <p>You have done <strong>57.6% </strong>more sales today. Check your new badge in your profile.</p>
               
                   </div>
                   </Col>
               
               {
                   Graph.map(card=>{
                   return( <Col md="3">
                       <div  className="subscribers">
                       <span>
                        {card.image}
                        </span>
                        <h3>{card.number}</h3>
                        <p>{card.type}</p>
                        <img src={card.graph}/>
                       </div>
                       
                    </Col>)
                   })
               }
                
                
           </Row>
           <Row>
               <Col>
               <div className="average-sessions">
                   <Row>
                    <Col>
                        <h2>2.7k</h2>
                        <span>Avg Sessions</span>
                        <p><strong style={{color:'#87dbaa'}}>+5.2</strong> vs Last 7 Days</p>
                        <Button className="view-button">View Details</Button>
                    </Col>
                    <Col>
                        <span style={{float:"right", fontSize:12}}>Last 7 days</span>
                        <img src={avg1}/>
                    </Col>
               </Row>
               <hr/>
            <Row>
            {
                   Bars.map(bar=>{
                   return( <Col md="6">
                       <p>{bar.contents}</p>
                      <ProgressBar variant={bar.type} now={bar.progress}/>
                       
                    </Col>)
                   })
               }
            </Row>
                </div>
               </Col>
               <Col>
                    <div className="support">
                        <h4>Support Tracker</h4>
                        <span style={{float:"right", fontSize:12}}>Last 7 days</span>
                        <h1>163</h1>
                        <img src={avg2}/>
                        <Row>
                  <Col className="text-center">
                    <p>New Ticket</p>
                    <span>23</span>
                  </Col>
                  <Col className="text-center">
                    <p>New Ticket</p>
                    <span>23</span>
                  </Col>
                  <Col className="text-center">
                    <p>New Ticket</p>
                    <span>23</span>
                  </Col>
              </Row>
                    </div>

             
               </Col>
           </Row>
        </Container>
        </>
    )
}

export default DashboardMarkup;