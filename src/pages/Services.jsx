import { Col, Row } from 'antd'
import React from 'react'
import {Link} from "react-router-dom"

import "../assets/styles/service.css"
import { routeName, services } from '../assets/data'
import { ServiceCard } from '../components'

const Services = () => {
  return (
    <>
    
        <Row justify="center" className="service">

            <Col span={22} className="service-container">

                <h2 className='title'>Concept and Strategy</h2>

                <Row justify="space-between" className='service-card-container'>
                    {services.map((service, index)=>{
                        return(
                            <ServiceCard data={service} key={index} />
                        )
                    })}

                </Row>

                <div className='flex-container justify-center cta-btn-container'>

                    <Link to={routeName.contact} className='cta-btn button'>Contact us</Link>

                </div>

            </Col>

        </Row>

    </>
  )
}

export default Services
