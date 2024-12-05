import React from "react";
import Navigation from "./Navigation";

const HamburgerMenu = ({ setIsMenuOpen }) => {
    return(
        <div onClick={() => setIsMenuOpen(false)} style={styles.hamburgerWrapper}>
            <div style={styles.overlay}></div>
            <Navigation isMobile={true} />
        </div>
    )
}

const styles = {
    hamburgerWrapper: {
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "#121212",
        top: 0,
        right: 0
    },
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "whitesmoke",
        opacity: 0.15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
    },
    title: {
        width: "100%",
        backgroundColor: "rgb(134, 67, 56)",
        fontSize: "34px",
        fontFamily: "IM Fell English",
        lineHeight: 1,
        letterSpacing: "2px",
        marginTop: 0,
        marginBottom: "10px",
        zIndex: 1001
    },
    subtitle: {
        width: "100%",
        backgroundColor: "rgb(134, 67, 56)",
        fontSize: "16px",
        fontFamily: "IM Fell English",
        fontStyle: "italic",
        letterSpacing: "1.5px",
        margin: 0,
        zIndex: 1001
    }
}

export default HamburgerMenu;