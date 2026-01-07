import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Palette, Rocket } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Creiamo il tuo sito web <span className="text-primary">perfetto</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Siti web moderni, veloci e ottimizzati per far crescere il tuo business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pacchetti"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Scopri i Pacchetti <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contatti"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
              >
                Contattaci
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Perché scegliere Weeba?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Offriamo soluzioni complete per la tua presenza online
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="p-6 bg-card rounded-xl border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Siti Responsive</h3>
                <p className="text-muted-foreground">
                  Perfetti su qualsiasi dispositivo, dal desktop allo smartphone.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="p-6 bg-card rounded-xl border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Design Moderno</h3>
                <p className="text-muted-foreground">
                  Design personalizzato che riflette l'identità del tuo brand.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="p-6 bg-card rounded-xl border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Performance</h3>
                <p className="text-muted-foreground">
                  Siti veloci e ottimizzati per i motori di ricerca.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="scale-up" className="text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Pronto a iniziare?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contattaci oggi per una consulenza gratuita e scopri come possiamo aiutarti.
            </p>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors"
            >
              Contattaci Ora <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
