import React, { useEffect } from "react"
import { Footer, Header } from "./components";
import {Outlet} from "react-router-dom"
import "./assets/styles/home.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      mirror: true,
      duration: 1000
    });
  }, [])

  return (
    <>

      <Header />

        <div className="main-container">

          <Outlet />
          
        </div>
    

      <Footer />

    </>
  );
}

export default App;
