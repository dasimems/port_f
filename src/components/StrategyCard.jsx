import React from 'react'
import { Col } from 'antd'

const StrategyCard = ({ data, ...props }) => {
  var { icon, service, description, background } = data
  return (
    <Col
      {...props}
      span={5}
      lg={{ span: 5 }}
      md={{ span: 5 }}
      sm={{ span: 11 }}
      xs={{ span: 24 }}
      className={background? "service-card background-card" : "service-card"}
    >
      <div className="service-card-icon">{icon}</div>

      <h3 className="service-card-title">{service}</h3>

      <p className="service-card-description">{description}</p>
    </Col>
  )
}

export default StrategyCard
