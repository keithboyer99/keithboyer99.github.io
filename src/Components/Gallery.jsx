import React from "react";
import textContent from "../Text/Gallery.json";
import SlideShow from "./SlideShow";

const Gallery = ({ isMobile }) => {
    const styles = {
        text: {
            verticalAlign: "top",
            textAlign: "left",
            margin: 0,
            fontFamily: "Noto Sans",
            letterSpacing: isMobile ? "0.3px" : "0.2px",
            fontSize: isMobile ? "15px" : "16px"
        }
    }
    return (
        <div>
            <SlideShow isMobile={isMobile} />
            { textContent.text.map((text, i) => {
                return (
                    <p key={`home-text-${i}`} style={{ ...styles.text, paddingBottom: (i === textContent.length - 1) ? "0px" : "20px" }}>{text}</p>
                )
            })}
        </div>
    )
};

export default Gallery;