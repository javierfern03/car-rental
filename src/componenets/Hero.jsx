import React from 'react'

const Hero = () => {
  return (
    <div className="hola">
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
                <a href="#">
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </a>
              </div>
              <div className="home__buttons__learn-more">
                <a href="#">
                  Learn More &nbsp; <i className="fa-solid fa-circle-check"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero