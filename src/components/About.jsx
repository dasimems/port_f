import React from 'react'
import { Row, Col } from 'antd'

import { about, images } from '../assets/data'
import AboutCard from './AboutCard'
const About = () => {
  return (
    <>
      <Row justify="center" className="about">
        <Col span={22} className="about-container">
          {/* <h2 className="title"></h2> */}

          <Row justify="space-between" className="about-content">
            <Col
              span={11}
              lg={{ span: 11 }}
              md={{ span: 11 }}
              xs={{ span: 24 }}
              className="about-card-container"
            >
              {about.map((ab, index) => {
                return <AboutCard data-aos="slide-right" serial={index + 1} data={ab} key={index} />
              })}
            </Col>
            <Col
              span={11}
              lg={{ span: 11 }}
              md={{ span: 11 }}
              xs={{ span: 24 }}
              className="about-image"
              data-aos="zoom-in"
            >
              <img
                className="image image-one"
                src={images.appOne.image}
                alt={images.appOne.alt}
              />
              <img
                className="image image-two"
                src={images.appTwo.image}
                alt={images.appTwo.alt}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default About
