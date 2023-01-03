import React from "react"
import { Footer, Header } from "./components";
import {Outlet} from "react-router-dom"

function App() {

  

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
