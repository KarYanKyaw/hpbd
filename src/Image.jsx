import React from "react";
import p2Image from "./assets/p-2.jpg";
import pImage from "./assets/p.jpg";
import { Link } from "react-router-dom";

const Image = () => {
  return (
    <>
      <div className="col-12 mt-5 pt-5">
        <div className="container pt-3 animate__animated animate__zoomInDown">
          <div className="present">
            <p className="mb-2 fs-5 fw-semibold">
              Leee pl ya ml kwa ahahahahhahaha
            </p>
            <img src={pImage} className="p-img" alt="p" />
            <img src={p2Image} className="p-img" alt="p" />
          </div>
        </div>
        <Link to={"/"}>
          <button className="btn mt-3 btn-outline-secondary">ဟိုးရှေ့ပြန်သွား</button>
        </Link>
      </div>
    </>
  );
};

export default Image;
