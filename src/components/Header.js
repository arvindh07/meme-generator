import React from 'react';
import logo from "../images/logo.png";
import "./styles/Header.css";

export const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <h3>Meme generator</h3>
        <h4>React Course - Project 3</h4>
    </header>
  )
}
