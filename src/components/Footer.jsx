import React from 'react'
import {Row, Col } from "antd"

const Footer = () => {
  return (
    <>

        <Row justify="center" className="footer">
            <Col span={22} className="footer-container">
                <Row justify="space-between" className='footer-content'>
                    <ul className='social-links'></ul>

                    <p className="copyright">Developed By Dasimems &copy; YouStudio 2022</p>
                </Row>
            </Col>

        </Row>
    
    </>
  )
}

export default Footer
