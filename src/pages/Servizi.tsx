import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Code, Smartphone, Search, BarChart, Shield, Headphones } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Sviluppo Web",
    description: "Creiamo siti web su misura con le tecnologie più moderne e performanti.",
  },
  {
    icon: Smartphone,
    title: "Design Responsive",
    description: "I nostri siti sono ottimizzati per funzionare perfettamente su ogni dispositivo.",
  },
  {
    icon: Search,
    title: "Ottimizzazione SEO",
    description: "Miglioriamo la visibilità del tuo sito sui motori di ricerca.",
  },
  {
    icon: BarChart,
    title: "Analytics",
    description: "Monitoriamo le performance del tuo sito con strumenti di analisi avanzati.",
  },
  {
    icon: Shield,
    title: "Hosting Sicuro",
    description: "Hosting affidabile con certificati SSL e backup automatici.",
  },
  {
    icon: Headphones,
    title: "Supporto Dedicato",
    description: "Assistenza tecnica sempre disponibile per ogni tua esigenza.",
  },
];

export default function Servizi() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              I Nostri Servizi
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Offriamo una gamma completa di servizi per la tua presenza digitale
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="p-6 bg-card rounded-xl border border-border h-full hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
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
