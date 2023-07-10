import React, { useEffect, useState } from "react";
import CarAudi from "../images/cars-big/audia1.jpg";
import CarGolf from "../images/cars-big/golf6.jpg";
import CarToyota from "../images/cars-big/toyotacamry.jpg";
import CarBmw from "../images/cars-big/bmw320.jpg";
import CarMercedes from "../images/cars-big/benz.jpg";
import CarPassat from "../images/cars-big/passatcc.jpg";

const BookCar = () => {
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOf, setDropOf] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOfTime, setDropOfTime] = useState("");
  const [carImg, setCarImg] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const handleChangeCarType = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };
  const handleChangePickUp = (e) => {
    setPickUp(e.target.value);
  };
  const handleChangeDropOf = (e) => {
    setDropOf(e.target.value);
  };
  const handleChangePickUpTime = (e) => {
    setPickUpTime(e.target.value);
  };
  const handleChangeDropOfTime = (e) => {
    setDropOfTime(e.target.value);
  };

  const handleClickOpenModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      carType == "" ||
      pickUp == "" ||
      dropOf == "" ||
      pickUpTime == "" ||
      dropOfTime == ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setOpenModal(!openModal);
      errorMsg.style.display = "none";
    }
  };

  let imgUrl;
  switch (carImg) {
    case "Audi A1 S-Line":
      imgUrl = CarAudi;
      break;
    case "VW Golf 6":
      imgUrl = CarGolf;
      break;
    case "Toyota Camry":
      imgUrl = CarToyota;
      break;
    case "BMW 320 ModernLine":
      imgUrl = CarBmw;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = CarMercedes;
      break;
    case "VW Passat CC":
      imgUrl = CarPassat;
      break;
    default:
      imgUrl = "";
  }

  const confirmBooking = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  useEffect(() => {
    if (openModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  return (
    <>
      <section>
        <div className="book-car">
          <div className="book-car__container">
            <h2>Book a card</h2>
            <p className="error-message">
              All fields required! <i className="fa-solid fa-xmark"></i>
            </p>

            <p className="booking-done">
              Check your email to confirm an order.{" "}
              <i onClick={hideMessage} className="fa-solid fa-xmark">
                X
              </i>
            </p>
            <form className="form">
              <div className="form__item-type">
                <label htmlFor="">
                  {" "}
                  &nbsp; Select Your Car Type <b>*</b>{" "}
                </label>
                <select onChange={handleChangeCarType} name="" id="">
                  <option>Select your car type</option>
                  <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                  <option value="VW Golf 6">VW Golf 6</option>
                  <option value="Toyota Camry">Toyota Camry</option>
                  <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                  <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                  <option value="VW Passat CC">VW Passat CC</option>
                </select>
              </div>

              <div className="form__item-type">
                <label htmlFor="">
                  &nbsp; Pick-up <b>*</b>
                </label>
                <select onChange={handleChangePickUp} name="" id="">
                  <option>Select pick up location</option>
                  <option>Belgrade</option>
                  <option>Novi Sad</option>
                  <option>Nis</option>
                  <option>Kragujevac</option>
                  <option>Subotica</option>
                </select>
              </div>

              <div className="form__item-type">
                <label htmlFor="">
                  &nbsp; Drop-of <b>*</b>
                </label>
                <select onChange={handleChangeDropOf} name="" id="">
                  <option>Select drop off location</option>
                  <option>Novi Sad</option>
                  <option>Belgrade</option>
                  <option>Nis</option>
                  <option>Kragujevac</option>
                  <option>Subotica</option>
                </select>
              </div>

              <div className="form__item-time">
                <label htmlFor="">
                  {" "}
                  &nbsp; Pick-up <b>*</b>
                </label>
                <input onChange={handleChangePickUpTime} type="date" />
              </div>

              <div className="form__item-time">
                <label htmlFor="">
                  {" "}
                  &nbsp; Drop-of <b>*</b>
                </label>
                <input onChange={handleChangeDropOfTime} type="date" />
              </div>

              <button onClick={handleClickOpenModal} className="form-button">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className={`booking-modal ${openModal ? "open-modal" : ""}`}>
        <div className="booking-modal__title">
          <h2>COMPLETE RESERVATION</h2>
          <i onClick={handleClickOpenModal} className="fa-solid fa-xmark">
            X
          </i>
        </div>

        <div className="booking-modal__message">
          <h4>
            {" "}
            <i className="fa-solid fa-circle-info"></i>Upon completing this
            reservation enquiry, you will receive:
          </h4>

          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>

        <div className="booking-modal__card-info">
          <div className="booking-modal___car-info__date">
            <h5>Location & Date</h5>
            <div className="car-info__date__item">
              <h4>
                <i className="fa-solid fa-calendar-days"></i>Pick-Up Location
              </h4>
              <div>
                <p>{pickUpTime}/</p>
                <input className="input-time" type="time" />
              </div>
            </div>
            <div className="car-info__date__item">
              <h4>
                <i className="fa-solid fa-calendar-days"></i>Drop-Off Location
              </h4>
              <div>
                <p>{dropOfTime}/</p>
                <input className="input-time" type="time" />
              </div>
            </div>
            <div className="car-info__date__item">
              <h4>
                <i className="fa-solid fa-location-dot"></i>Pick-Up Date & Time
              </h4>
              <p>{pickUp}</p>
            </div>
            <div className="car-info__date__item">
              <h4>
                <i className="fa-solid fa-location-dot"></i>Drop-Off Date & Time
              </h4>
              <p>{dropOf}</p>
            </div>
          </div>

          <div className="booking-modal___car-info__model">
            <h5>
              <span>Car - </span>
              {carType}
            </h5>
            <div>
              
              {imgUrl && <img src={imgUrl} alt="car__img" />}
            </div>
          </div>
        </div>

        <div>
          <div className="booking-modal__person-inf">
            <h4>PERSONAL INFORMATION</h4>
            <form className="booking-modal__person-inf__form">
              <div className="booking-modal__person-inf__form__item">
                <label>
                  First Name <b>*</b>
                </label>
                <input type="text" placeholder="Enter your first name" />
                <p className="text-field-required">This field is required.</p>
              </div>

              <div className="booking-modal__person-inf__form__item">
                <label>
                  Last Name <b>*</b>
                </label>
                <input type="text" placeholder="Enter your last name" />
                <p className="text-field-required">This field is required.</p>
              </div>

              <div className="booking-modal__person-inf__form__item">
                <label>
                  Phone Number <b>*</b>
                </label>
                <input type="tel" placeholder="Enter your phone number" />
                <p className="text-field-required">This field is required.</p>
              </div>

              <div className="booking-modal__person-inf__form__item">
                <label>
                  Age <b>*</b>
                </label>
                <input type="tel" placeholder="18" />
                <p className="text-field-required">This field is required.</p>
              </div>

              <div className="booking-modal__person-inf__form__item">
                <label>
                  Email <b>*</b>
                </label>
                <input type="tel" placeholder="Enter your email address" />
                <p className="text-field-required">This field is required.</p>
              </div>

              <div className="booking-modal__person-inf__form__item">
                <label>
                  City <b>*</b>
                </label>
                <input type="tel" placeholder="Enter your city" />
                <p className="text-field-required">This field is required.</p>
              </div>

              <div className="booking-modal__person-inf__form__item">
                <label>
                  Zip Code <b>*</b>
                </label>
                <input type="tel" placeholder="Enter your zip code" />
                <p className="text-field-required">This field is required.</p>
              </div>

              <span>
                <input type="checkbox" />
                <p>Please send me latest news and updates</p>
              </span>
              <div className="reserve-button">
                <button onClick={confirmBooking}>Reserve Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCar;
