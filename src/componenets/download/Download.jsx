import React from "react";

import img1 from "../../images/download/googleapp.svg"
import img2 from "../../images/download/appstore.svg"
import "../download/download.css";


const Download = () => {
  return (
    <>
      <section className="download-section">
        <div>

        <div className="download-section__title">
          <h2>Download our app to get most out of it</h2>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
        </div>
        <div className="download-section__images">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
        </div>

      </section>
    </>
  );
};

export default Download;
