import React, { useEffect, useState } from "react";
import "./backgroundSlider.css";
import imageSlide from "./data";
import { Cards } from "./Cards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Card } from "./Card";

const BackgroundSlider = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentState((prevState) => (prevState + 1) % imageSlide.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentState]);

  const goToNext = () => {
    setCurrentState((prevState) => (prevState + 1) % imageSlide.length);
  };

  const goToPrevious = () => {
    setCurrentState((prevState) => (prevState - 1 + imageSlide.length) % imageSlide.length);
  };

  const goToSlide = (index) => {
    setCurrentState(index);
  };

  return (
    <div className="container_style">
      <div className="bgImageStyle">
        <div
          className="backgroundImage"
          style={{ backgroundImage: `url(${imageSlide[currentState]?.url})` }}
        ></div>
        <div className="darkOverlay"></div>
      </div>
      <div className="description">
        <div>
          <h2>სოფლის მეურნეობის<br />სტატისტიკის პორტალი</h2>
          <Cards />
          <p className="description_p">{imageSlide[currentState]?.title}</p>
          <FontAwesomeIcon onClick={goToPrevious} className="slide_arrow" icon={faArrowLeft} />
          <FontAwesomeIcon onClick={goToNext} className="slide_arrow" icon={faArrowRight} />
          <Card currentState={currentState} />
        </div>
        <div className="carousel-boullt">
          {imageSlide.map((slide, index) => (
            <span
              className={`carousel_span ${currentState === index ? 'active' : ''}`}
              key={index}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
        <p className="footer_p">2023 საქართველოს სტატისტიკის ეროვნული სამსახური<br /><a href="#">მონაცემთა გამოყენების პირობები</a></p>
      </div>
    </div>
  );
};

export default BackgroundSlider;
