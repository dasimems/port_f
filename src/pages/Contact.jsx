import React, {useState, useCallback} from 'react'
import {Row, Col, message, Button} from "antd";
import {ImLocation2} from "react-icons/im"
import {MdPhoneInTalk} from "react-icons/md"
import {FaEnvelope, FaFacebookSquare, FaLinkedin, FaPaperPlane, FaTwitterSquare, FaWhatsappSquare} from "react-icons/fa"

import "../assets/styles/contact.css"
import { contactDetails } from '../assets/data';

const Contact = () => {

    const [formState, setFormState]= useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false)

    const sendMessage = useCallback(()=>{
        var {name, email, message: formMessage} = formState;

        if(name.trim() === ""){

            message.error("Please fill in your name");
            
        }else if(email.trim() === ""){
            
            message.error("Please fill in your email address");
            
        }else if(formMessage.trim() === ""){
            
            formMessage.error("Please type in your message");

        }else{

            setLoading(true)

        }

    }, [formState])

  return (
    
    <>

        <div className='contact-parent'>

            <Row justify="center" className="contact">
                <Col span={22} className="contact-container">

                    <Row justify="space-between" className="contact-content">

                        <Col span={9} lg={{span: 9}} md={{span: 10}} xs={{span: 24}} className="contact-content-container contact-details flex-container column justify-center">

                            <ul className="contact-details-content">
                                <li className="flex-container align-center">
                                    <span className="icon"><ImLocation2 /></span>
                                    <span className="text">{contactDetails.location}</span>
                                </li>

                                <li className="flex-container  align-center">
                                    <span className="icon"><MdPhoneInTalk /></span>
                                    <span className="text">{contactDetails.phoneNumberOne}</span>
                                </li>

                                <li className="flex-container  align-center">
                                    <span className="icon"><FaEnvelope /> </span>
                                    <span className="text">{contactDetails.email}</span>
                                </li>
                            </ul>

                            <ul className="social-links flex-container">

                                <li><a href={contactDetails.linkedIn} target="_blank" rel="noreferrer"><FaLinkedin /></a></li>

                                {/* <li><a href={contactDetails.twitter} target="_blank" rel="noreferrer"><FaTwitterSquare /></a></li> */}

                                <li><a href={contactDetails.facebook} target="_blank" rel="noreferrer"><FaFacebookSquare /></a></li>

                                <li><a href={contactDetails.whatsapp} target="_blank" rel="noreferrer"><FaWhatsappSquare /></a></li>

                            </ul>

                        </Col>
                        <Col span={13} lg={{span: 13}} md={{span: 13}} xs={{span: 24}} className="contact-content-container">

                        <h2>Contact us</h2>

                        <p> Please send us message about your project below. We will get back to you at the earliest</p>

                        <div className="contact-form flex-container space-between wrap">

                            <div className="form-content flex-container column half-width">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder='example@example.com' value={formState.email} onChange={(e)=>{
                                    setFormState(prevState => ({...prevState, email: e.target.value}));
                                }} />
                            </div>

                            <div className="form-content flex-container column half-width">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" placeholder='Adrenal John' value={formState.name} onChange={(e)=>{
                                    setFormState(prevState => ({...prevState, name: e.target.value}));
                                }} />
                            </div>

                            <div className="form-content flex-container column full-width">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder='example@example.com' value={formState.message} onChange={(e)=>{
                                    setFormState(prevState => ({...prevState, message: e.target.value}));
                                }} />
                            </div>

                            <div className="form-content flex-container column align-end full-width">

                                <Button loading={loading} className="button send-btn flex-container align-center" onClick={sendMessage}>
                                    <span className='text'>
                                        Send

                                    </span>

                                    <span className='icon'>
                                        <FaPaperPlane />

                                    </span>
                                </Button>
                                
                            </div>

                        </div>


                        </Col>

                    </Row>

                </Col>
            </Row>  

        </div>
    

    </>
  )
}

export default Contact
