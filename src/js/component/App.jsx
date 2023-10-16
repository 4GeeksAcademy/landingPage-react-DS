import React from "react";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";

const App = () => {
    return(
        <>
          <Navbar />
              <div className='container'>
                 <div className='jumbotron--app'>
                     <Jumbotron/>
                 </div>    
                 <div className='cards--app'>
                     <Card/>
                 </div>
              </div>
          <Footer/>
        </>
    )
}

export default App;