import React from "react";
import Link from "next/link";

const rightArrow = "/icon/right_arrow04.svg";
const wLogo = "/logo/w_logo2.png";
const footerShape1 = "/images/footer_shape01.png";
const footerShape2 = "/images/footer_shape02.png";

export const FooterThree = ({ hideNewsLetter }) => {
  return (
    <footer>
      <div className="footer__area">
        <div className="footer__top footer__top-three fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer__widget">
                  <div className="footer__logo">
                    <Link href="/">
                      <img src={wLogo} alt="Logo" />
                    </Link>
                  </div>
                  <div className="footer__content footer__content-two">
                    <p>
                      El lugar para encontrar todo lo que necesita tu mascota
                    </p>
                  </div>
                  <div className="footer__social">
                    <h6 className="title">Siguenos en:</h6>
                    <ul className="list-wrap">
                      <li>
                        <a
                          href="https://www.facebook.com/share/1FMRbq8MiL/?mibextid=wwXIfr"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://x.com/mykubbo?s=11"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://api.whatsapp.com/send?phone=593985739898&text=Quiero%20saber%20mas%20de%20MyKubbo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/mykubbo?igsh=MWJ6cnN5bHpsaXhpag%3D%3D&utm_source=qr"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/@myKubbo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Contactanos</h4>
                  <div className="footer__contact">
                    <ul className="list-wrap">
                      <li>
                        Ecuador, Azuay, Cuenca
                      </li>
                      <li>
                        <a href="tel:+593 985739898">+593 985739898</a>
                      </li>
                      <li>
                        <a href="mailto:mykubboec@gmail.com">
                          mykubboec@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__shape-wrap">
            <img
              src={footerShape1}
              alt="img"
              data-aos="fade-up-right"
              data-aos-delay="400"
            />
            <img
              src={footerShape2}
              alt="img"
              data-aos="fade-up-left"
              data-aos-delay="400"
            />
          </div>
        </div>
        <div className="footer__bottom footer__bottom-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="copyright-text copyright-text-three">
                  <p>Copyright © 2025. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
