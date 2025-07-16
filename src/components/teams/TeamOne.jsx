"use client";

import React from "react";
import { TeamOneItem } from "./TeamOneItem";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

const petIcon = "/icon/pet_icon02.svg";
const rightArrow = "/icon/right_arrow.svg";
const teamShape = "/team/team_shape.png";

const GET_LATEST_BUSINESSES = gql`
  query GetBusinesses($limit: Int, $offset: Int) {
    businesses(limit: $limit, offset: $offset) {
      items {
        id
        name
        description
        services
        location {
          address
        }
        images
        contactNumber
        socialMedia {
          facebook
          instagram
          website
        }
      }
      total
    }
  }
`;

export const TeamOne = () => {
  const { data, loading, error } = useQuery(GET_LATEST_BUSINESSES, {
    variables: { limit: 4, offset: 0 },
  });

  // Data from GraphQL
  const latestKubbos = data?.businesses?.items || [];

  // Hardcoded data (remove this once you confirm latestKubbos works as expected)
  // const teamMembers = [
  //   {
  //     src: "https://firebasestorage.googleapis.com/v0/b/mykubbo.firebasestorage.app/o/aliados%2Fmiamascota.jpg?alt=media&token=1456eaac-756a-4ae6-a91e-30fa2ac5ae91",
  //     name: "Daria Andaloro2",
  //     designation: "Veterinary Technician",
  //   },
  //   {
  //     src: "/team/team_img02.jpg",
  //     name: "Michael Brian",
  //     designation: "Medicine Specialist",
  //   },
  //   {
  //     src: "/team/team_img03.jpg",
  //     name: "Kenroly Gajon",
  //     designation: "Food Technician",
  //   },
  //   {
  //     src: "/team/team_img04.jpg",
  //     name: "Lizay Arianya",
  //     designation: "Veterinary Technician",
  //   },
  // ];

  if (loading) {
    return (
      <section className="team__area">
        <div className="container">
          <div className="section__title text-center mb-40">
            <h2 className="title">Cargando nuestros últimos Kubbos...</h2>
          </div>
          <p className="text-center">Por favor, espera.</p>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("GraphQL Error en TeamOne:", error);
    return (
      <section className="team__area">
        <div className="container">
          <div className="section__title text-center mb-40">
            <h2 className="title">Error al cargar Kubbos.</h2>
          </div>
          <p className="text-center text-danger">Detalles: {error.message}</p>
        </div>
      </section>
    );
  }

  // If no Kubbos, you can display a message or simply not render the list section
  if (latestKubbos.length === 0) {
    return (
      <section className="team__area">
        <div className="container">
          <div className="section__title text-center mb-40">
            <span className="sub-title">
              CAMBIAMOS SU VIDA Y SU MUNDO
              <strong className="shake">
                <img src={petIcon} alt="" className="injectable" />
              </strong>
            </span>
            <h2 className="title">
              No hay Kubbos disponibles en este momento.
            </h2>
          </div>
        </div>
        <div className="team__bottom-content">
          <Link href="/animal" className="btn">
            Mirar todos los servicios
            <img src={rightArrow} alt="right arrow" className="injectable" />
          </Link>
        </div>
        <div className="team__shape">
          <img src={teamShape} alt="shape" className="ribbonRotate" />
        </div>
      </section>
    );
  }

  return (
    <section className="team__area">
      <div className="container">
        {/* top */}
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__title text-center mb-40">
              <span className="sub-title">
                CAMBIAMOS SU VIDA Y SU MUNDO
                <strong className="shake">
                  <img src={petIcon} alt="" className="injectable" />
                </strong>
              </span>
              <h2 className="title">
               Conoce nuestros últimos <br />
                Kubbos
              </h2>
            </div>
          </div>
        </div>

        {/* list */}
        <div className="row justify-content-center">
          {/* CORRECTED MAP CALL FOR latestKubbos */}
          {latestKubbos.map((kubbo) => ( // Change 'member' to 'kubbo' for clarity
            <TeamOneItem
              key={kubbo.id} // Use the actual ID for the key
              src={kubbo.images?.[0] || "/placeholder.jpg"} // Use the first image from the 'images' array
              name={kubbo.name}
              kubboId={kubbo.id} // Pass the ID for the link in TeamOneItem
              socialMedia={kubbo.socialMedia} // Pass the social media object
            />
          ))}
        </div>

        <div className="team__bottom-content">
          <Link href="/animal" className="btn">
            Mirar todos los servicios
            <img src={rightArrow} alt="right arrow" className="injectable" />
          </Link>
        </div>
      </div>

      {/* shape */}
      <div className="team__shape">
        <img src={teamShape} alt="shape" className="ribbonRotate" />
      </div>
    </section>
  );
};