import React from 'react'
import {Col} from "antd"

const TeamCard = ({data, ...props}) => {
    var {image, name, skills} = data
  return (
    <Col {...props} span={7} lg={{span: 7}} md={{span: 7}} xs={{span: 24}} className="team-card flex-container align-center">

        <div className='team-card-image'>

            <img src={image} alt="" />

        </div>

        <div className="team-card-details">

            <h3>{name}</h3>
            <p>{skills}</p>

        </div>

    </Col>
  )
}

export default TeamCard
