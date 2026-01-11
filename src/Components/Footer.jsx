import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        paddingTop: "40px",
        paddingBottom: "40px",
        fontFamily: "Noto Sans",
        letterSpacing: "0.2px",
      }}
    >
      <h3 style={{ margin: 0, paddingBottom: "10px" }}>
        &copy;2026 Paint + Patina
      </h3>
      <a
        href="https://github.com/allisonlivingston"
        style={{
          textDecoration: "none",
          color: "whitesmoke",
          width: "fit-content",
          alignSelf: "center",
        }}
      >
        <h6 style={{ margin: 0 }}>Web Design by Allison Livingston</h6>
      </a>
    </div>
  );
};

export default Footer;
