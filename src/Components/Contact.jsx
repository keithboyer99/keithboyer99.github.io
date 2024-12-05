import React from "react";
import textContent from "../Text/Contact.json";


const Contact = () => {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "Noto Sans", fontSize: "20px", letterSpacing: "0.2px", marginBottom: "5px", marginTop: 0 }}>{textContent.name}</h3>
                <p style={{ fontFamily: "Noto Sans", letterSpacing: "0.2px", margin: "5px", fontSize: "16px" }}>{textContent.address1}</p>
                <p style={{ fontFamily: "Noto Sans", letterSpacing: "0.2px", margin: "5px", fontSize: "16px" }}>{textContent.address2}</p>
                <p style={{ fontFamily: "Noto Sans", letterSpacing: "0.2px", margin: "5px", fontSize: "16px" }}>{textContent.phone}</p>
                <p style={{ fontFamily: "Noto Sans", letterSpacing: "0.2px", margin: "5px", fontSize: "16px" }}>{textContent.email}</p>
            </div>
        </div>
    )
};

export default Contact;