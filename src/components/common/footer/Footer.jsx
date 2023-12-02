import React from "react";
import { footer } from "../../data/Data";
import { Link } from "react-router-dom";
import Subscription from "./Subscription";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__inner pt-120 pb-60">
          <div className="container">
              <div className="row gy-5 footer-item-wrappe">
                <div className="col-lg-6">
                  <div className="footer-item">
                      <div className="footer-logo">
                        <Link to="/" className="footer-logo__link">
                          <img src="../../../../public/images/logo.png" className="mb-3" alt="Logo " />
                        </Link>
                          <h5>Do You Need Help With Anything?</h5>
                          <p className="mt-0 mb-5">
                              Receive updates, hot deals, tutorials, discounts sent straignt
                              in your inbox every month
                          </p>

                          <Subscription/>
                      </div>
                  </div>
                </div>
                  {
                      footer.map((val, index) => (
                        <div className="col-lg-2 col-sm-4 col-xsm-6"  key={index}>
                          <div className="footer-item">   
                              <h5 className="mb-4">{val.title}</h5>
                              <ul className="footer-list">
                                  {
                                      val.text.map((items, subIndex) => (
                                          <li className="footer-list__item" key={subIndex}> <Link className="footer-list__link">{items.list}</Link> </li>
                                      ))
                                  }
                              </ul>
                          </div>
                        </div>
                      ))
                  }
              </div>
          </div>
        </div>
        <div className="bottom-footer">
        <p className="bottom-footer__desc mb-0 mt-0">&copy; {new Date().getFullYear()} RentUP. Designed By <span className="text--heading fw-semibold">Front-End Developer Robiul Hasan</span>.</p>
      </div>
      </footer>
    </>
  );
};

export default Footer;
