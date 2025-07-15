'use client'

import React, { useState } from "react";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { ProductPagination } from "../products/ProductPagination";


// Query GraphQL
const GET_BUSINESSES = gql`
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
      }
      total
    }
  }
`

export const AnimalList = () => {
  const itemsPerPage = 10
  const [page, setPage] = useState(1)
  const offset = (page - 1) * itemsPerPage

  const { data, loading, error } = useQuery(GET_BUSINESSES, {
    variables: { limit: itemsPerPage, offset },
  });

  if (loading) return <p className="text-center">Cargando negocios...</p>;
  if (error) return <p className="text-center text-danger">Error: {error.message}</p>;

  const businesses = data.businesses.items;
  const totalItems = data.businesses.total;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="col-xl-9 col-lg-8 order-0 order-lg-2">
      <div className="row">
        {businesses.map((animal) => (
          <div key={animal.id} className="col-xl-4 col-md-6">
            <div className="animal__item animal__item-two animal__item-three shine-animate-item">
              <div className="animal__thumb animal__thumb-two shine-animate">
                <Link href={`/animal/${animal.id}`}>
                  <img src={animal.images?.[0]} alt={animal.name} />
                </Link>
              </div>
              <div className="animal__content animal__content-two">
                <h4 className="title">
                  <Link href={`/animal/${animal.id}`}>{animal.name}</Link>
                </h4>
                <div className="pet-info">
                  <ul className="list-wrap">
                    <li>
                      Servicios: <span>{animal.services?.join(", ")}</span>
                    </li>
                    <li>
                      Direccion: <span>{animal.location?.address}</span>
                    </li>
                  </ul>
                </div>
                <div className="location">
                  <i className="flaticon-placeholder"></i>
                  <span>{animal.location?.address}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      {totalPages > 1 && (
        <ProductPagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};