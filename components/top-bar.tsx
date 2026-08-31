'use client';

export function TopBar() {
  const scrollToPlans = () =>
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div
      className="relative w-full animate-in fade-in duration-500"
      style={{ backgroundColor: '#170B36', borderBottom: '1px solid rgba(214,166,46,0.35)' }}
    >
      <div className="py-2.5 sm:py-3">
        <div
          className="w-full max-w-6xl mx-auto flex items-center justify-center gap-3 flex-wrap text-center"
          style={{ paddingInline: '12px', boxSizing: 'border-box' }}
        >
          <span
            className="text-xs sm:text-sm font-semibold tracking-wide"
            style={{ color: '#D6A62E' }}
          >
            <span style={{ color: '#D6A62E' }}>OFERTA ESPECIAL</span> DISPONÍVEL HOJE
          </span>
          <button
            onClick={scrollToPlans}
            className="text-[11px] sm:text-xs font-bold uppercase tracking-wide rounded-full px-3 py-1 active:scale-95 transition-transform"
            style={{
              backgroundColor: '#D6A62E',
              color: '#170B36',
              border: '1px solid #D6A62E',
            }}
          >
            Quero acessar
          </button>
        </div>
      </div>
    </div>
  );
}
