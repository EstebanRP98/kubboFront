import { AboutOne } from "@/components/about/AboutOne";
import { BannerOne } from "@/components/banner/BannerOne";
import { BlogOne } from "@/components/blogs/BlogOne";
import { BrandOne } from "@/components/brands/BrandOne";
import { CounterOne } from "@/components/counter/CounterOne";
import { InstagramOne } from "@/components/insta/InstagramOne";
import { MarqueeOne } from "@/components/marquee/MarqueeOne";
import { RegistrationOne } from "@/components/registration/RegistrationOne";
import { ServiceOne } from "@/components/service/ServiceOne";
import { TeamOne } from "@/components/teams/TeamOne";
import { TestimonialOne } from "@/components/testimonial/TestimonialOne";
import { WhyWeAreOne } from "@/components/why_we_are/WhyWeAreOne";
import { Layout } from "@/layouts/Layout";

export default function Home() {
  return (
    <Layout header={1} footer={1}>
      {/* banner one */}
      <BannerOne />

      {/* service one */}
      <ServiceOne />

      {/* about one */}
      <AboutOne />

      {/* marquee one */}
      <MarqueeOne />

      {/* why we are */}
      <WhyWeAreOne />


      {/* team */}
      <TeamOne />
    </Layout>
  );
}
