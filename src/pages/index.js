import React from "react";
import {
  AboutSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

import ContactForm from "../component/ContactForm"

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="Superior Auto Body Services: Restoring Your Vehicle to Perfection" />
        <InterestsSection sectionId="details" heading="Most Popular Services" />
        <ContactForm />
      </Page>
    </>
  );
}
