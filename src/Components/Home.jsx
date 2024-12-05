import React from "react";
import WoodPlane from "../Images/home/wood-plane.jpg";
import Brace from "../Images/home/brace.jpg";
import Chest from "../Images/home/chest-detail.jpg";
import DrissellBox from "../Images/home/drissell-box-detail.jpg";
import AmericanLife from "../Images/home/Early-American-Life.jpg";
import textContent from "../Text/Home.json";
import '@fontsource/noto-sans';

const Home = ({ isMobile }) => {
    const homeImages = [WoodPlane, Brace, Chest, DrissellBox];

    return (
        <div style={styles.container}>
            <div>
                { isMobile ? <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                    <img src={WoodPlane} alt="mobile wood plane image" style={styles.mobileHomeImg} />
                    <p style={{ fontFamily: "Noto Sans", fontSize: "15px", letterSpacing: "0.3px", textAlign: "left", margin: 0, paddingTop: "20px", paddingBottom: "20px" }}>{textContent.text1[0]}</p>
                    <p style={{ fontFamily: "Noto Sans", fontSize: "15px", letterSpacing: "0.3px", textAlign: "left", margin: 0, paddingBottom: "20px" }}>{textContent.text1[1]}</p>
                    <img src={Chest} alt="mobile chest image" style={styles.mobileHomeImg} />
                    <p style={{ fontFamily: "Noto Sans", fontSize: "15px", letterSpacing: "0.3px", textAlign: "left", margin: 0, paddingTop: "20px", paddingBottom: "20px" }}>{textContent.text1[2]}</p>
                    <p style={{ fontFamily: "Noto Sans", fontSize: "15px", letterSpacing: "0.3px", textAlign: "left", margin: 0, paddingBottom: "20px" }}>{textContent.text1[3]}</p>
                    <p style={{ fontFamily: "Noto Sans", fontSize: "15px", letterSpacing: "0.3px", textAlign: "left", margin: 0, paddingBottom: "20px" }}>{textContent.text1[4]}</p>
                    <img src={DrissellBox} alt="mobile drissell box image" style={styles.mobileHomeImg} />
                    <p style={{ fontFamily: "Noto Sans", fontSize: "15px", letterSpacing: "0.3px", textAlign: "left", margin: 0, paddingTop: "20px", paddingBottom: "20px" }}>{textContent.text2[0]}</p>
                    <p style={{ fontFamily: "Noto Sans", fontSize: "15px", letterSpacing: "0.3px", textAlign: "left", margin: 0, paddingBottom: "20px" }}>{textContent.text2[1]}</p>
                    <img src={AmericanLife} alt="mobile american life magazine image" style={styles.mobileHomeImg} />
                    <p style={{ fontFamily: "Noto Sans", fontSize: "15px", letterSpacing: "0.3px", textAlign: "left", margin: 0, paddingBottom: "20px" }}>{textContent.text2[2]}</p>
                    <p style={{ fontFamily: "Noto Sans", fontSize: "15px", letterSpacing: "0.3px", textAlign: "left", margin: 0, paddingBottom: "20px" }}>{textContent.text2[3]}</p>
                    <p style={{ fontFamily: "Noto Sans", fontSize: "15px", letterSpacing: "0.3px", textAlign: "left", margin: 0, paddingBottom: "20px" }}>{textContent.text2[4]}</p>
                    <img src={Brace} alt="mobile brace image" style={styles.mobileHomeImg} />
                </div> : 
                <>
                    <div style={{ display: "inline-flex", flexWrap: "wrap", width: "60%", maxWidth: "475px", float: "left", justifyContent: "space-between", paddingRight: "20px" }}>
                    { homeImages.map((item, i) => {
                        return (
                            <img key={`desktop-home-img-${i}`} src={item} alt={`desktop-home-image-${i}`} style={{ ...styles.desktopHomeImg }} />
                        )
                    })}
                    </div>
                    { textContent.text1.map((text, i) => {
                        return (
                            <p key={`home-text1-${i}`} style={{ fontFamily: "Noto Sans", letterSpacing: "0.2px", verticalAlign: "top", textAlign: "left", margin: 0, paddingBottom: (i === textContent.length - 1) ? "0px" : "20px" }}>{text}</p>
                        )
                    })}
                    <div style={{ display: "inline-flex", width: "40%", maxWidth: "250px", float: "right", justifyContent: "flex-end", paddingLeft: "20px", paddingBottom: "20px" }}>
                        <img src={AmericanLife} style={{ width: "100%", borderRadius: "5px", boxShadow: "0px 0px 3px #000" }} />
                    </div>
                    { textContent.text2.map((text, i) => {
                        return (
                            <p key={`home-text2-${i}`} style={{ fontFamily: "Noto Sans", letterSpacing: "0.2px", verticalAlign: "top", textAlign: "left", margin: 0, paddingBottom: (i === textContent.length - 1) ? "0px" : "20px" }}>{text}</p>
                        )
                    })}
                </>}
            </div>
        </div>
    )
};

let styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%"
    },
    desktopHomeImg: {
        width: "48%",
        height: "auto",
        marginBottom: "20px",
        borderRadius: "5px",
        boxShadow: "0px 0px 3px #000"
    },
    mobileHomeImg: {
        width: "100%",
        height: "auto",
        borderRadius: "5px",
        boxShadow: "0px 0px 3px #000"
    }
};

export default Home;