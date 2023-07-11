import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";

const Hero = () => {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section className="hola">
        {/* <div className="home__card-image">
        <img src="src\image\car-home.png" alt="" />
      </div> */}
        <div className="home__content">
          <div className="home__content__text">
            <h4 className="">Plan your now</h4>

            <h1>
              Save <span>big</span> with our car rental
            </h1>

            <p>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="home__buttons">
              <div className="home__buttons__book-ride">
                <Link onClick={bookBtn} to="/">
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
              </div>
              <div className="home__buttons__learn-more">
                <a href="#">
                  Learn More &nbsp; <i className="fa-solid fa-circle-check"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <b className="fa-solid fa-angle-up">∧</b>
        </div>
      </section>
  )
}

export default Hero