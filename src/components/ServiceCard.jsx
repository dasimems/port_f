import React from 'react'
import { Col } from 'antd'

const ServiceCard = ({ data, ...props }) => {
  var { icon, service, description, background } = data
  return (
    <Col
      {...props}
      span={7}
      lg={{ span: 7 }}
      md={{ span: 7 }}
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

export default ServiceCard
