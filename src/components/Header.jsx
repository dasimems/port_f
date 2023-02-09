import { Button, Row } from 'antd'
import { Col } from 'antd/es/grid'
import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { images, routeName } from '../assets/data'
import Links from './Links'
import { FaBars } from 'react-icons/fa'
import ModalComponent from './ModalComponent'
import { MdClose } from 'react-icons/md'

const Header = () => {
    const [mobileLinkActive, setMobileLinkActive] = useState(false)
    const [mobileLinkShown, setMobileLinkShown] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        setMobileLinkActive(false)
        setMobileLinkShown(false)
    }, [navigate])
  return (

    <>
        <Row justify="center" className="header align-center">
            <Col span={22} className="header-container">

                <Row justify="space-between" className="header-inner-content align-center">
                    
                    <Link className="header-logo" to={routeName.home}>
                        <img src={images.logo.image} alt={images.logo.alt} />
                    </Link>

                    <Links className="header-links desktop-links flex-container align-center" />

                    <Button className='mobile-menu-open-btn' onClick={()=>{
                        setMobileLinkActive(true)
                    }}><FaBars /></Button>
                    
                </Row>

            </Col>
        </Row>

        <ModalComponent 
            onActive={()=>{
                setMobileLinkShown(true)
            }} 
            onUnActive={()=>{
                setMobileLinkShown(false)
            }}
            active={mobileLinkActive}>
            <div className={`mobile-link-content ${mobileLinkShown? "active-mobile-content" : ""}`}>

                <div className="mobile-link-header flex-container space-between align-center">

                    <div className='header-logo'>
                        <img src={images.logo.image} alt={images.logo.alt} />
                    </div>

                    <Button className='close-mobile-menu' onClick={()=>{
                        setMobileLinkActive(false)
                    }}>
                        <MdClose />
                    </Button>

                </div>

                <Links 
                    className="flex-container list-style-none column mobile-links"
                
                />

            </div>
        </ModalComponent>
    
    </>
  )
}

export default Header
