import React, { useState } from "react";
import '@fontsource/im-fell-english';
import Hamburger from "../Images/icons/hamburger_menu.svg";
import CloseIcon from "../Images/icons/close.svg";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";

const Header = ({ isMobile }) => {
    const styles = {
        container: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingTop: isMobile ? "30px" : "40px",
            paddingBottom: isMobile ? "30px" : "40px",
            backgroundColor: "rgb(134, 67, 56)",
            position: "relative",
            zIndex: isMobile ? 1001 : "auto"
        },
        textWrapper: {
            width: isMobile ? "100%" : "90%",
            textAlign: "left",
            paddingLeft: isMobile ? "20px" : "0px",
            paddingRight: isMobile ? "20px" : "0px"
        },
        title: {
            fontSize: isMobile ? "34px" : "48px",
            fontFamily: "IM Fell English",
            lineHeight: 1,
            letterSpacing: isMobile ? "2px" : "3px",
            marginTop: 0,
            marginBottom: "10px"
        },
        subtitle: {
            fontSize: isMobile ? "16px" : "20px",
            fontFamily: "IM Fell English",
            fontStyle: "italic",
            letterSpacing: "1.5px",
            margin: 0
        },
        hamburgerIcon: {
            position: "absolute",
            top: 0,
            right: 0,
            padding: "20px",
            width: "40px",
            height: "40px"
        },
        closeIcon: {
            position: "absolute",
            background: "transparent",
            color: "whitesmoke",
            border: "none",
            cursor: "pointer",
            top: 0,
            right: 0,
            paddingTop: "20px",
            paddingRight: "20px",
            lineHeight: 1
        }
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div style={styles.container}>
                <div style={styles.textWrapper}>
                    { isMobile && !isMenuOpen && <img src={Hamburger} alt="hamburger-menu-icon" style={styles.hamburgerIcon} onClick={() => setIsMenuOpen(true)} />}
                    { isMobile && isMenuOpen && <button style={styles.closeIcon} onClick={() => setIsMenuOpen(false)}>
                        <img src={CloseIcon} alt="close icon" style={{ width: "40px", height: "40px" }} />
                    </button>}
                    <Link style={{ textDecoration: "none", color: "whitesmoke", display: "flex", width: "fit-content" }} to="/" onClick={() => setIsMenuOpen(false)}><h1 style={styles.title}>Paint + Patina</h1></Link>
                    <h3 style={styles.subtitle}>Keith Boyer Folk Art + Woodworking</h3>
                </div>
            </div>
            { isMenuOpen && <HamburgerMenu setIsMenuOpen={setIsMenuOpen} />}
        </>
    )
};

export default Header;