import React from 'react'

const AboutCard = ({data, serial, ...props}) => {
    var {title, description} = data;
  return (
    <div className="about-card flex-container column align-end" {...props}>

        <div className='serial-number flex-container align-center justify-center'>

            <p>{serial}</p>

        </div>

        <div className='about-card-overlay'>

        </div>

        <div className='about-card-content'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
      
    </div>
  )
}

export default AboutCard
