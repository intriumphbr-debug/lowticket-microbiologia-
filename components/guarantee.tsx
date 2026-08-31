export function Guarantee() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#003F2D' }}>
      <div className="mobile-content">
        <div
          className="max-w-2xl mx-auto bg-card p-6 sm:p-8 md:p-12 lg:p-16 border border-border relative"
          style={{ backgroundColor: '#FFFFFF', borderColor: '#D8D4CD', boxShadow: '0 8px 24px rgba(23,25,28,.10)', borderRadius: '20px' }}
        >
          {/* Selo */}
          <div className="absolute -top-12 sm:-top-16 left-1/2 transform -translate-x-1/2 w-28 h-28 sm:w-40 sm:h-40 flex items-center justify-center">
            <img
              src="/images/garantia-7-dias-selo.webp"
              alt="Garantia de 7 Dias"
              className="w-full h-full object-contain drop-shadow-lg"
              loading="lazy"
            />
          </div>

          <div className="text-center space-y-6 sm:space-y-8 pt-12 sm:pt-16">
            <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty text-foreground">
              Garantia incondicional de 7 dias 
            </h2>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base" style={{ color: '#4E5358' }}>
              <p className="leading-relaxed">
                Após a compra, você terá 7 dias para conhecer os 80 treinos e os materiais extras. Se o conteúdo não atender às suas expectativas, poderá solicitar o reembolso dentro desse prazo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
