import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SofiaLove = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of images from fotoSofia folder
  const images = [
    "/fotoSofia/37b300f8-8b6a-4858-a290-aed7b2de7aec.jpg",
    "/fotoSofia/IMG_7299.JPEG",
    "/fotoSofia/IMG_7466.JPEG",
    "/fotoSofia/IMG_7881.JPEG",
    "/fotoSofia/IMG_7890.JPEG",
    "/fotoSofia/IMG_7991.PNG",
    "/fotoSofia/IMG_8008.JPEG",
    "/fotoSofia/IMG_8043.JPEG",
    "/fotoSofia/IMG_8051.JPEG",
    "/fotoSofia/IMG_8057.JPEG",
    "/fotoSofia/IMG_8059.JPEG"
  ];

  const letters = [
    `Ogni volta che guardo questa foto, sento ancora il calore del tuo sorriso e la leggerezza dei nostri momenti insieme; è come se il tempo si fermasse per permettermi di ricordare quanto profondamente ti amo.`,
    `Questa immagine mi riporta a un giorno in cui il mondo sembrava sospeso e solo noi contavamo: con te ogni dettaglio diventa un ricordo sacro che custodisco con cura.`,
    `Non c'è poesia che possa raccontare ciò che provo quando ti penso: questa foto è un piccolo frammento di un amore infinito che cresce a ogni respiro.`,
    `Ogni sguardo in questa immagine è una promessa silenziosa che il mio cuore rinnova ogni giorno; con te ogni cammino diventa casa.`,
    `Quando vedo questa foto, sento ancora la melodia delle nostre risate e il conforto delle tue mani nella mia; sei la mia certezza più dolce.`,
    `Pure mentre dormi, sembra che il tuo cuore batta in sintonia con il mio; questa immagine cattura la serenità che solo il nostro amore sa donare.`,
    `La parte superiore di questa foto racconta i giorni in cui il tuo sorriso illuminava anche le mie paure; per questo motivo la custodisco sempre tra i ricordi più cari.`,
    `Tra ombre e luci, questa fotografia racchiude la dolcezza dei nostri sguardi e la complicità di chi sa amarsi senza spiegazioni.`,
    `Ogni piega di questa immagine è una pagina di una storia che scriviamo insieme: un romanzo di piccoli gesti che valgono più di ogni parola.`,
    `Questa foto è come una lettera che non ho mai finito di scrivere per te: la riapro ogni giorno e trovo nuove ragioni per amarti ancora di più.`,
    `Il ricordo custodito in questa immagine è un fiore che continua a sbocciare nel mio cuore; grazie per rendere ogni giorno così prezioso.`
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-200">
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-4 animate-pulse" style={{ marginTop: '20px' }}>
            🩵 Sofia, Ti Amo 🩵
          </h1>
          <p className="text-lg md:text-xl text-pink-700 mb-6">
            Ogni momento con te è un dono prezioso che si trasforma in ricordi dorati nel mio cuore; dal primo caffè condiviso ai silenzi che parlano più di mille parole, ogni istante accanto a te è poesia che non smetterò mai di leggere.
          </p>
        </div>

        <div className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative h-96 md:h-[600px]">
            <img
              src={images[currentImageIndex]}
              alt={`Foto romantica che custodisce un ricordo d'amore profondamente legato al nostro cuore — istante ${currentImageIndex + 1}`}
              className={`w-full h-full object-cover ${currentImageIndex === 6 ? 'object-top' : 'object-center'}`}
              style={currentImageIndex === 6 ? { objectPosition: 'top' } : {}}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              aria-label="Vai all'immagine precedente — un ricordo che mi riporta al tuo sorriso e al calore delle tue mani"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-red-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              aria-label="Vai all'immagine successiva — un altro istante del nostro amore che vorrei conservare per sempre"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-red-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Image indicators */}
          <div className="flex justify-center space-x-2 p-4 bg-white">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-red-500 scale-125"
                    : "bg-gray-300 hover:bg-red-300"
                }`}
              />
            ))}
          </div>

          {/* Love letter for current photo */}
          <div className="p-6 bg-white text-center max-w-4xl mx-auto">
            <p className="text-pink-700 text-base md:text-lg leading-relaxed">
              {letters[currentImageIndex]}
            </p>
          </div>
        </div>

        <div className="text-center mt-8 max-w-2xl">
          <p className="text-pink-700 text-lg leading-relaxed">
            "Sei la luce dei miei giorni, il battito profondo del mio cuore, la ragione eterna del mio sorriso e il pensiero che rende ogni alba un miracolo; camminare al tuo fianco significa scoprire ogni volta nuovi motivi per innamorarmi ancora, custodire promesse sussurrate sotto cieli stellati, costruire un futuro fatto di piccoli gesti che valgono più di ogni parola, e stringerti la mano quando il mondo ha bisogno di dolcezza. Ogni ricordo con te è un tesoro che porto dentro come una mappa segreta verso la felicità, e ogni giorno insieme è una pagina nuova della nostra storia che desidero rileggere all'infinito."
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <span className="text-2xl">🩵</span>
            <span className="text-2xl">🌹</span>
            <span className="text-2xl">🩵</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SofiaLove;
