import React, { useEffect } from "react"
import { Footer, Header } from "./components";
import {Link, Outlet} from "react-router-dom"
import "./assets/styles/home.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdMessage } from "react-icons/md";
import { routeName } from "./assets/data";

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

        <Link to={routeName.contact} className="fixed-contact-button">
          <MdMessage />
        </Link>
    

      <Footer />

    </>
  );
}

export default App;
