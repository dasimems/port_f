import React from 'react'
import {Row, Col} from "antd"
import { stats } from '../assets/data'
import CountUp from 'react-countup'

const Stats = () => {
  return (

    <div className='stats'>

        <Row justify='center' className="stats-container">
            
            <Col span={22} className="stats-inner-content">

                <Row justify="space-between">

                    {stats.map((stat, index)=>{

                        var {number, description} = stat

                        return(<Col span={5} lg={{span: 5}}  md={{span: 5}} sm={{span: 11}} xs={{span: 24}} className="stats-card flex-container align-center justify-center column" key={index}>

                            <h3>
                                {isFinite(number)? <CountUp
                                    end={number}
                                    start={0}
                                    duration="3"
                                    enableScrollSpy
                                    scrollSpyOnce={false}
                                />:
                                number}
                                
                            </h3>
                            <p>{description}</p>

                        </Col>)
                    })}


                </Row>  

            </Col>

        </Row>

    </div>
  )
}

export default Stats
