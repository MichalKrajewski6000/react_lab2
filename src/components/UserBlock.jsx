import React from "react";
import avatar from "../images/img_avatar.png"

const UserBlock = ({name, progress}) => {

    const lightTheme = {
        padding: "1em",
        border: "1px solid black",
        borderRadius: 10,
        width: "40vw"
    }

    return <div style={lightTheme} name="block">
        <h1>Hello {name}</h1>
        <b>Congratulations!! Your have done {progress} more sales this month.<br /></b>
        <img src={avatar} alt="avatar" style={{width: "30%", height: "70%"}}/>
    </div>
}

export default UserBlock;