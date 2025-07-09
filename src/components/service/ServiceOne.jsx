import React from "react";
import Link from "next/link";
import { ServiceOneItem } from "./ServiceOneItem";
import "../../assets/css/fontawesome-all.min.css";


const petIcon = "/icon/pet_icon02.svg";
const rightArrow = "/icon/right_arrow.svg";
const servicesShapeImg01 = "/images/services_shape01.png";
const servicesShapeImg02 = "/images/services_shape02.png";
const servicesShapeImg03 = "/images/services_shape03.png";

export const ServiceOne = () => {
  const list = [
    { icon: <i className="fas fa-clinic-medical text-purple-500 text-3xl" />, title: "Veterinarias y Peluquerías", description: "Atención médica, vacunas y urgencias para tu mascota." },
    { icon: <i className="fas fa-hotel text-purple-500 text-3xl" />, title: "Hoteles y guarderías", description: "Cuidado seguro y amoroso mientras no estás." },
    { icon: <i className="fas fa-paw text-purple-500 text-3xl" />, title: "Lugares petfriendly", description: "Espacios donde tú y tu mascota son bienvenidos." },
    { icon: <i className="fas fa-store text-purple-500 text-3xl" />, title: "Tiendas de mascotas", description: "Alimentos, juguetes y todo para tu peludo." },
  ];

  return (
    <section className="services__area">
      <div className="container">
        {/* headers */}
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section__title mb-40">
              <span className="sub-title">
                Cuidando de ellos a otro nivel
                <strong className="shake">
                  <img src={petIcon} alt="" className="injectable" />
                </strong>
              </span>
              <h2 className="title">
                Brindamos los mejores productos y servicios
              </h2>
            </div>
          </div>
        </div>

        {/* list */}
        <div className="row justify-content-center">
          {list.map((el) => (
            <ServiceOneItem key={el.icon} icon={el.icon} title={el.title} description={el.description}/>
          ))}
        </div>
      </div>

      {/* shapes */}
      <div className="services__shape-wrap">
        <img src={servicesShapeImg01} alt="img" className="ribbonRotate" />
        <img
          src={servicesShapeImg02}
          alt="img"
          data-aos="fade-up-right"
          data-aos-delay="800"
        />
        <img
          src={servicesShapeImg03}
          alt="img"
          data-aos="fade-down-left"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};
