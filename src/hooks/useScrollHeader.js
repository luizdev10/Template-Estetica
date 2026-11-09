import { useEffect, useState } from "react"

export function useScrollHeader(limite = 8) {
    const [rolado, setRolado] = useState(false)

    useEffect(() => {
        const aoRolar = () => setRolado(window.scrollY > limite)
        aoRolar()
        window.addEventListener("scroll", aoRolar, { passive: true })
        return () => window.removeEventListener("scroll", aoRolar)
    }, [limite])

    return rolado
}
