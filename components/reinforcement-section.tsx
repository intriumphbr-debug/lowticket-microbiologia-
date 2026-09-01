import { Check } from 'lucide-react';

const lines = [
  'Entenda fundamentos e processos',
  'Diferencie conceitos que costumam confundir',
  'Revise microrganismos individualmente',
  'Consulte grandes assuntos em páginas rápidas',
  'Teste o que realmente conseguiu lembrar',
];

export function ReinforcementSection() {
  return (
    <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="mobile-content">
        <div
          className="mx-auto max-w-2xl rounded-[22px] border p-7 sm:p-10"
          style={{ backgroundColor: '#FFFFFF', borderColor: '#E4DEEF', boxShadow: '0 12px 34px rgba(43,20,95,0.08)' }}
        >
          <h2 className="font-grotesk text-2xl leading-tight text-pretty sm:text-3xl md:text-4xl" style={{ color: '#2B145F' }}>
            Não é Apenas um Resumo de Microbiologia
          </h2>
          <p className="mt-4 text-sm leading-relaxed sm:text-base" style={{ color: '#43505C' }}>
            O Microbiologia Visual reúne diferentes formatos para trabalhar o mesmo objetivo por ângulos complementares: compreender, comparar, memorizar, revisar e testar.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {lines.map((line) => (
              <li key={line} className="flex items-center gap-3">
                <span
                  className="flex shrink-0 items-center justify-center rounded-full"
                  style={{ width: '22px', height: '22px', backgroundColor: '#0A6C78', color: '#FFFFFF' }}
                >
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-sm sm:text-base font-medium" style={{ color: '#34313F' }}>
                  {line}
                </span>
              </li>
            ))}
          </ul>

          <p
            className="mt-7 rounded-xl px-5 py-3.5 text-center font-grotesk text-sm font-bold sm:text-base"
            style={{ backgroundColor: '#F0ECF7', color: '#2B145F' }}
          >
            Tudo organizado em mais de 140 recursos visuais.
          </p>
        </div>
      </div>
    </section>
  );
}
