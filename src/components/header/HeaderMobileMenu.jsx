"use client";

import React from "react";
import { SiThreads } from "react-icons/si";
import Link from "next/link";

const LOGO = "/logo/logo1.png";

export const HeaderMobileMenu = () => {
  return (
    <>
      <div className="tgmobile__menu">
        <nav className="tgmobile__menu-box">
          <div className="close-btn">
            <i className="fas fa-times"></i>
          </div>

          <div className="nav-logo">
            <Link href="/">
              <img src={LOGO} alt="Logo" />
            </Link>
          </div>

          <div className="social-links">
            <ul className="list-wrap">
              <li>
                <a href="https://x.com/mykubbo?s=11" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.threads.com/@mykubbo" target="_blank">
                  <SiThreads className="text-xl" />
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
        </nav>
      </div>
      <div className="tgmobile__menu-backdrop"></div>
    </>
  );
};
