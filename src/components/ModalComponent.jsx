import React, { useEffect, useState } from 'react'

const ModalComponent = ({active, onActive, onUnActive, className, children, ...props}) => {

  const [display, setDisplay] = useState("none")
  const [opacity, setOpacity] = useState(0)

  useEffect(()=>{

    if(active){

      setDisplay("block");

      setTimeout(()=>{
        setOpacity(1)

        if(onActive){
          onActive();
        }
      }, 100)

    }else{

      if(onUnActive){
        onUnActive();
      }

      
      setOpacity(0)

      setTimeout(()=>{
        setDisplay("none")
      }, 600)

    }

  }, [active, onActive, onUnActive])



  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      position: "fixed",
      background: "rgba(0, 0, 0, .5)",
      opacity: opacity,
      display: display,
      zIndex: 9999,
      transition: "0.5s ease all"
    }}>

      <div
        style={{
          width: "100%",
          height: "100%"
        }}
        className={`${className? className: ""}`} {...props}>

        {children}

      </div>

      
    </div>
  )
}

export default ModalComponent
