import React from "react";
import search from "../assets/icons/search.svg";
import { ReactComponent as TelegramIcon } from "../assets/icons/telegram.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter.svg";
import { ReactComponent as YouTubeIcon } from "../assets/icons/youtube.svg";
import { ReactComponent as DiscordIcon } from "../assets/icons/discord.svg";
import hero from "../assets/hero.png";
import africa from "../assets/africa.mp4";

const HeroSection = () => {
  return (
    <div className="hero-section-container">
   {/* <video className="hero-video" autoPlay loop>
    <source src={africa} type="video/mp4" />
    Your browser does not support the video tag.
</video> */}
      <div className="hero-info-wrapper">
        <div className="hero-info-text">
          <h1>
            Building a fairer and more connected financial world
          </h1>
          <h4>
            Empowering SMEs and revolutionizing cross-border payments through innovative technology solutions
          </h4>
          <div className="social-links-container">
            <div className="social-links">
              <a href="/">
                <TelegramIcon />
              </a>
              <a href="/">
                <TwitterIcon />
              </a>
              <a href="/">
                <YouTubeIcon />
              </a>
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HeroSection;
