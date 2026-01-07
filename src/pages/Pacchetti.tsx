import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Starter",
    price: "50",
    description: "Perfetto per chi inizia",
    features: [
      "Sito web responsive base",
      "Design moderno e personalizzato",
      "Form di contatto",
      "Hosting e manutenzione sito web e mail",
    ],
  },
  {
    name: "Business",
    price: "100",
    description: "Per aziende in crescita",
    popular: true,
    features: [
      "Sito web responsive avanzato",
      "Design premium personalizzato",
      "Ottimizzazione SEO",
      "Google Analytics",
      "Hosting e manutenzione sito web e mail",
      "Supporto h24",
    ],
  },
  {
    name: "Enterprise",
    price: "125",
    description: "Soluzione completa",
    features: [
      "Sito web responsive avanzato",
      "Design premium personalizzato",
      "Ottimizzazione SEO",
      "Google Analytics",
      "Hosting e manutenzione sito web e mail",
      "Supporto h24",
      "Gestione social media",
      "Grafiche personalizzate per eventi",
    ],
  },
];

export default function Pacchetti() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              I Nostri Pacchetti
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scegli il piano più adatto alle tue esigenze
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <AnimatedSection
                key={pkg.name}
                animation="fade-up"
                delay={index * 150}
              >
                <div
                  className={`p-6 bg-card rounded-xl border h-full flex flex-col ${
                    pkg.popular
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border"
                  }`}
                >
                  {pkg.popular && (
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full self-start mb-4">
                      Più popolare
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="text-muted-foreground mt-1 mb-4">{pkg.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">€{pkg.price}</span>
                    <span className="text-muted-foreground">/mese</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contatti"
                    className={`w-full py-3 rounded-lg font-medium text-center transition-colors ${
                      pkg.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    Inizia Ora
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
