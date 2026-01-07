import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Messaggio inviato! Ti contatteremo presto.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contattaci
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Siamo qui per aiutarti. Scrivici per qualsiasi domanda.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <AnimatedSection animation="slide-in-left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Informazioni di Contatto
                  </h2>
                  <p className="text-muted-foreground">
                    Compila il form o contattaci direttamente tramite email o telefono.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:supporto@weeba.it"
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        supporto@weeba.it
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Telefono</p>
                      <span className="text-foreground font-medium">
                        Call John Pork
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Il tuo nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="La tua email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Come possiamo aiutarti?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  Invia Messaggio <Send className="h-4 w-4" />
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
