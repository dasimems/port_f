import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import Error404 from "../assets/lottie/404.json"

const ErrorPage = () => {
  return (
    <div className="full-width flex-container align-center justify-center window-height">

      <Player 
        src={Error404}
        style={{
          maxWidth: "500px"
        }}
        autoplay
        loop
      
      />
      
    </div>
  )
}

export default ErrorPage
