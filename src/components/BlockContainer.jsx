import React from "react";

import chart from "../images/chart.png";

const BlockContainer = () => {
    const styles = {
        padding: "1em",
        border: "1px solid black",
        borderRadius: 10,
        width: "40vw"
    }
    return <div style={styles} name="block">
        <img src={chart} alt="photos" style={{width: "35vw"}}/>
    </div>
}

export default BlockContainer;