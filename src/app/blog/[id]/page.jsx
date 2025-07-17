import { Layout } from "@/layouts/Layout";
import { LayoutBlog } from "@/layouts/LayoutBlog";
import React from "react";

export default function Blog() {
  return (
    <Layout
      breadcrumbTitle="Blog Details"
      breadcrumbSubtitle={"Blog Details"}
      mainClass="nothing"
    >
      <LayoutBlog>
        {/* details */}

        {/* comments */}
      </LayoutBlog>
    </Layout>
  );
}
