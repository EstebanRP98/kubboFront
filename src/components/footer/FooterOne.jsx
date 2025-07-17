import React from "react";
import Link from "next/link";

const wLogo = "/logo/w_logo2.png";
const newsletterShape = "/images/footer_newsletter_shape.svg";
const footerShape01 = "/images/footer_shape01.png";
const footerShape02 = "/images/footer_shape02.png";

export const FooterOne = () => {
  return (
    <>
      <footer>
        <div className="footer__area">
          <div className="footer__top fix">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer__widget">
                    <div className="footer__logo">
                      <Link href="/">
                        <img src={wLogo} alt="logo" />
                      </Link>
                    </div>
                    <div className="footer__content">
                      <p>
                        Ecuador, Azuay, Cuenca, Julia Bernal y 18 de Noviembre
                      </p>
                      <a href="tel: +593 985739898">+593 985739898</a>
                      <a href="mailto:mykubboec@gmail.com">
                        mykubboec@gmail.com
                      </a>
                    </div>
                    <div className="footer__social">
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
            <div className="footer__shape-wrap">
              <img
                src={footerShape01}
                alt="footer shape"
                data-aos="fade-up-right"
                data-aos-delay="400"
              />
              <img
                src={footerShape02}
                alt="footer shape"
                data-aos="fade-up-left"
                data-aos-delay="400"
              />
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="copyright-text text-end">
                    <p>Copyright © 2025. All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
