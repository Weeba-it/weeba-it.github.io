import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Title
    document.title = "Weeba - Creazione Siti Web per PMI | Web Agency Professionale";

    // Meta description
    const descriptionContent = "Weeba crea siti web professionali per piccole e medie imprese. Design moderno, SEO ottimizzato e soluzioni su misura. Richiedi un preventivo gratuito.";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", descriptionContent);

    // Meta keywords
    const keywordsContent = "Weeba, web agency, siti web professionali, PMI, SEO, sviluppo web, design moderno, consulenza digitale";
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywordsContent);

    // Meta robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.name = "robots";
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute("content", "index, follow");

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://weeba.it/");

    // Open Graph
    const ogTags = [
      { property: "og:title", content: document.title },
      { property: "og:description", content: descriptionContent },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://weeba.it/" },
      { property: "og:image", content: "https://weeba.it/og-image.png" } // sostituisci con un'immagine reale
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Twitter Card
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: document.title },
      { name: "twitter:description", content: descriptionContent },
      { name: "twitter:image", content: "https://weeba.it/og-image.png" } // sostituisci con un'immagine reale
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <PackagesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
