import React from "react";
import NavBar from "../Components/NavBar/navBar";
import Carousel from "../Components/Carousel/carousel";
import './header.scss';

function Header(props){

    return(
        <header className="Header-Container">
          <NavBar/>
          <Carousel/>                                       
        </header>
    )
}

export default Header;