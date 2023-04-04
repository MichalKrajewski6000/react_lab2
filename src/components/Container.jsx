import React from "react";
import BlockContainer from "./BlockContainer";
import SearchBar from "./SearchBar";
import SmallContainer from "./SmallContainer";
import UserBlock from "./UserBlock";

const Container = () => {
    return <div style={{marginLeft: "20vw", paddingTop: 20, display: "grid"}}>
        <div style={{display: "block"}}>
            <SearchBar />
        </div>
        <div style={{display: "block"}}>
            <div style={{display: "flex", marginTop: "3vh", columnGap: 20, rowGap: 20}}>
                <UserBlock name="Michał" progress="72%" />
                <div style={{display: "block"}}>
                        <SmallContainer title="Profit" value="+20%" />
                        <SmallContainer title="Incomes" value="520$" />    
                </div>
                <div style={{display: "block"}}>
                        <SmallContainer title="Month" value="April" />
                        <SmallContainer title="Year" value="2023" />   
                </div>
            </div>
        </div>
        <div style={{display: "block"}}>
            <div style={{display: "flex", marginTop: "3vh", columnGap: 20}}>
                <BlockContainer />
                        <SmallContainer title="Incomes" value="5200$" />
                        <SmallContainer title="Outcomes" value="1450$" />   
            </div>
        </div>
    </div>
}

export default Container;