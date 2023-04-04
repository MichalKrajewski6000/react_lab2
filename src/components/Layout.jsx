import React from "react";
import Container from "./Container";
import SiderMenu from "./SiderMenu";

const Layout = () => {
    return <>
    <section style={{height: "100%"}}>
        <SiderMenu />
        <Container />
    </section></>

}

export default Layout;