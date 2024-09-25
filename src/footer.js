import React from "react";
import style from "./footer.module.css";
import { TfiInstagram, TfiPinterestAlt } from "react-icons/tfi";
import { PiYoutubeLogoFill } from "react-icons/pi";

export function Footer() {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.opening}>
          <h3>Opening Hours</h3>
          <p>Monday - Saturday : 9 AM - 9 AM</p>
          <p>Sunday : CLOSED</p>
          <h5> CALL : +91 7006567890</h5>
        </div>
        <div className={style.contact}>
          <div className={style.location}>
            <h3>CONTACT US</h3>
            <p>Gojwara Chowk, Srinagar</p>
            <p>Jammu & Kashmir</p>
            <h5>+91 7006567890</h5>
          </div>
          <div className={style.social}>
            <h3>Follow Us</h3>
            <div className={style.dev_icon}>
              <div>
                <TfiInstagram />
              </div>
              <div>
                <TfiPinterestAlt />
              </div>
              <div>
                <PiYoutubeLogoFill />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.foot}>
        <p>
          @{new Date().getFullYear()} Teapxrn. All Rights Reserved | Privacy
          Policy | Terms and Condition
        </p>

        {/*    <p>PRIVACY POLICY | </p>
        <p>Terms and Condition</p> */}
      </div>
    </footer>
  );
}
