import React from 'react'
import {Row, Col } from "antd"
import { contactDetails } from '../assets/data'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <>

        <Row justify="center" className="footer">
            <Col span={22} className="footer-container">
                <Row justify="space-between" className='footer-content'>
                    <ul className='social-links flex-container list-style-none'>

                      <li><a href={contactDetails.linkedIn} target="_blank" rel="noreferrer"><FaLinkedin /></a></li>

                      {/* <li><a href={contactDetails.twitter} target="_blank" rel="noreferrer"><FaTwitterSquare /></a></li> */}

                      <li><a href={contactDetails.facebook} target="_blank" rel="noreferrer"><FaFacebookSquare /></a></li>

                      <li><a href={contactDetails.whatsapp} target="_blank" rel="noreferrer"><FaWhatsappSquare /></a></li>
                    </ul>

                    <p className="copyright"> YouStudio &copy; 2022</p>
                </Row>
            </Col>

        </Row>
    
    </>
  )
}

export default Footer
