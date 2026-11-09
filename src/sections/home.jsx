import fotomb from "../assets/images/fundoinimb.webp"
import { useReveal } from "../hooks/useReveal.js"

export default function Home() {
    const [ref, visivel] = useReveal({ threshold: 0.4 })

    return (
        <section id="inicio" className="relative h-dvh w-full overflow-hidden ">
            <img
                src={fotomb}
                alt=""
                className="absolute inset-0 h-full w-full origin-center object-cover object-[35%_30%] animate-zoom-suave motion-reduce:animate-none"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />

            <div ref={ref} className="relative z-10 mx-4 flex h-full flex-col justify-end gap-4 pb-10 sm:mx-8 sm:pb-14 lg:mx-16 lg:gap-6 lg:pb-20 xl:mx-20">
                <div
                    className={`flex flex-col text-borda transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:blur-none ${
                        visivel ? "translate-y-0 opacity-100 blur-none" : "translate-y-8 opacity-0 blur-sm"
                    }`}
                >
                    <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] lg:text-sm lg:tracking-[0.25em]">
                        Harmonização facial &amp; estética avançada
                    </p>

                    <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl">
                        A arte de
                        <em className="block ml-6 text-foto-claro underline decoration-amarelo decoration-4 underline-offset-8 sm:ml-12 lg:ml-16 lg:decoration-[6px] lg:underline-offset-[14px]">
                            ser você.
                        </em>
                    </h1>

                    <p className="max-w-md pt-5 lg:max-w-lg lg:pt-7 lg:text-lg xl:text-xl">
                        Avaliação individual e procedimentos feitos para realçar o que já é seu.
                    </p>
                </div>

                <div
                    className={`transition-all delay-300 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:blur-none ${
                        visivel ? "translate-y-0 opacity-100 blur-none" : "translate-y-8 opacity-0 blur-sm"
                    }`}
                >
                    <a
                        href="#agendar"
                        className="inline-flex w-full items-center justify-center rounded-full bg-amarelo px-10 py-5 text-center text-destaque-escuro transition-transform active:scale-[0.98] sm:w-auto lg:px-14 lg:py-6 lg:text-lg"
                    >
                        AGENDAR AVALIAÇÃO
                    </a>
                </div>
            </div>
        </section>
    )
}