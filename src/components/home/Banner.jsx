import React from 'react'
import {Col, Row} from "antd"
import { bannerList, routeName } from '../../assets/data'
import ListCard from './ListCard'
import { Link } from 'react-router-dom'

const Banner = () => {
  console.log(window.innerWidth, window.innerHeight)
  return (
    <Row justify="center" className="banner">

        <div className="banner-image">

          <div className='banner-content flex-container align-center'>

            <Row>

              <Col push={1} className='banner-main-content'>
                <h1 className='banner-title'>We Build Apps That Get Trending On AppStore.</h1>
                <p className='banner-subtitle'>We design and develop mobile apps that delight your users and grow your business. Enterprise-grade development combined with outstanding design.</p>

                <Link className='button banner-cta' to={routeName.works}>
                  All works
                </Link>

              </Col>

            </Row>


          </div>

        </div>
        

        <div className='banner-list'>

            {bannerList.map((list, index) => (<ListCard {...list} key={index} />))}

        </div>
    </Row>
  )
}

export default Banner
