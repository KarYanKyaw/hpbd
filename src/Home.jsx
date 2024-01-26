import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Aos from "aos";
import { Link } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const name = useRef(null);
  useEffect(() => {
    const type = new Typed(name.current, {
      strings: ["Su Gyii"],
      typeSpeed: 150,
      showCursor: true,
      loop: true,
    });

    return () => {
      type.destroy();
    };
  }, []);

  return (
    <>
      <div className="container-fluid pt-3 home bg-primary min-vh-100">
        <div className="container pt-5">
          <div className="row text-center pt-5">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="col-12 "
            >
              <p className="fs-3 mb-2 fw-bold text-secondary ">
                Happy Birthday...
              </p>
              <p className="ms-2 fw-semibold text-primary display-3 ">
                <span ref={name}></span>
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              className="col-12 "
            >
              <Link to={"/present"} className="text-decoration-none">
                <button className="btn btn-lg btn-outline-secondary">
                  မွေးနေ့လက်ဆောင်ယူဖို့ဒီကိုနှိပ်ပါ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
