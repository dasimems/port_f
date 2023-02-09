import React from 'react'
import {Row, Col} from "antd"
import { team } from '../assets/data'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <Row justify="center" className='team'>
        <Col span={22} className="team-container">
            <h2 className="title">Our Team</h2>

            <p className='subtitle'>Sit et id aute velit voluptate esse dolor sunt nulla cillum labore non.</p>

            <Row justify="space-between" className="team-card-container">

                {team.map((tea, index)=>{
                    return(
                        <TeamCard data-aos="flip-down" data={tea} key={index} />
                    )
                })}

            </Row>
        </Col>
    </Row>
  )
}

export default Team
