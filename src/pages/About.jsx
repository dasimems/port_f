import React from 'react'
import {Row, Col} from "antd"
import { Strategy, Team } from "../components";

import "../assets/styles/about.css"

const About = () => {

  return (
    <>

        <Row justify="center" className="about-details-container">

            <Col span={22}>
                <h2 className='title'>About Us</h2>

                <p className='description'>
                    We are team of young enterprenurer. We took interest in tecnology and over the years we learnt, study 
                    and now we’ve build a team of programmers, developers and UI/UX designers. We believe that with this
                    services we will be able to solve individual and companies technical problems. We’ve designed and developed
                    mobile app and website for individual and companies and they are saying good thing about us. We believed that
                    we will be able to bring your idea to live. You are just a click away from geting your project done.
                
                </p>
            </Col>

        </Row>

        <Strategy />

        <Team />
    
    </>
  )
}

export default About
