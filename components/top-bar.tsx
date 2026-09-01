'use client';

export function TopBar() {
  return (
    <div
      className="relative w-full animate-in fade-in duration-500"
      style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid rgba(43,20,95,0.10)' }}
    >
      <div className="py-2.5 sm:py-3">
        <div
          className="w-full max-w-6xl mx-auto flex items-center justify-center text-center"
          style={{ paddingInline: '12px', boxSizing: 'border-box' }}
        >
          <span
            className="text-xs sm:text-sm font-semibold tracking-wide"
            style={{ color: '#2B145F' }}
          >
            OFERTA ESPECIAL DISPONÍVEL HOJE
          </span>
        </div>
      </div>
    </div>
  );
}
