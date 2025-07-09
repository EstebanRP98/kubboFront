import React from "react";
import { VideoPlayer } from "../video/VideoPlayer";

const aboutImg = "/images/about_img.png";
const videoShape = "/images/about_video_shape.svg";
const petIcon = "/icon/pet_icon02.svg";
const experienceShape = "/images/experience_shape.svg";
const authorSign = "/images/author_sign.png";
const author1 = "/images/author_01.png";
const author2 = "/images/author_02.png";
const author3 = "/images/author_03.png";
const author4 = "/images/author_04.png";
const aboutShape1 = "/images/about_shape01.png";
const aboutShape2 = "/images/about_shape02.png";
const aboutShape3 = "/images/about_shape03.png";

export const AboutOne = () => {
  return (
    <section className="about__area">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-8">
            <div className="about__img">
              <img src={aboutImg} alt="" />
              <div className="video__box">
                <div className="video__box-shape">
                  <img src={videoShape} alt="" className="injectable" />
                </div>
                <h5 className="title">
                  Lo mejor para  <br />
                  nuestras mascotas
                </h5>

                <VideoPlayer
                  trigger={
                    <a href="#vid" className="popup-video play-btn">
                      <i className="fas fa-play"></i>
                    </a>
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="about__content">
              <div className="section__title mb-20">
                <span className="sub-title">
                  Sobre Nosotros
                  <strong className="shake">
                    <img src={petIcon} alt="" className="injectable" />
                  </strong>
                </span>
                <h2 className="title">
                  Nuestra pasión es brindar <br />
                  el mejor cuidado y bienestar
                </h2>
              </div>
              <div className="about__content-inner">
                <div className="experience__box">
                  <div className="experience__box-shape">
                    <img src={experienceShape} alt="" className="injectable" />
                  </div>
                  <div className="experience__box-content">
                    <h4 className="title">
                      Top
                    </h4>
                    <p>Experience</p>
                  </div>
                </div>
                <p>
                  My kubbo es una plataforma de servicios PET friendly que conecta  a  comercios - marcas con dueños y sus mascotas, 
                  que buscan  y disfrutan de productos y servicios seleccionados cuidadosamente  para ellos, para  su cuidado y bienestar.
                </p>
              </div>
              <p>
                Explora el mejor  directorio gratuito pet friendly en la ciudad de Cuenca,  
                con más de N marcas, comercios y servicios
              </p>
              <div className="shape">
                <img
                  src={aboutShape2}
                  alt="img"
                  data-aos="fade-down-left"
                  data-aos-delay="400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__shape-wrap">
        <img
          src={aboutShape1}
          alt="img"
          data-aos="fade-up-right"
          data-aos-delay="800"
        />
        <img src={aboutShape3} alt="img" className="ribbonRotate" />
      </div>
    </section>
  );
};
