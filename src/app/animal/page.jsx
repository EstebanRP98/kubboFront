import { AnimalList } from "@/components/animal/AnimalList";
import { AnimalSidebar } from "@/components/animal/AnimalSidebar";
import { Layout } from "@/layouts/Layout";
import React from "react";

export default function Animal() {
  return (
    <Layout breadcrumbTitle="Todo">
      <section className="animal__area-three">
        <div className="container">
          <div className="row">
            {/* list */}
            <AnimalList />

            {/* sidebar */}

          </div>
        </div>
      </section>
    </Layout>
  );
}
