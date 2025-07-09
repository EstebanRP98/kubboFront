import React from "react";

const whyWeAreImg = "/images/why_we_are_img.png";
const whyShape1 = "/images/why_shape01.svg";
const whyShape2 = "/images/why_shape02.svg";
const whyShape3 = "/images/why_shape03.svg";
const whyShape4 = "/images/why_shape04.svg";
const petIcon = "/icon/pet_icon02.svg";
const checkIcon = "/icon/check_icon.svg";

export const WhyWeAreOne = () => {
  return (
    <section className="why__we-are-area">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* images */}
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="why__we-are-img">
              <img src={whyWeAreImg} alt="" />
              <div
                className="shape shape-one"
                data-aos="fade-down-right"
                data-aos-delay="500"
              >
                <img src={whyShape1} alt="" className="injectable" />
              </div>
              <div
                className="shape shape-two"
                data-aos="fade-up-right"
                data-aos-delay="500"
              >
                <img src={whyShape2} alt="" className="injectable" />
              </div>
              <div
                className="shape shape-three"
                data-aos="fade-up-left"
                data-aos-delay="500"
              >
                <img src={whyShape3} alt="" className="injectable" />
              </div>
              <div className="shape shape-four ribbonRotate">
                <img src={whyShape4} alt="" className="injectable" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="why__we-are-content">
              <div className="section__title mb-10">
                <span className="sub-title">
                  Por que somos los mejores
                  <strong className="shake">
                    <img src={petIcon} alt="" className="injectable" />
                  </strong>
                </span>
                <h2 className="title">
                  Encuentra todo lo que necesitas<br />
                  en una sola plataforma.
                </h2>
              </div>
              <p>
                Nosotros entendemos que tu amigo peludo es un miembro importantísimo 
                de tu familia y necesitas elegir el mejor cuidado y atención posible, 
                por eso comenzamos a crear este gran Ecosistema para ti 
                y tu compañero de 4 patas.
              </p>

              <div className="why__list-box">
                <ul className="list-wrap">
                  <li>
                    <div className="why__list-box-item">
                      <div className="why__list-box-item-top">
                        <div className="icon">
                          <img src={checkIcon} alt="" className="injectable" />
                        </div>
                        <h4 className="title">Explora</h4>
                      </div>
                      <p>
                        Busca fácilmente en nuestro directorio que está perfectamente
                         organizado y clasificado para ti, brindando la información que requieres.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="why__list-box-item">
                      <div className="why__list-box-item-top">
                        <div className="icon">
                          <img src={checkIcon} alt="" className="injectable" />
                        </div>
                        <h4 className="title">Elige</h4>
                      </div>
                      <p>
                        Encuentra y haz contacto con el establecimiento, 
                        producto o servicio que necesitas y merece tu mascota.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="why__list-box-item">
                      <div className="why__list-box-item-top">
                        <div className="icon">
                          <img src={checkIcon} alt="" className="injectable" />
                        </div>
                        <h4 className="title">Disfruta</h4>
                      </div>
                      <p>
                        Vive la experiencia con nuestros Kubbos aliados, 
                        ya sean de cuidado, bienestar o diversión.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="why__list-box-item">
                      <div className="why__list-box-item-top">
                        <div className="icon">
                          <img src={checkIcon} alt="" className="injectable" />
                        </div>
                        <h4 className="title">Califica y repite</h4>
                      </div>
                      <p>
                        Tu opinión es importante para nosotros, déjanos tus comentarios y 
                        sigue disfrutando junto con tu peludo de la experiencia Kubbo y 
                        haciendo parte esta linda comunidad petlover.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
