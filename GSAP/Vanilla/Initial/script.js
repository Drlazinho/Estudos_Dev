// --- BLOCO 1: HERO TIMELINE (Intro) ---
// 1. Criamos a instância da Timeline
const tl = gsap.timeline({
    defaults: { ease: "power4.out", duration: 2 } // Configurações padrão para não repetir código
})


// 2. Encadeamos as animações
tl
    .from(".title", {
        y: 100,
        opacity: 0,
        skewY: 7 // Dá um efeito dinâmico de inclinação
    })
    .from(".description", {
        y: 50,
        opacity: 0
    }, "-=0.6") // O Position Parameter: Começa 0.6s antes da anterior acabar
    .from(".btn", {
        scale: 0,
        rotation: 15,
        opacity: 0,
        ease: "back.out(1.7)" // Efeito de "mola"
    }, "<") // Começa EXATAMENTE junto com a animação anterior (.description)

// --- BLOCO 2: STAGGER GRID ---
// Criamos uma função ou apenas o trigger
// gsap.from(".card", {
//     duration: 0.8,
//     y: 100,
//     opacity: 0,
//     scale: 0.5,
//     ease: "back.out(1.7)",
//     delay: 2, // Atraso antes de começar a animação

//     // O MÁGICO STAGGER:
//     stagger: {
//         each: 0.5,        // Tempo entre o início de cada elemento
//         from: "start",   // Começa do centro para as bordas (pode ser "start", "end", "edges")
//         grid: "auto",     // O GSAP calcula automaticamente se for uma grade (linhas/colunas)
//         axis: "y"         // Opcional: anima por colunas ou linhas especificamente
//     }
// })

// --- BLOCO 3: SCROLLTRIGGER BÁSICO ---

// É OBRIGATÓRIO registrar o plugin
gsap.registerPlugin(ScrollTrigger)

gsap.from("#stagger-module .card", {
    scrollTrigger: {
        trigger: "#stagger-module", // O elemento que ativa a animação
        start: "top 80%",          // "top do elemento" encontra "80% do topo da tela"
        end: "top 30%",            // Onde a animação teoricamente terminaria
        markers: true,             // ATIVE ISSO para aprender a debugar!
        toggleActions: "play reverse play reverse" // [onEnter, onLeave, onEnterBack, onLeaveBack]
    },
    duration: 0.8,
    scale: 1,
    opacity: 0,
    y: 50,
    stagger: 0.1,
    ease: "power2.out"
})

// --- BLOCO 4: SCRUB & PROGRESS BAR ---

// 1. Barra de progresso vinculada ao scroll total da página
gsap.to(".progress-bar", {
    width: "100%",
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3 // O 0.3 dá uma suavidade quando o usuário para de rolar
    }
})

// 2. Efeito Parallax em um elemento específico
gsap.to(".parallax-box", {
    y: -150, // Move para cima enquanto rola para baixo
    rotation: 360,
    ease: "none",
    scrollTrigger: {
        trigger: "#parallax-module",
        start: "top bottom", // Começa quando o topo da seção entra no fundo da tela
        end: "bottom top",    // Termina quando o fundo da seção sai pelo topo da tela
        scrub: 1             // Inércia mais lenta (1 segundo de "atraso")
    }
})

// --- BLOCO 5: PINNING & SECTIONS ---

const tlPin = gsap.timeline({
    scrollTrigger: {
        trigger: "#pin-module",
        start: "top top",      // Quando o topo da seção encosta no topo da tela
        end: "+=3000",         // A seção fica "travada" por 2000px de scroll
        scrub: 1,              // Movimento suave
        pin: true,             // TRAVA o elemento na tela
        markers: true          // Importante para ver o "end" lá embaixo
    }
})

// A animação acontece enquanto a seção está "pinada"
tlPin.to(".panel-2", {
    left: "0%",
    ease: "none"
})

// --- BLOCO 6: SVG DRAWING (Lógica Manual Avançada) ---

// Selecionamos todos os caminhos que queremos animar
const paths = document.querySelectorAll(".path")

paths.forEach(path => {
    // 1. Pegamos o comprimento total da linha (Método nativo do SVG)
    const length = path.getTotalLength()

    // 2. Configuramos o "esconderijo" via GSAP (equivalente ao DrawSVG)
    gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length
    })

    // 3. Animamos para 0 (mostrando a linha)
    gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: "#svg-module",
            start: "top 70%",
            end: "top 10%",
            scrub: 1 // Faz a linha desenhar conforme o scroll!
        }
    })
})

// --- BLOCO 7: SVG TEXT DRAWING ---

// --- BLOCO 7: SVG TEXT DRAWING (VERSÃO CORRIGIDA) ---

const svgText = document.querySelector(".svg-text")

if (svgText) {
    // 1. O truque: Alguns navegadores precisam que o texto seja tratado como Path
    // ou que a gente force o cálculo após um pequeno delay.

    // Usamos uma função para garantir o cálculo:
    const drawText = () => {
        const textLength = svgText.getComputedTextLength() || 500 // Fallback caso seja 0

        // 2. Configuramos o estado inicial
        gsap.set(svgText, {
            strokeDasharray: textLength,
            strokeDashoffset: textLength,
            visibility: "visible" // Evita o "flash" do texto antes de animar
        })

        // 3. Animamos
        gsap.to(svgText, {
            strokeDashoffset: 0,
            duration: 3,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#svg-text-module",
                start: "top 80%",
                end: "top 20%",
                scrub: 1,
                markers: true // Ative para ver se o trigger está funcionando
            }
        })
    }

    // Executa após o carregamento da página/fontes
    window.addEventListener("load", drawText)
}