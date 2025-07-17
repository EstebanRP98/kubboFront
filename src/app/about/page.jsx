import { WhyWeAreTwo } from "@/components/why_we_are/WhyWeAreTwo";
import { Layout } from "@/layouts/Layout";
import React from "react";

export default function About() {
  return (
    <Layout breadcrumbTitle="About Us" hideNewsLetter>
      {/* about */}
      {/* why we are */}
      <WhyWeAreTwo />

      {/* counter */}
    </Layout>
  );
}
