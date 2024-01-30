import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay, EffectFlip } from "swiper/modules";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image5 from "./assets/image5.png";
import stars from "./assets/stars.a2bfd313.svg";
import "./Hero.css";
import hero1 from "./assets/hero-1-en.40cb8805.svg";
import hero5 from "./assets/hero-5.fcc6adf0.svg";
import hero2 from "./assets/hero-2-en.340b9e49.svg";
import hero3 from "./assets/hero-3.3479a0d9.svg";
import hero4 from "./assets/hero-4.e9116e00.svg";
import hero6 from "./assets/hero-6-en.cfac69d9.svg";
import hero7 from "./assets/hero-7-en.6bf7ad6f.svg";
import backgorund from "./assets/download.png";

const images = [image1, image2, image5, image3];

function Hero() {
  return (
    <div className="hero_content">
      <div className="titles">
        <div className="hero1-container">
          <img src={hero5} className="hero1" alt="Hero 1" />
        </div>
        <h2>
          Say Hello to Smart learning<img src={stars} />
        </h2>
        <p>
          Bid traditional learning farewell and embrace the brilliance of AI
          powered bite-sized learning!
        </p>
        <div className="hero5-container">
          <img src={hero1} className="hero5" alt="Hero 5" />
        </div>
        <button>Try Now for free</button>
      </div>
      <div className="center-container">
      <div className="hero7-container">
          <img src={hero7} className="hero1" alt="Hero 1" />
        </div>
        <div className="hero6-container">
          <img src={hero6} className="hero1" alt="Hero 1" />
        </div>
        <div className="pattern">
            <img src={backgorund}/>
        </div>
        <Swiper
          effect="cards"
          grabCursor={true}
          className="mySwiper"
          modules={[EffectCards, Autoplay, EffectFlip]}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          direction="horizontal"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hero4-container">
          <img src={hero4} className="hero1" alt="Hero 1" />
        </div>
        <div className="hero2-container">
          <img src={hero2} className="hero1" alt="Hero 1" />
        </div>
        <div className="hero3-container">
          <img src={hero3} className="hero1" alt="Hero 3" />
        </div>
      </div>
    </div>
  );
}

export default Hero;



