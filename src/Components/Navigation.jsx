import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ isMobile }) => {
    let styles = {
        navContainer: {
            backgroundColor: "#121212",
            paddingRight: isMobile ? 0 : "3vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: isMobile ? "100%" : "220px",
            position: isMobile ? "relative" : "inherit",
            zIndex: isMobile ? 1001 : "auto"
        },
        navItem: {
            width: "100%",
            textDecoration: "none",
            padding: "15px 5px",
            color: "whitesmoke",
            fontSize: "min(1.8vw, 18px)",
            fontWeight: "bold",
            letterSpacing: "2px",
            fontFamily: "IM Fell English"
        },
        active: {
            border: "solid 1px whitesmoke",
            borderRadius: "5px",
            backgroundColor: "rgb(134, 67, 56)"
        },
        divider: {
            height: "1px",
            width: "100%",
            backgroundColor: "whitesmoke",
            borderRadius: "5px"
        }
    }

    return (
        <nav style={styles.navContainer}>
            <NavLink style={({ isActive }) => isActive ? {...styles.navItem, ...styles.active} : {...styles.navItem}} to="/">HOME</NavLink>
            {/* <div style={styles.divider}></div> */}
            <NavLink style={({ isActive }) => isActive ? {...styles.navItem, ...styles.active} : {...styles.navItem}} to="/about">ABOUT/CONTACT</NavLink>
            {/* <div style={styles.divider}></div> */}
            <NavLink style={({ isActive }) => isActive ? {...styles.navItem, ...styles.active} : {...styles.navItem}} to="/gallery">GALLERY</NavLink>
        </nav>
    )
};

export default Navigation;