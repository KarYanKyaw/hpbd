import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Aos from "aos";
import Image from "./Image";

const Present = () => {
  const wish = useRef(null);
  const wish1 = useRef(null);
  const wish2 = useRef(null);

  const [isClicked, setIsClicked] = useState(false);
  const [isTyped, setIsTyped] = useState(false);

  const changeToTrue = () => {
    setIsTyped(true);
  };

  const changeToClicked = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    setTimeout(() => {
      const type = new Typed(wish.current, {
        strings: ["စိတ်ချမ်းသာကိုယ်ကျန်းမာ၊"],
        typeSpeed: 50,
        showCursor: false,
        loop: false,
      });

      return () => {
        type.destroy();
      };
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      const type1 = new Typed(wish1.current, {
        strings: ["ဘဲကြည်ထီပေါက်၊ ဂျပန်ရောက်၊"],
        typeSpeed: 50,
        showCursor: false,
        loop: false,
      });

      return () => {
        type1.destroy();
      };
    }, 3000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      const type2 = new Typed(wish2.current, {
        strings: ["ဖြစ်ချင်တာတွေအကုန်ဖြစ်။"],
        typeSpeed: 50,
        showCursor: false,
        loop: false,
      });

      return () => {
        type2.destroy();
      };
    }, 6000);
  }, []);

  setTimeout(() => {
    changeToTrue();
  }, 8000);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="container-fluid bg-primary-subtle min-vh-100">
        <div className="container pt-5">
          <div className="row text-center">
            {isClicked ? (
              ""
            ) : (
              <>
                <div className="col-12">
                  <p className="fs-5 fw-medium">မွေးနေ့ကစလို့</p>
                </div>
                <div className="col-12 fw-semibold">
                  <p className="fs-3 text-center text-primary fw-medium">
                    <span ref={wish}></span>
                  </p>
                  <p className="fs-3 text-center text-primary fw-medium">
                    <span ref={wish1}></span>
                  </p>
                  <p className="fs-3 text-center text-primary fw-medium">
                    <span ref={wish2}></span>
                  </p>
                </div>
              </>
            )}

            <div
              className={`col-12 ${isTyped ? "d-block" : "d-none"} ${
                isClicked ? "d-none" : "d-block"
              }`}
            >
              <button
                onClick={() => {
                  changeToClicked();
                }}
                className="btn btn-secondary"
              >
                မွေးနေ့လက်ဆောင်ယူဖို့ဒီကိုထပ်နှိပ်အုံး
              </button>
            </div>
            {isClicked ? <Image /> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Present;
