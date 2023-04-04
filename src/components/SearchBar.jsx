import React from "react";
import "./SearchBar.css";

import image from "../images/img_avatar.png";

const SearchBar = () => {
    return <div className="search">
        <input type="search" placeholder="Search..." />
        <img src={image} alt="user" style={{borderRadius: "50%", width: 50, height:50, marginLeft: 50}}/>    
    </div>
}

export default SearchBar;