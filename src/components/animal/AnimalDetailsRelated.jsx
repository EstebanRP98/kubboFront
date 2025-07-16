"use client";

import React from "react";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client"; // Import gql and useQuery
import { Swiper, SwiperSlide, modules } from "../swiper/SwiperRoot";

// Define the GraphQL query
const GET_BUSINESSES_RELATED = gql`
  query GetBusinesses($limit: Int, $offset: Int) {
    businesses(limit: $limit, offset: $offset) {
      total
      items {
        id
        name
        description
        services
        location {
          address
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
  }
`;

export const AnimalDetailsRelated = () => {
  // Use useQuery to fetch data
  // You can adjust limit and offset as needed for "related" items
  const { data, loading, error } = useQuery(GET_BUSINESSES_RELATED, {
    variables: { limit: 5, offset: 0 }, // Fetch 5 related businesses, starting from offset 0
    // Consider adding a skip condition if this component needs to wait for something
    // For example, if you want related items based on the current item's services,
    // you might pass a prop and skip if that prop isn't available.
  });

  if (loading) {
    return <p className="text-center">Cargando Kubbos relacionados...</p>;
  }

  if (error) {
    console.error("GraphQL Error in AnimalDetailsRelated:", error);
    return <p className="text-center text-danger">Error al cargar Kubbos relacionados: {error.message}</p>;
  }

  // Extract businesses from the data
  const relatedBusinesses = data?.businesses?.items || [];

  // Check if there are no related businesses to display
  if (relatedBusinesses.length === 0) {
    return <p className="text-center">No hay Kubbos relacionados para mostrar.</p>;
  }

  const swiperSettings = {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
    // Navigation arrows
    modules: modules,
    navigation: {
      nextEl: ".petTwo-button-next",
      prevEl: ".petTwo-button-prev",
    },
  };

  return (
    <div className="related__animal-area">
      <div className="row align-items-end">
        <div className="col-md-8">
          <h3 className="related__animal-title">Otros Kubbos que te podrían gustar</h3>
        </div>
        <div className="col-md-4">
          <div className="pet__nav-two">
            <button className="petTwo-button-prev">
              <i className="flaticon-left"></i>
            </button>
            <button className="petTwo-button-next">
              <i className="flaticon-next"></i>
            </button>
          </div>
        </div>
      </div>

      <Swiper {...swiperSettings} className="pet-active-two">
        {relatedBusinesses.map((business) => ( // Use 'business' instead of 'animal' for clarity
          <SwiperSlide key={business.id}>
            <div className="animal__item animal__item-two animal__item-three shine-animate-item">
              <div className="animal__thumb animal__thumb-two shine-animate">
                {/* Use dynamic link to the detail page */}
                <Link href={`/animal/${business.id}`}>
                  {/* Use the first image from the 'images' array, or a placeholder */}
                  <img src={business.images?.[0] || "/placeholder.jpg"} alt={business.name} />
                </Link>
                <Link href={`/animal/${business.id}`} className="wishlist"> {/* Link to detail or a real wishlist action */}
                  <i className="flaticon-love"></i>
                </Link>
              </div>
              <div className="animal__content animal__content-two">
                <h4 className="title">
                  <Link href={`/animal/${business.id}`}>{business.name}</Link>
                </h4>
                <div className="pet-info">
                  <ul className="list-wrap">
                    <li>
                      Servicios: <span>{business.services?.join(", ") || 'N/A'}</span>
                    </li>
                    <li>
                      Dirección: <span>{business.location?.address || 'N/A'}</span>
                    </li>
                  </ul>
                </div>
                <div className="location">
                  <i className="flaticon-placeholder"></i>
                  <span>{business.location?.address || 'N/A'}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};