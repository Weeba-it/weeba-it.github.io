import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Weeba</h3>
            <p className="text-muted-foreground">
              Creiamo siti web moderni e performanti per far crescere il tuo business.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Link Utili</h4>
            <div className="flex flex-col gap-2">
              <Link to="/servizi" className="text-muted-foreground hover:text-primary transition-colors">
                Servizi
              </Link>
              <Link to="/pacchetti" className="text-muted-foreground hover:text-primary transition-colors">
                Pacchetti
              </Link>
              <Link to="/contatti" className="text-muted-foreground hover:text-primary transition-colors">
                Contatti
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contatti</h4>
            <p className="text-muted-foreground">supporto@weeba.it</p>
            <p className="text-muted-foreground">Call John Pork</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          © {new Date().getFullYear()} Weeba. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
