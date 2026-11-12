import { useEffect } from "react";
import { clinica, contato } from "../config/site.js";

export default function Seo() {
    useEffect(() => {
        const dados = {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: clinica.nome,
            url: window.location.origin,
            image: `${window.location.origin}/og-image.jpg`,
            telephone: contato.whatsapp ? `+${contato.whatsapp}` : undefined,
            email: contato.email,
            address: {
                "@type": "PostalAddress",
                streetAddress: contato.endereco,
            },
            openingHours: contato.horarioSchema,
            sameAs: contato.instagram ? [`https://instagram.com/${contato.instagram}`] : undefined,
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(dados);
        document.head.appendChild(script);

        return () => document.head.removeChild(script);
    }, []);

    return null;
}
