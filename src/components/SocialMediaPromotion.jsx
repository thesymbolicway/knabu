import React from "react";
import { Card } from "./Card";
import gabriellepatrick from "../assets/gabriellepatrick.jpg";
import charliesilvester from "../assets/charliesilvester.jpg";
import dougmacclennan from "../assets/dougmacclennan.jpg";
import seanleerice from "../assets/seanleerice.jpg";
import charisobi from "../assets/charisobi.jpg";
import kenakure from "../assets/kenakure.jpg";
import sharnjitkaur from "../assets/sharnjitkaur.jpg";
import rodashley from "../assets/rodashley.jpg";
import arunaggarwal from "../assets/arunaggarwal.jpg";
import richardjones from "../assets/richardjones.jpg";
import philipogilvie from "../assets/philipogilvie.jpg";



const SocialMediaPromotion = () => {
  return (
    <div className="social-media-promotion-container">
      <Card>
        <>
          <div className="social-media-promotion-text">
            <h2>
              <span className="higlighted"></span> Team
            </h2>
          </div>
          <div className="social-media-promotion-icons">
          <a href="https://www.linkedin.com/in/gabriellepatrick/">
  <img src={gabriellepatrick} alt="gabrielle" />
  <p>Gabrielle Patrick</p>
  <span> CEO </span>
</a>
            <a href="/">
              <img src={charliesilvester} alt="charlies" />
              <p>Charlie Silvester</p>
              <span> COO </span>
            </a>
            <a href="/">
              <img src={dougmacclennan} alt="doug" />
              <p>Doug Macclennan</p>
              <span> CRO </span>
            </a>
            <a href="/">
              <img src={seanleerice} alt="sean" />
              <p>Sean Lee Rice</p>
              <span> Client Mgt </span>
            </a>
            <a href="/">
              <img src={charisobi} alt="obi" />
              <p>Charis Obi</p>
              <span> Ops Lead </span>
            </a>
            <a href="https://www.linkedin.com/in/sean-lee-rice/">
              <img src={kenakure} alt="ken" />
              <p>Ken Akure</p>
              <span> PR </span>
            </a>
            <a href="/">
              <img src={sharnjitkaur} alt="sharn" />
              <p>Sharnjit Kaur</p>
              <span> iNED </span>
            </a>
            <a href="/">
              <img src={rodashley} alt="rodashley" />
              <p>Rod Ashley</p>
              <span> Advisor </span>
            </a>
            <a href="/">
              <img src={arunaggarwal} alt="arunaggarwal" />
              <p>Arun Aggarwal</p>
              <span> Advisor </span>
            </a>
            <a href="https://www.linkedin.com/in/richard-jones-5001a62/">
              <img src={richardjones} alt="richardjones" />
              <p>Richard Jones</p>
              <span> Advisor </span>
            </a>
            <a href="/">
              <img src={philipogilvie} alt="richardjones" />
              <p>Philip Ogilvie</p>
              <span> Advisor </span>
            </a>
          </div>
        </>
      </Card>
    </div>
  );
};

export default SocialMediaPromotion;
