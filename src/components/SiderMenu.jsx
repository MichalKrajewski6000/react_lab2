import React, { useState } from "react";
import "./SiderMenu.css";

import logo from "../images/logo.png"
import { Box, Database, Home, Key, User, Plus, Minus } from "react-feather";

import { forEach } from "lodash";

const SiderMenu = () => {

    const [theme, setTheme] = useState("light");
    const [fontSize, setFont] = useState(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size').replaceAll('px')))

    const switchTheme = () => {
        if(theme === "light") {
            setTheme("dark");
            document.body.classList.add('dark');
            forEach(document.getElementsByName('block'), block => {
                block.classList.add('dark')
            })
        }    
        else {
            setTheme("light")
            document.body.classList.remove('dark');
            forEach(document.getElementsByName('block'), block => {
                block.classList.remove('dark')
            })
        }            
    }

    const biggerFont = () => {
        
        const newFont = fontSize + 1;
        setFont(newFont);
        document.body.style.fontSize = newFont + "px";
    }

    const smallerFont = () => {
        const newFont = fontSize - 1;
        setFont(newFont);
        document.body.style.fontSize = newFont + "px";
    }

    const darkTheme = {
        backgroundColor: "#333333", 
        float: "left", 
        width: "20vw", 
        height: "100vh", 
        color: "#ffffff",
        marginRight: 20};

    const lightTheme = {
        backgroundColor: "whitesmoke", 
        float: "left", 
        width: "20vw", 
        height: "100vh",
        marginRight: 20};

    return <nav style={theme === "dark" ? darkTheme : lightTheme}>
        <img src={logo} alt="logo" style={{width: 250, height: 100}}/>
        <div className="list-item"><Database /> Dashboards</div>
        <div className="list-item"><Home /> Layouts</div>
        <hr />
        <h3>Components</h3>
        <div className="list-item">Cards</div>
        <div className="list-item">Charts</div>
        <div className="list-item">User Interface</div>
        <div className="list-item">Extended UI</div>
        <hr />
        <h3>Pages</h3>
        <div className="list-item"><User /> Account Settings</div>
        <div className="list-item"><Key /> Authentications</div>
        <div className="list-item"><Box /> Misc</div>
        <hr />
        {theme === "dark" && <div className="list-item" onClick={() => switchTheme()}>Light Mode</div>}
        {theme === "light" && <div className="list-item" onClick={() => switchTheme()}>Dark Mode</div>}
        <div className="list-item" onClick={() => biggerFont()}><Plus /> Font</div>
        <div className="list-item" onClick={() => smallerFont()}><Minus /> Font</div>
    </nav>
}

export default SiderMenu;