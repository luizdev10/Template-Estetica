import { useEffect } from "react";
import { clinica, contato } from "../config/site.js";

export default function Seo() {
    useEffect(() => {
        const dados = {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: clinica[0]?.nome,
            telephone: contato.whatsappExibicao,
            email: contato.email,
            address: {
                "@type": "PostalAddress",
                streetAddress: contato.endereco,
            },
            openingHours: contato.horario,
            sameAs: [`https://instagram.com/${contato.instagram}`],
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(dados);
        document.head.appendChild(script);

        return () => document.head.removeChild(script);
    }, []);

    return null;
}
