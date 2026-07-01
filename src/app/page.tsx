import Hero from "@/components/homepage/Hero";
import FeaturedMenu from "@/components/homepage/FeaturedMenu";
import About from "@/components/homepage/About";
import Testimonials from "@/components/homepage/Testimonials";
import GalleryPreview from "@/components/homepage/GalleryPreview";
import CTA from "@/components/homepage/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <About />
      <Testimonials />
      <GalleryPreview />
      <CTA />
    </>
  );
}
