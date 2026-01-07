import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Users, Target, Award } from "lucide-react";

export default function ChiSiamo() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Chi Siamo
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un team appassionato di sviluppatori e designer
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="slide-in-left">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                La nostra storia
              </h2>
              <p className="text-muted-foreground mb-4">
                Weeba nasce dalla passione per il web design e lo sviluppo. 
                Il nostro obiettivo è aiutare le aziende a crescere online con 
                siti web moderni, performanti e ottimizzati.
              </p>
              <p className="text-muted-foreground">
                Crediamo che ogni business meriti una presenza online di qualità, 
                indipendentemente dalle dimensioni. Per questo offriamo pacchetti 
                accessibili senza compromettere la qualità.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl font-bold text-primary">W</span>
                  <p className="text-foreground font-semibold mt-2">Weeba</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Team Esperto</h3>
                <p className="text-muted-foreground">
                  Professionisti con anni di esperienza nel settore
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Focus sui Risultati</h3>
                <p className="text-muted-foreground">
                  Ogni progetto è orientato agli obiettivi del cliente
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Qualità Garantita</h3>
                <p className="text-muted-foreground">
                  Standard elevati per ogni progetto che realizziamo
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
