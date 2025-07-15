'use client';

import React from 'react'; // No necesitas useEffect si no haces algo específico después de que el router está listo
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Correcto para App Router
import { gql, useQuery } from '@apollo/client';
import { Swiper, SwiperSlide, modules } from '../swiper/SwiperRoot';

// Query GraphQL para obtener un negocio por ID
const GET_BUSINESS_BY_ID = gql`
  query GetBusinessById($id: ID!) {
    business(id: $id) {
      id
      name
      description
      services
      location {
        address
        addressweb
        lat
        lng
      }
      contactNumber
      socialMedia {
        facebook
        instagram
        website
      }
      images
    }
  }
`;

export const AnimalDetailsTop = ({ businessId }) => {

  console.log('Valor de businessId en AnimalDetailsTop:', businessId);

  // Modificación clave: Usa router.isReady en la condición 'skip' y en el estado de carga
  const { data, loading, error } = useQuery(GET_BUSINESS_BY_ID, {
    variables: { id: businessId  },
    skip: !businessId , // La consulta no se ejecutará hasta que el router esté listo y 'id' exista
  });

  // Muestra un estado de carga mientras el router no esté listo o la consulta esté cargando
  if (loading) {
    return <p className="text-center">Cargando detalles del negocio...</p>;
  }

  if (error) {
    return <p className="text-center text-danger">Error: {error.message}</p>;
  }

  // Si router.isReady es true pero id sigue siendo undefined (ej. ruta incorrecta o no dinámica)
  if (!data || !data.business) {
    return <p className="text-center">Negocio no encontrado o I {businessId} no válido.</p>;
  }

  const business = data.business;

  // ... (el resto de tu componente permanece igual, usando 'business' para renderizar los datos)
  return (
    <div className="animal__details-wrap">
      <div className="row">
        <div className="col-61">
          <div className="animal__details-img-wrap">
            <div className="tab-content" id="myTabContent">
              {/* Renderiza las imágenes dinámicamente en los tabs */}
              {business.images && business.images.map((image, index) => (
                <div
                  key={index}
                  className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                  id={`item${index + 1}-tab-pane`}
                  role="tabpanel" // <-- CORREGIDO: Eliminar el '}' extra aquí
                  aria-labelledby={`item${index + 1}-tab`}
                  tabIndex={0}
                >
                  <Sliders images={business.images} />
                </div>
              ))}
            </div>

            
          </div>

          <div className="animal__details-description">
            <h4 className="title">Descripción</h4>
            <p>{business.description || 'No hay descripción disponible.'}</p>
          </div>

          <div className="animal__details-info-wrap">
            <h4 className="title">Más Información Adicional</h4>
            <p>
              Aquí puedes añadir más detalles sobre el negocio.
            </p>
            <div className="introducing__list-box">
              <ul className="list-wrap">
                {business.services && business.services.map((service, index) => (
                  <li key={index}>
                    <span className="icon">
                      <img src="/icon/check_icon02.svg" alt="" className="injectable" />
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-39">
          <aside className="animal__details-sidebar">
            <div className="animal__details-widget">
              <div className="animal__details-sidebar-info">
                <h4 className="title">{business.name}</h4>
                <p>
                  {business.description || 'Descripción breve no disponible.'}
                </p>
                <ul className="list-wrap">
                  <li>
                    <span>Contacto:</span>{business.contactNumber || 'N/A'}
                  </li>
                  <li>
                    <span>Dirección:</span>{business.location?.address || 'N/A'}
                  </li>
                </ul>
              </div>
            </div>
            <div className="animal__details-widget">
              <div className="payment__type-wrap">
                <div className="social-wrap">
                  <h6 className="title">Comparte:</h6>
                  <ul className="list-wrap">
                    {business.socialMedia?.facebook && (
                      <li>
                        <Link href={business.socialMedia.facebook} target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                    )}
                    {business.socialMedia?.instagram && (
                      <li>
                        <Link href={business.socialMedia.instagram} target="_blank">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    )}
                    {business.socialMedia?.website && (
                      <li>
                        <Link href={business.socialMedia.website} target="_blank">
                          <i className="fas fa-globe"></i>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="animal__details-widget">
              <div className="animal__details-map">
                <h4 className="widget-title">Ubicación</h4>
                <div className="location-map">
                  {business.location?.addressweb ? (
                    <iframe
                      src={business.location?.addressweb}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  ) : (
                    <p>Ubicación no disponible.</p>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const Sliders = ({ images }) => {
  const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1200: { slidesPerView: 1 },
      992: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      0: { slidesPerView: 1 },
    },
    modules: modules,
    navigation: {
      nextEl: '.pet-button-next',
      prevEl: '.pet-button-prev',
    },
  };

  return (
    <>
      <Swiper {...swiperSettings} className="pet-active">
        {images && images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Imagen ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pet__nav">
        <button className="pet-button-prev">
          <i className="flaticon-left"></i>
        </button>
        <button className="pet-button-next">
          <i className="flaticon-next"></i>
        </button>
      </div>
    </>
  );
};