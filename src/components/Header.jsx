import { Row } from 'antd'
import { Col } from 'antd/es/grid'
import React from 'react'
import {Link} from "react-router-dom"
import { headerLinks, images, routeName } from '../assets/data'

const Header = () => {
  return (
    <Row justify="center" className="header align-center">
        <Col span={22} className="header-container">

            <Row justify="space-between" className="header-inner-content">
                
                <Link className="header-logo" to={routeName.home}>
                    <img src={images.logo.image} alt={images.logo.alt} />
                </Link>

                <ul className='header-links flex-container align-center'>
                    {headerLinks.map((linkDetails, index)=>{
                        var {linkName, link, bordered} = linkDetails;

                        return(
                            <li key={index}>
                                <Link className={bordered? "border-link link" : "link"} to={link}>{linkName}</Link>
                            </li>
                        )
                        
                    })}
                </ul>
                
            </Row>

        </Col>
    </Row>
  )
}

export default Header
