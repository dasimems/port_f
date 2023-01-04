import React from 'react'
import {Row, Col} from "antd"
import { reasons } from '../assets/data'
import StrategyCard from './StrategyCard'

const Strategy = () => {
  return (
    <Row justify="center" className="service-one">

            <Col span={22} className="service-container">

                <h2 className='title'>Concept and Strategy</h2>

                <Row justify="space-between" className='service-card-container'>
                    {reasons.map((service, index)=>{
                        return(
                            <StrategyCard data={service} key={index} />
                        )
                    })}

                </Row>

                {/* <div className='flex-container justify-center cta-btn-container'>

                    <Link to={routeName.contact} className='cta-btn button'>Contact us</Link>

                </div> */}

            </Col>

        </Row>
  )
}

export default Strategy
