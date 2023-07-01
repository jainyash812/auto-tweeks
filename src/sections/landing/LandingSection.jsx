import React from "react";
import "./LandingSection.css";
import carLogo from "../../assets/red car.png";
import brandlogo1 from "../../assets/brand logo-home page-01.jpg";
import brandlogo2 from "../../assets/brand logo-home page-02.jpg";
import brandlogo3 from "../../assets/brand logo-home page-03.jpg";
import { FaCircleChevronRight } from "react-icons/fa6";
const LandingSection = () => {
  return (
    <>
      <div className="landing-section-container">
        <img
          className="landing-section-bg-image"
          src={carLogo}
          alt="car-logo"
          style={{ objectFit: "cover", width: "100%" }}
        />
        <div className="landing-section-header-container">
          <h1 className="landing-section-header-title">
            Experience The Power Within
          </h1>
          <p className="landing-section-header-subTitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
          <button
            className="landing-section-button"
            //style={{ verticalAlign: "center" }}
          >
            View Collections{" "}
            <FaCircleChevronRight />
          </button>
        </div>
      </div>
      <div
        className="brand-container"
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <img
          src={brandlogo1}
          alt="brand-logo-1"
          style={{ objectFit: "cover", width: "34%" }}
        />
        <img
          src={brandlogo2}
          alt="car-logo"
          style={{ objectFit: "cover", width: "33%" }}
        />
        <img
          src={brandlogo3}
          alt="car-logo"
          style={{ objectFit: "cover", width: "33%" }}
        />
      </div>
    </>
  );
};

export default LandingSection;
