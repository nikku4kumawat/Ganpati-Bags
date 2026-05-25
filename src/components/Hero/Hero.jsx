import React, { useEffect, useState } from "react";
import "./Hero.css";

import hero1 from "../../assets/images/hero/hero1.jpg";
import hero2 from "../../assets/images/hero/hero2.jpg";
import hero3 from "../../assets/images/hero/hero3.jpg";
import hero4 from "../../assets/images/hero/hero4.jpg";
import hero5 from "../../assets/images/hero/hero5.jpg";

const slides = [
  {
    image: hero1,
    title: "SUMMER ESSENTIALS",
    subtitle: "GET UP TO",
    offer: " 70% OFF",
    special: "SPECIAL OFFER",
    button: "Shop Now",
  },

  {
    image: hero2,
    title: "MOBILE ACCESSORIES",
    subtitle: "SALE SPECIAL OFFER ",
    offer: "75% OFF",
    special: "LIMITED DEAL",
    button: "Shop Now",
  },

  {
    image: hero3,
    title: "HOME SUPPLIES",
    subtitle: "GET UP TO",
    offer: "65% OFF",
    special: "BEST PRICE",
    button: "Shop Now",
  },

  {
    image: hero4,
    title: "PERSONLISED PRODUCTS",
    subtitle: "-SALE UP TO-",
    offer: "50% OFF",
    special: "SPECIAL OFFER",
    button: "Shop Now",
  },

  {
    image: hero5,
    title: "MOTORBIKE & CAR ACCESSORIES",
    subtitle: "GET UP TO",
    offer: "80% OFF",
    special: "HOT DEAL",
    button: "Shop Now",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Next Slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="hero-slider">

      {/* Slides */}

      <div
        className="slider-wrapper"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >

        {slides.map((slide, index) => (
          <div className="slide" key={index}>

            <img
              src={slide.image}
              alt={`slide-${index}`}
            />

            {/* Overlay Content */}

            <div className="slide-content">

              {/* <h2>{slide.title}</h2> */}
              <h2 className="hero-title">
                 <span className="red-text">
                  {slide.title.split(" ")[0]}
                 </span>{" "}
  
                 <span className="black-text">
                   {slide.title.split(" ").slice(1).join(" ")}
                 </span>
             </h2>

              <h1>{slide.subtitle}</h1>

              
              <div className="offer-row">
                 <p className="offer-text">
                    {slide.offer}
                 </p>
                  <span className="special-text">
                    {slide.special}
                  </span>
               </div>


              

              <button className="shop-btn">
                {slide.button}
              </button>

            </div>

          </div>
        ))}
      </div>

      {/* Left Arrow */}

      <button
        className="arrow left-arrow"
        onClick={prevSlide}
      >
        ❮
      </button>

      {/* Right Arrow */}

      <button
        className="arrow right-arrow"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Dots */}

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${
              currentSlide === index
                ? "active-dot"
                : ""
            }`}
            onClick={() =>
              setCurrentSlide(index)
            }
          ></span>
        ))}
      </div>

    </div>
  );
};

export default Hero;