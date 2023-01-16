import React from "react";
import search from "../assets/icons/search.svg";
import { ReactComponent as TelegramIcon } from "../assets/icons/telegram.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter.svg";
import { ReactComponent as YouTubeIcon } from "../assets/icons/youtube.svg";
import { ReactComponent as DiscordIcon } from "../assets/icons/discord.svg";
import hero from "../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="hero-info-wrapper">
        <div className="hero-info-text">
          <h1>
           <span className="highlighted">We are building a new clearing infrastructure</span><h4>For firms wishing to leverage Distributed Ledger Technology (DLT), become payment institutions, or become electronic money institutions.</h4>
          </h1>
          <p className="hero-info-description">
           
          </p>
          <div className="social-links-container">
            <div className="social-links">
              <a href="/">
              </a>
              <a href="/">
                <TwitterIcon />
              </a>
              <a href="/">
                <YouTubeIcon />
              </a>
              <a href="/">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img className="hero" src={hero} alt="blockchain" />
      </div>
    </div>
  );
};

export default HeroSection;
