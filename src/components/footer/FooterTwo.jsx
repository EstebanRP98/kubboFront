import React from "react";
import Link from "next/link";

const wLogo = "/logo/w_logo.png";
const rightArrow = "/icon/right_arrow04.svg";
const footerShape1 = "/images/footer_shape01.png";
const footerShape2 = "/images/footer_shape02.png";

export const FooterTwo = () => {
  return (
    <footer>
      <div className="footer__area">
        <div className="footer__info-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="footer__info-item">
                  <div className="footer__info-icon">
                    <i className="flaticon-placeholder"></i>
                  </div>
                  <div className="footer__info-content">
                    <h4 className="title">Address</h4>
                    <p>555 A, East Halley Neon, Uk 4512</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="footer__info-item">
                  <div className="footer__info-icon">
                    <i className="flaticon-phone"></i>
                  </div>
                  <div className="footer__info-content">
                    <h4 className="title">Emergency</h4>
                    <p>+ 00 123 4567 8899</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="footer__info-item">
                  <div className="footer__info-icon">
                    <i className="flaticon-mail"></i>
                  </div>
                  <div className="footer__info-content">
                    <h4 className="title">E-mail</h4>
                    <p>Info@youremail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__top footer__top-two fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer__widget">
                  <div className="footer__logo">
                    <Link href="/">
                      <img src={wLogo} alt="logo" />
                    </Link>
                  </div>
                  <div className="footer__content footer__content-two">
                    <p>
                      Duis aute irure dolor in repreerit in voluptate velitesse
                      We understand that your furry friend tred member
                    </p>
                  </div>
                  <div className="footer__newsletter-two">
                    <h2 className="title">Sign Up Newsletter!</h2>
                    <form action="#" className="footer__newsletter-form">
                      <input
                        id="email"
                        type="email"
                        placeholder="Type Your E-mail"
                      />
                      <button type="submit">
                        <img
                          src={rightArrow}
                          alt="arrow"
                          className="injectable"
                        />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__shape-wrap">
            <img
              src={footerShape1}
              alt="shape"
              data-aos="fade-up-right"
              data-aos-delay="400"
            />
            <img
              src={footerShape2}
              alt="shape"
              data-aos="fade-up-left"
              data-aos-delay="400"
            />
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="copyright-text copyright-text-two">
                  <p>Copyright © 2025. All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer__social-two">
                  <h6 className="title">Siguenos en:</h6>
                  <ul className="list-wrap">
                    <li>
                      <a href="https://www.facebook.com/share/1FMRbq8MiL/?mibextid=wwXIfr" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/mykubbo?s=11" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://api.whatsapp.com/send?phone=593985739898&text=Quiero%20saber%20mas%20de%20MyKubbo" target="_blank">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/mykubbo?igsh=MWJ6cnN5bHpsaXhpag%3D%3D&utm_source=qr" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@myKubbo" target="_blank">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
