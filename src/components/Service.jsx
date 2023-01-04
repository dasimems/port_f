import React from 'react'
import {Row, Col} from "antd"
import { services } from '../assets/data'
import ServiceCard from './ServiceCard'

const Service = () => {
  return (
    <Row justify="center" className="service">

            <Col span={22} className="service-container">

                <h2 className="title">Our Services</h2>

                <Row justify="space-between" className="service-card-container">

                    {services.map((service, index)=>{
                        return(
                            <ServiceCard data={service} key={index} />
                        )
                    })}




                </Row>

            </Col>

        </Row>
  )
}

export default Service
