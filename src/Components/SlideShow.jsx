import React, { useEffect, useState } from "react";
import LeftArrow from "../Images/icons/left_arrow.svg";
import RightArrow from "../Images/icons/right_arrow.svg";
import CloseIcon from "../Images/icons/close.svg";

const SlideShow = ({ isMobile }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [importedImages, setImportedImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentImages, setCurrentImages] = useState([]);
    const [itemNames, setItemNames] = useState([]);
    const [currentNames, setCurrentNames] = useState([]);
    const [selectedName, setSelectedName] = useState("");
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const imagesPerPage = 6;

    useEffect(() => {
        const context = require.context("../Images/gallery", false, /\.(png|jpe?g|svg)$/);
        const allImages = context.keys().map(context);
        const names = context.keys().map(image => {
            return image.replace(/\.\/|\.jpg/g, "").replace(/_/g, " ");
        });
        setImportedImages(allImages);
        setItemNames(names);
        setTotalPages(Math.ceil(allImages.length/imagesPerPage));
    }, [])

    useEffect(() => {
        loadCurrentImages();
    }, [importedImages, currentPage])

    const loadCurrentImages = () => {
        const indexOfLastImage = currentPage * imagesPerPage;
        const indexOfFirstImage = indexOfLastImage - imagesPerPage;
        const slicedImages = importedImages.slice(indexOfFirstImage, indexOfLastImage);
        const slicedNames = itemNames.slice(indexOfFirstImage, indexOfLastImage);
        setCurrentImages(slicedImages);
        setCurrentNames(slicedNames);
    };

    const nextPage = () => {
        setCurrentPage((prev) => prev < totalPages ? prev + 1 : prev);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const openModal = (image, i) => {
        setSelectedImage(image);
        setSelectedName(currentNames[i]);
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
        setSelectedName("");
    };

    const handleImageHover = (image, i) => {
        setSelectedImage(image);
        setSelectedName(currentNames[i]);
        setHoveredIndex(i);
    }
    
    return (
        <div style={{ marginBottom: isMobile ? "20px" : "50px" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", minHeight: isMobile ? "200px" : "400px" }}>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)", gap: "10px", margin: 0, alignItems: "center" }}>
                    { currentImages.map((image, i) => {
                        return (
                            <div key={`thumbnail-container-${currentPage}-${i}`} style={{ display: "flex", justifyContent: "center" }}>
                                <img key={`thumbnail-${currentPage}-${i}`} src={image} alt={`thumbnail-${currentPage}-${i}`} style={{ width: "100%", height: isMobile ? "150px" : "250px", objectFit: "cover", borderRadius: "5px", cursor: "pointer", boxShadow: "0px 0px 2px #000", opacity: hoveredIndex === i ? 0.1 : 1, zIndex: 1 }} onClick={() => openModal(image, i)} onMouseOver={() => handleImageHover(image, i)} onMouseOut={() => setHoveredIndex(null)} />
                                { hoveredIndex === i && <p key={`item-name-${currentPage}-${i}`} style={{ fontFamily: "Noto Sans", letterSpacing: "0.2px", fontSize: "18px", fontWeight: "bold", alignSelf: "center", position: "absolute", width: isMobile ? "28vw" : "18vw" }}>{selectedName}</p>}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div style={{ marginTop: isMobile ? "30px" : "50px", display: "flex", justifyContent: "center" }}>
                <img src={LeftArrow} onClick={prevPage} style={{ borderRadius: "50%", color: "rgb(134, 67, 56)", cursor: "pointer", visibility: `${currentPage === 1 ? "hidden" : "visible"}`, width: isMobile ? 20 : 30, height: isMobile ? 20 : 30, alignSelf: "center", marginRight: isMobile ? "20px" : "40px" }} />
                <span style={{ fontFamily: "Noto Sans", letterSpacing: "0.2px", fontSize: "18px", fontWeight: "bold", alignSelf: "center" }}>
                    Page {currentPage} of {totalPages}
                </span>
                <img src={RightArrow} onClick={nextPage} style={{ borderRadius: "50%", color: "rgb(134, 67, 56)", cursor: "pointer", visibility: `${currentPage === totalPages ? "hidden" : "visible"}`, width: isMobile ? 20 : 30, height: isMobile ? 20 : 30, alignSelf: "center", marginLeft: isMobile ? "20px" : "40px" }} />
            </div>
            {isModalOpen && (
                <div style={{ display: "flex", position: "fixed", top: 0, left: 0, justifyContent: "center", alignItems: "center", width: "100%", height: "100%", zIndex: 1002 }}>
                    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "#000000BF", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }} onClick={closeModal}></div>
                    <div
                        style={{ position: "absolute", height: isMobile ? "auto" : "70%", width: isMobile ? "90%" : "auto", maxWidth: isMobile ? "none" : "80%", zIndex: 1001, display: "flex", flexDirection: "column-reverse", justifyContent: isMobile ? "revert" : "center", padding: isMobile ? "20px 10px" : "60px 40px", top: "5%", boxShadow: "rgb(134, 67, 56) 0px 0px 1px 6px", borderRadius: "2px", backgroundColor: "#121212" }}
                    >
                        <img
                        src={selectedImage}
                        alt="Selected"
                        style={{ width: isMobile ? "100%" : "auto", maxHeight: "100%", borderRadius: "10px", boxShadow: "0px 0px 2px #000", zIndex: 1002 }}
                        />
                        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "15px" }}>
                            <h3 style={{ margin: 0, zIndex: 1001, fontFamily: "Noto Sans", fontSize: isMobile ? "22px" : "26px", letterSpacing: "0.3px" }}>{selectedName}</h3>
                            <button
                                onClick={closeModal}
                                style={{
                                    position: "absolute",
                                    right: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    background: "transparent",
                                    color: "whitesmoke",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: 0
                                }}
                            >
                                <img src={CloseIcon} alt="close icon" style={{ width: isMobile ? "30px" : "40px", height: isMobile ? "30px" : "40px" }} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SlideShow;