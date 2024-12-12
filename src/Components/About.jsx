import React from "react";
import Portrait from "../Images/about/Keith.jpg";
import AboutTextContent from "../Text/About.json";
import ContactTextContent from "../Text/Contact.json";
import Rasp from "../Images/about/Rasp_Tool.jpg";

const About = ({ isMobile }) => {

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            width: "100%"
        },
        portraitWrapper: {
            display: "inline-flex",
            flexWrap: isMobile ? "nowrap" : "wrap",
            width: isMobile ? "100%" : "50%",
            maxWidth: isMobile ? "none" : "350px",
            float: isMobile ? "none" : "left",
            justifyContent: "space-between",
            paddingRight: isMobile ? 0 : "40px",
            paddingBottom: isMobile ? "20px" : "10px"
        },
        portraitImg: {
            width: "100%",
            borderRadius: "5px",
            boxShadow: "0px 0px 3px #000"
        },
        text: {
            verticalAlign: "top",
            textAlign: "left",
            margin: 0,
            paddingBottom: "20px",
            fontFamily: "Noto Sans",
            fontSize: isMobile ? "15px" : "16px",
            letterSpacing: isMobile ? "0.3px" : "0.2px"
        }
    };

    return (
        <div style={styles.container}>
            <div>
                <div style={styles.portraitWrapper}>
                    <img src={Portrait} style={styles.portraitImg} />                
                </div>
                { AboutTextContent.map((text, i) => {
                    return (
                        <>
                            { text.text.length > 1 ? <div style={{ ...styles.text, display: "inline", textAlign: "left", float: "left" }}>
                                { text.text.map((group, i) => {
                                    return (
                                        i % 2 === 0 ? <span>
                                            {group}
                                        </span> : 
                                        <span style={{ fontStyle: "italic" }}>{group}</span>
                                    )
                                })}
                            </div> : 
                            <p key={`home-text-${i}`} style={styles.text}>{text.text}</p>}
                        </>
                    )
                })}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", marginTop: isMobile ? 0 : "20px" }}>
                    <h2 style={{ fontSize: "25px", fontWeight: "bold", letterSpacing: "2px", fontFamily: "IM Fell English" }}>CONTACT INFO</h2>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: isMobile ? "column" : "row" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <h3 style={{ fontFamily: "Noto Sans", fontSize: "20px", letterSpacing: "0.2px", marginBottom: "5px", marginTop: 0 }}>{ContactTextContent.name}</h3>
                            <p style={{ fontFamily: "Noto Sans", letterSpacing: isMobile ? "0.3px" : "0.2px", margin: isMobile ? "2px" : "5px", fontSize: isMobile ? "15px" : "16px" }}>{ContactTextContent.address1}</p>
                            <p style={{ fontFamily: "Noto Sans", letterSpacing: isMobile ? "0.3px" : "0.2px", margin: isMobile ? "2px" : "5px", fontSize: isMobile ? "15px" : "16px" }}>{ContactTextContent.address2}</p>
                            <p style={{ fontFamily: "Noto Sans", letterSpacing: isMobile ? "0.3px" : "0.2px", margin: isMobile ? "2px" : "5px", fontSize: isMobile ? "15px" : "16px" }}>{ContactTextContent.phone}</p>
                            <p style={{ fontFamily: "Noto Sans", letterSpacing: isMobile ? "0.3px" : "0.2px", margin: isMobile ? "2px" : "5px", fontSize: isMobile ? "15px" : "16px" }}>{ContactTextContent.email}</p>
                        </div>
                        <div style={{ display: "flex", width: isMobile ? "100%" : "50%", maxWidth: isMobile ? "none" : "350px", paddingLeft: isMobile ? 0 : "20px", paddingTop: isMobile ? "20px" : 0 }}>
                            <img src={Rasp} style={{ width: "100%", maxWidth: "250px", borderRadius: "5px", boxShadow: "0px 0px 3px #000" }} />                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;