"use client";

import React from "react";
import Link from "next/link";

const LOGO = "/logo/logo1.png";

export const HeaderOffcanvas = ({ active, toggleCanvas }) => {
  return (
    <>
      <div className={`offCanvas__info ${active ? "active" : ""}`}>
        <div
          className="offCanvas__close-icon menu-close"
          onClick={toggleCanvas}
        >
          <button>
            <i className="far fa-window-close"></i>
          </button>
        </div>
        <div className="offCanvas__logo mb-30">
          <Link href="/">
            <img src={LOGO} alt="Logo" />
          </Link>
        </div>
        <div className="offCanvas__side-info mb-30">
          <div className="contact-list mb-30">
            <h4>Ubicación</h4>
            <p>
              Ecuador, Azuay, Cuenca <br />
              Julia Bernal y 18 de Noviembre
            </p>
          </div>
          <div className="contact-list mb-30">
            <h4>Celular</h4>
            <p>+(593) 985739898</p>
          </div>
          <div className="contact-list mb-30">
            <h4>Email</h4>
            <p>mykubboec@gmail.com</p>
          </div>
        </div>
        <div className="offCanvas__social-icon mt-30">
          <a href="https://www.facebook.com/share/1FMRbq8MiL/?mibextid=wwXIfr">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://x.com/mykubbo?s=11">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/mykubbo?igsh=MWJ6cnN5bHpsaXhpag%3D%3D&utm_source=q">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div
        className={`offCanvas__overly ${active ? "active" : ""}`}
        onClick={toggleCanvas}
      />
    </>
  );
};
