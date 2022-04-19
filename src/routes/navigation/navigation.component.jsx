import React from "react";
import {

  Link,
  Outlet,
} from "react-router-dom";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import News from "../../components/news/news.component";



export default function Navigation() {
  return (
    <React.Fragment>
    <Header/>
      <div className="twocolumns">

       
        <Outlet />
     
        <nav>

          <Link to="/">Home</Link> |{" "}
          <Link to="dashboard">Dashboard</Link> |{" "}
          <Link to="about">About</Link>
       
          <News/>

        </nav>
      </div>
    <Footer/>
    </React.Fragment>
   
  );
}

