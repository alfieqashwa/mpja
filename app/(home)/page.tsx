import { AboutUs } from "./about-us";
import { Cta } from "./cta";
import { FeatureCourses } from "./feature-courses";
import { Footer } from "./footer";
import { Hero } from "./Hero";
import { Navbar } from "./navbar";
import { Testimony } from "./testimony";

export default function Home() {
  return (
    <div className="flex flex-col bg-white font-sans">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <AboutUs />
        <FeatureCourses />
        <Testimony />
        <Cta />
      </main>

      <Footer />
    </div>
  );
}
