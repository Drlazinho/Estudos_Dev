import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function CustomCursor() {
    const cursorRef = useRef()

    useGSAP(() => {
        // 1. Criamos funções ultra rápidas para mover o cursor
        const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" })
        const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" })

        const moveCursor = (e) => {
            xTo(e.clientX)
            yTo(e.clientY)
        }

        // 2. Ouvinte de movimento global
        window.addEventListener("mousemove", moveCursor)

        // 3. Efeito de Interação (Hover)
        const handleMouseEnter = () => gsap.to(cursorRef.current, { scale: 4, backgroundColor: "rgba(86, 0, 255, 0.3)" })
        const handleMouseLeave = () => gsap.to(cursorRef.current, { scale: 1, backgroundColor: "white" })

        // Selecionamos todos os links ou elementos com a classe 'hover-target'
        const targets = document.querySelectorAll(".hover-target, a, button")
        targets.forEach(el => {
            el.addEventListener("mouseenter", handleMouseEnter)
            el.addEventListener("mouseleave", handleMouseLeave)
        })

        // Cleanup automático do useGSAP
        return () => {
            window.removeEventListener("mousemove", moveCursor)
        }
    })

    return <div ref={cursorRef} style={cursorStyle} />
}

const cursorStyle = {
    position: 'fixed',
    top: -10,
    left: -10,
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    borderRadius: '50%',
    pointerEvents: 'none', // IMPORTANTE: para não bloquear os cliques
    zIndex: 10000,
    mixBlendMode: 'difference' // Efeito visual 'invertido' clássico
}