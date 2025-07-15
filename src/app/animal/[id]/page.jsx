import { AnimalDetailsRelated } from "@/components/animal/AnimalDetailsRelated";
import { AnimalDetailsTop } from "@/components/animal/AnimalDetailsTop";
import { Layout } from "@/layouts/Layout";
import React from "react";

// Corrected: Destructure 'params' from the argument object
export default function AnimalDetails({ params }) {
  const { id } = params; // Now 'id' will be correctly extracted
  console.log('ID from page params:', id);
  return (
    <Layout breadcrumbTitle="Pet Details">
      <section className="animal__details-area">
        <div className="container">
          {/* top */}
          <AnimalDetailsTop businessId={id} />

          {/* slider */}
          <AnimalDetailsRelated />
        </div>
      </section>
    </Layout>
  );
}