"use client"

import { AboutUs } from "./about-us"
import { Cta } from "./cta"
import { Faq } from "./faq"
import { FeatureCourses } from "./feature-courses"
import { Footer } from "./footer"
import { Hero } from "./Hero"
import { LearningJourney } from "./learning-journey"
import { Navbar } from "./navbar"
import { Testimonials } from "./testimonials"

export default function Home() {
  return (
    <div className="bg-white relative">
      <Navbar />

      <main className="space-y-24">
        <Hero />
        <AboutUs />
        <FeatureCourses />
        <LearningJourney />
        <Testimonials />
        <Faq />
        <Cta />
      </main>

      <Footer />
    </div>
  )
}
