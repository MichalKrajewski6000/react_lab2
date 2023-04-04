import React from "react";

const SmallContainer = ({title, value}) => {

    const styles = {
        padding: "1em",
        border: "1px solid black",
        borderRadius: 10,
        width: "15vw",
        height: "10vw"
    }

    return <div style={styles} name="block">
        <h1>{title}</h1>
        <b>{value}</b>
    </div>
}

export default SmallContainer;