import React, { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

const PickCar = () => {
  const [carSelected, setCarSelected] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <div className="pickCar-container">
        <div className="pickCar-container__text">
          <h3>Vehicle Models</h3>
          <h2>Our rental fleet</h2>
          <p>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>

        <div className="pickCar-container__car-context">
          <div className="pick-box">
            <button
              className={`${coloringButton("btn1")}`}
              onClick={() => {
                setCarSelected("SecondCar");
                btnID("btn1");
              }}
            >
              Audi A1 S-Line
            </button>
            <button
              className={`${coloringButton("btn2")}`}
              onClick={() => {
                setCarSelected("FirstCar");
                btnID("btn2");
              }}
            >
              VW Golf 6
            </button>
            <button
              className={`${coloringButton("btn3")}`}
              onClick={() => {
                setCarSelected("ThirdCar");
                btnID("btn3");
              }}
            >
              Toyota Camry
            </button>
            <button
              className={`${coloringButton("btn4")}`}
              onClick={() => {
                setCarSelected("FourthCar");
                btnID("btn4");
              }}
            >
              BMW 320 ModernLine
            </button>
            <button
              className={`${coloringButton("btn5")}`}
              onClick={() => {
                setCarSelected("FifthCar");
                btnID("btn5");
              }}
            >
              Mercedes-Benz GLK
            </button>
            <button
              className={`${coloringButton("btn6")}`}
              onClick={() => {
                setCarSelected("SixthCar");
                btnID("btn6");
              }}
            >
              VW Passat CC
            </button>
          </div>

          <div className="box-car">
            {carSelected === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
            {carSelected === "SecondCar" && (
              <CarBox data={CAR_DATA} carID={1} />
            )}
            {carSelected === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
            {carSelected === "FourthCar" && (
              <CarBox data={CAR_DATA} carID={3} />
            )}
            {carSelected === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
            {carSelected === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default PickCar;
