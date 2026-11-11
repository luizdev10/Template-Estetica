import { profissional } from "../config/site.js"
import { useReveal } from "../hooks/useReveal.js"

export default function Sobre() {
    const [ref, visivel] = useReveal({ threshold: 0.1 })

    return (
        <section id="sobre" className="scroll-mt-28 bg-fundo pb-20 pt-16">
            <div
                ref={ref}
                className="mx-6 flex flex-col gap-10 md:mx-10 md:grid md:grid-cols-[minmax(0,420px)_minmax(0,1fr)] md:items-center md:gap-16 lg:mx-auto lg:max-w-5xl"
            >

                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-full">
                    <img
                        src={profissional.foto}
                        alt={profissional.alt}
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: profissional.posicao }}
                        className={`h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105 ${
                            visivel ? "animate-revelar-foto motion-reduce:animate-none" : "scale-110 [clip-path:inset(0_0_100%_0)]"
                        }`}
                    />

                    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15] mix-blend-overlay motion-reduce:hidden" aria-hidden="true">
                        <filter id="grao-sobre">
                            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.35 0" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#grao-sobre)" />
                    </svg>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap gap-6">
                        {profissional.credenciais.map((item) => (
                            <div key={item.rotulo}>
                                <p className="font-display text-xl">{item.rotulo}</p>
                                <p className="text-xs text-suave">{item.valor}</p>
                            </div>
                        ))}
                    </div>

                    <div
                        className={`transition-all delay-150 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                            visivel ? "translate-y-0 opacity-100 blur-none" : "translate-y-8 opacity-0 blur-sm"
                        }`}
                    >
                        <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-destaque">
                            {[profissional.registro, profissional.area].filter(Boolean).join(" · ")}
                        </p>
                        <h2 className="font-display text-4xl leading-[1.05] md:text-5xl">{profissional.nome}</h2>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-texto/80 sm:text-base">{profissional.bio}</p>
                    </div>

                    <a
                        href="#agendar"
                        className="inline-flex w-fit items-center justify-center rounded-full bg-destaque px-8 py-4 text-xs uppercase tracking-[0.2em] text-fundo transition-all duration-200 ease-out hover:bg-destaque-escuro active:scale-[0.98]"
                    >
                        Agendar avaliação
                    </a>
                </div>
            </div>
        </section>
    )
}
