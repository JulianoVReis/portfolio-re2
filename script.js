// --- Variáveis Globais ---
let whatsapp, gmail, skills, modalSkills, modalSkillsN1, modalSkillsN2, modalSkillsN3
let info1img, info1, info1Span, info2txt, carrossel, projetos
let img
let originalBorderImage, originalBackgroundColor
let typeitInstance = null
let github, linkedin, modalGithub, modalLinkedin
let formacao
let examinarGithub, examinarLinkedin
// --- Fim Variáveis Globais ---

// --- Elementos principais da página ---
const principalDiv = document.querySelector('.principal')
const conteudoOriginal = principalDiv.innerHTML
let originalPadding = getComputedStyle(principalDiv).padding
// --- Fim Elementos principais da página ---

// --- Função para limpar itens ativos dos modais ---
function limparItensAtivos() {
  document.querySelectorAll(
    '.modal-skills li, .modal-github li, .modal-linkedin li'
  ).forEach(li => {
    li.classList.remove('ativo')
  })
}
// --- Fim Função para limpar itens ativos ---

// --- Função de animação de texto ---
function typeWriterInfo(texto) {
  if (typeitInstance) {
    typeitInstance.destroy()
    if (info2txt) info2txt.innerHTML = ""
  }
  typeitInstance = new TypeIt("#info2txt", {
    strings: texto,
    speed: 50,
    loop: false,
    waitUntilVisible: true,
    cursor: false,
  }).go()
}
// --- Fim animação de texto ---

// --- Flags de controle de modais ---
let skillsAberto = false
let githubAberto = false
let linkedinAberto = false
// --- Fim flags de controle de modais ---

// --- Função principal para reinicializar scripts e eventos ---
function reinicializarScripts() {
  // --- Seletores de elementos ---
  whatsapp = document.querySelector(".whatsapp")
  gmail = document.querySelector(".gmail")
  skills = document.querySelector(".skills")
  modalSkills = document.querySelector(".modal-skills")
  modalSkillsN1 = document.querySelector(".modal-skills .n1")
  modalSkillsN2 = document.querySelector(".modal-skills .n2")
  modalSkillsN3 = document.querySelector(".modal-skills .n3")
  info1img = document.querySelector(".info-1-img")
  info1 = document.querySelector(".info-1")
  info1Span = document.querySelector(".info-1 span")
  info2txt = document.querySelector("#info2txt")
  carrossel = document.querySelector(".carousel")
  projetos = document.querySelector("#projetos")
  github = document.querySelector(".github")
  linkedin = document.querySelector(".linkedin")
  modalGithub = document.querySelector(".modal-github")
  modalLinkedin = document.querySelector(".modal-linkedin")
  formacao = document.querySelector(".formacao")
  examinarGithub = document.querySelector(".examinar-github")
  examinarLinkedin = document.querySelector(".examinar-linkedin")
  // --- Fim Seletores de elementos ---

  // --- Imagem do info1 ---
  img = document.createElement("img")
  if (info1img) info1img.appendChild(img)
  // --- Fim Imagem do info1 ---

  // --- Estilos originais do info1 ---
  const info1Styles = info1 ? getComputedStyle(info1) : {}
  originalBorderImage = info1Styles ? info1Styles.borderImage : ""
  originalBackgroundColor = info1Styles ? info1Styles.backgroundColor : ""
  // --- Fim estilos originais info1 ---

  // --- Evento WhatsApp ---
  whatsapp?.addEventListener("click", () => {
    tocarSom("audio/re2-cursor-select.mp3")
    if (carrossel) carrossel.style.display = "none"
    if (modalSkills) modalSkills.style.display = "none"
    if (modalGithub) modalGithub.style.display = "none"
    if (modalLinkedin) modalLinkedin.style.display = "none"
    skillsAberto = false
    githubAberto = false
    linkedinAberto = false
    if (info1) info1.style.borderImage = originalBorderImage
    if (info1) info1.style.backgroundColor = originalBackgroundColor
    if (info1Span) info1Span.style.display = "block"
    if (info1img && info1img.style.display === "flex" && img.src.includes("whatsapp.png")) {
      info1img.style.display = "none"
      if (info2txt) info2txt.style.display = "none"
    } else if (info1img) {
      info1img.style.display = "flex"
      img.src = "img/whatsapp.png"
      if (info2txt) info2txt.style.display = "block"
      typeWriterInfo('<span style="color: #19E428;">WhatsApp</span><br>(51) 989199543')
    }
  })
  // --- Fim evento WhatsApp ---

  // --- Evento Gmail ---
  gmail?.addEventListener("click", () => {
    tocarSom("audio/re2-cursor-select.mp3")
    if (carrossel) carrossel.style.display = "none"
    if (modalSkills) modalSkills.style.display = "none"
    if (modalGithub) modalGithub.style.display = "none"
    if (modalLinkedin) modalLinkedin.style.display = "none"
    skillsAberto = false
    githubAberto = false
    linkedinAberto = false
    if (info1) info1.style.borderImage = originalBorderImage
    if (info1) info1.style.backgroundColor = originalBackgroundColor
    if (info1Span) info1Span.style.display = "block"
    if (info1img && info1img.style.display === "flex" && img.src.includes("gmail.webp")) {
      info1img.style.display = "none"
      if (info2txt) info2txt.style.display = "none"
    } else if (info1img) {
      info1img.style.display = "flex"
      img.src = "img/gmail.png"
      if (info2txt) info2txt.style.display = "block"
      typeWriterInfo('<span style="color: #19E428;">Gmail</span><br>julianovreis@gmail.com')
    }
  })
  // --- Fim evento Gmail ---

  // --- Evento Formação ---
  formacao?.addEventListener("click", () => {
    tocarSom("audio/re2-cursor-select.mp3")
    if (carrossel) carrossel.style.display = "none"
    if (modalSkills) modalSkills.style.display = "none"
    if (modalGithub) modalGithub.style.display = "none"
    if (modalLinkedin) modalLinkedin.style.display = "none"
    skillsAberto = false
    githubAberto = false
    linkedinAberto = false
    if (info1) info1.style.borderImage = originalBorderImage
    if (info1) info1.style.backgroundColor = originalBackgroundColor
    if (info1Span) info1Span.style.display = "block"
    if (info1img && info1img.style.display === "flex" && img.src.includes("formacao.png")) {
      info1img.style.display = "none"
      if (info2txt) info2txt.style.display = "none"
    } else if (info1img) {
      info1img.style.display = "flex"
      img.src = "img/formacao.png"
      if (info2txt) info2txt.style.display = "block"
      typeWriterInfo('<span style="color: #19E428;">Formação</span><br>QI - Faculdade & Escola Técnica<br>Análise e Desenvolvimento de Sistemas<br>(cursando)')
    }
  })
  // --- Fim evento Formação ---

  // --- Funções para esconder modais com animação ---
  function esconderModalSkills() {
    if (modalSkills) {
      modalSkills.style.display = "none"
      modalSkills.classList.remove("animar-saida-direita")
      modalSkills.removeEventListener("animationend", esconderModalSkills)
    }
    skillsAberto = false
    tocarSom("audio/re2-cursor-cancel.mp3")
    limparItensAtivos()
  }

  function esconderModalGithub() {
    if (modalGithub) {
      modalGithub.style.display = "none"
      modalGithub.classList.remove("animar-saida-direita")
      modalGithub.removeEventListener("animationend", esconderModalGithub)
    }
    githubAberto = false
    tocarSom("audio/re2-cursor-cancel.mp3")
    limparItensAtivos()
  }

  function esconderModalLinkedin() {
    if (modalLinkedin) {
      modalLinkedin.style.display = "none"
      modalLinkedin.classList.remove("animar-saida-direita")
      modalLinkedin.removeEventListener("animationend", esconderModalLinkedin)
    }
    linkedinAberto = false
    tocarSom("audio/re2-cursor-cancel.mp3")
    limparItensAtivos()
  }
  // --- Fim esconder modais ---

  // --- Controle de debounce para Skills/Github/Linkedin ---
  let ultimoCliqueSkills = 0
  let ultimoCliqueGithub = 0
  let ultimoCliqueLinkedin = 0
  const intervaloClique = 300
  // --- Fim debounce ---

  // --- Evento Skills ---
  skills?.addEventListener("click", () => {
    const agora = Date.now()
    if (agora - ultimoCliqueSkills < intervaloClique) return
    ultimoCliqueSkills = agora

    if (info1img) info1img.style.display = "none"
    if (info2txt) info2txt.style.display = "none"
    if (carrossel) carrossel.style.display = "none"
    if (modalGithub) modalGithub.style.display = "none"
    if (modalLinkedin) modalLinkedin.style.display = "none"
    if (info1) info1.style.borderImage = "none"
    if (info1) info1.style.backgroundColor = "#07081F"
    if (info1Span) info1Span.style.display = "none"

    if (skillsAberto) {
      if (modalSkills) {
        modalSkills.classList.remove("animar-entrada")
        modalSkills.classList.add("animar-saida-direita")
        modalSkills.addEventListener("animationend", esconderModalSkills)
      }
    } else {
      limparItensAtivos()
      if (modalSkills) {
        modalSkills.style.display = "block"
        modalSkills.classList.remove("animar-saida-direita")
        modalSkills.classList.add("animar-entrada")
      }
      skillsAberto = true
      tocarSom("audio/re2-cursor-select.mp3")
    }
  })
  // --- Fim evento Skills ---

  // --- Evento Github ---
  github?.addEventListener("click", () => {
    const agora = Date.now()
    if (agora - ultimoCliqueGithub < intervaloClique) return
    ultimoCliqueGithub = agora

    if (info1img) info1img.style.display = "none"
    if (info2txt) info2txt.style.display = "none"
    if (carrossel) carrossel.style.display = "none"
    if (modalSkills) modalSkills.style.display = "none"
    if (modalLinkedin) modalLinkedin.style.display = "none"
    if (info1) info1.style.borderImage = "none"
    if (info1) info1.style.backgroundColor = "#07081F"
    if (info1Span) info1Span.style.display = "none"

    if (githubAberto) {
      if (modalGithub) {
        modalGithub.classList.remove("animar-entrada")
        modalGithub.classList.add("animar-saida-direita")
        modalGithub.addEventListener("animationend", esconderModalGithub)
      }
    } else {
      limparItensAtivos()
      if (modalGithub) {
        modalGithub.style.display = "block"
        modalGithub.classList.remove("animar-saida-direita")
        modalGithub.classList.add("animar-entrada")
      }
      githubAberto = true
      linkedinAberto = false
      skillsAberto = false
      tocarSom("audio/re2-cursor-select.mp3")
    }
  })
  // --- Fim evento Github ---

  // --- Evento Linkedin ---
  linkedin?.addEventListener("click", () => {
    const agora = Date.now()
    if (agora - ultimoCliqueLinkedin < intervaloClique) return
    ultimoCliqueLinkedin = agora

    if (info1img) info1img.style.display = "none"
    if (info2txt) info2txt.style.display = "none"
    if (carrossel) carrossel.style.display = "none"
    if (modalSkills) modalSkills.style.display = "none"
    if (modalGithub) modalGithub.style.display = "none"
    if (info1) info1.style.borderImage = "none"
    if (info1) info1.style.backgroundColor = "#07081F"
    if (info1Span) info1Span.style.display = "none"

    if (linkedinAberto) {
      if (modalLinkedin) {
        modalLinkedin.classList.remove("animar-entrada")
        modalLinkedin.classList.add("animar-saida-direita")
        modalLinkedin.addEventListener("animationend", esconderModalLinkedin)
      }
    } else {
      limparItensAtivos()
      if (modalLinkedin) {
        modalLinkedin.style.display = "block"
        modalLinkedin.classList.remove("animar-saida-direita")
        modalLinkedin.classList.add("animar-entrada")
      }
      linkedinAberto = true
      githubAberto = false
      skillsAberto = false
      tocarSom("audio/re2-cursor-select.mp3")
    }
  })
  // --- Fim evento Linkedin ---

  // --- Eventos Skills Níveis (N1, N2, N3) ---
  modalSkillsN1?.addEventListener("click", () => {
    if (info2txt) info2txt.style.display = "block"
    typeWriterInfo('<span style="color: #19E428;">HTML5/CSS3</span><br>Curso em Vídeo - 40h<br>Origamid - 23h')
  })

  modalSkillsN2?.addEventListener("click", () => {
    if (info2txt) info2txt.style.display = "block"
    typeWriterInfo('<span style="color: #19E428;">Algoritmos</span><br>Curso em Vídeo - 40h')
  })

  modalSkillsN3?.addEventListener("click", () => {
    if (info2txt) info2txt.style.display = "block"
    typeWriterInfo('<span style="color: #19E428;">JavaScript</span><br>Curso em Vídeo - 40h<br>Origamid - 37h')
  })
  // --- Fim eventos Skills Níveis ---

  // --- Evento Examinar Github/Linkedin ---
  examinarGithub?.addEventListener("click", () => {
    tocarSom("audio/re2-cursor-select.mp3")
    if (modalGithub) modalGithub.style.display = "none"
    githubAberto = false
    if (carrossel) carrossel.style.display = "none"
    if (modalSkills) modalSkills.style.display = "none"
    if (modalLinkedin) modalLinkedin.style.display = "none"
    skillsAberto = false
    linkedinAberto = false
    if (info1) info1.style.borderImage = originalBorderImage
    if (info1) info1.style.backgroundColor = originalBackgroundColor
    if (info1Span) info1Span.style.display = "block"
    if (info1img && info1img.style.display === "flex" && img.src.includes("github.png")) {
      info1img.style.display = "none"
      if (info2txt) info2txt.style.display = "none"
    } else if (info1img) {
      info1img.style.display = "flex"
      img.src = "img/github.png"
      if (info2txt) info2txt.style.display = "block"
      typeWriterInfo('<span style="color: #19E428;">GitHub</span> é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.')
    }
  })

  examinarLinkedin?.addEventListener("click", () => {
    tocarSom("audio/re2-cursor-select.mp3")
    if (modalLinkedin) modalLinkedin.style.display = "none"
    linkedinAberto = false
    if (carrossel) carrossel.style.display = "none"
    if (modalSkills) modalSkills.style.display = "none"
    if (modalGithub) modalGithub.style.display = "none"
    skillsAberto = false
    githubAberto = false
    if (info1) info1.style.borderImage = originalBorderImage
    if (info1) info1.style.backgroundColor = originalBackgroundColor
    if (info1Span) info1Span.style.display = "block"
    if (info1img && info1img.style.display === "flex" && img.src.includes("linkedin.png")) {
      info1img.style.display = "none"
      if (info2txt) info2txt.style.display = "none"
    } else if (info1img) {
      info1img.style.display = "flex"
      img.src = "img/linkedin.png"
      if (info2txt) info2txt.style.display = "block"
      typeWriterInfo('<span style="color: #19E428;">LinkedIn</span> é uma plataforma de mídia social focada em negócios e emprego que funciona através de sites e aplicativos móveis.')
    }
  })
  // --- Fim Evento Examinar ---

  // --- Clique fora dos modais fecha tudo e limpa ativos ---
  document.addEventListener("click", (e) => {
    const clicouFora = !e.target.closest('.modal-skills, .modal-github, .modal-linkedin, .info-1, .whatsapp, .gmail, .skills, .github, .linkedin, .formacao, .examinar-github, .examinar-linkedin, #info2txt')
    if (clicouFora) {
      if (info2txt) info2txt.style.display = "none"
      if (modalSkills) modalSkills.style.display = "none"
      if (modalGithub) modalGithub.style.display = "none"
      if (modalLinkedin) modalLinkedin.style.display = "none"
      if (info1img) info1img.style.display = "none"
      skillsAberto = false
      githubAberto = false
      linkedinAberto = false
      limparItensAtivos()
    }
    if (clicouFora) {
      document.querySelectorAll('.modal-skills li, .modal-github li, .modal-linkedin li').forEach(li => {
        li.classList.remove('ativo')
      })
    }
  })
  // --- Fim clique fora ---

  // --- Sons de Hover nos botões principais ---
  adicionarSomHover(skills, "audio/re2-cursor-move.mp3")
  adicionarSomHover(formacao, "audio/re2-cursor-move.mp3")
  adicionarSomHover(github, "audio/re2-cursor-move.mp3")
  adicionarSomHover(linkedin, "audio/re2-cursor-move.mp3")
  adicionarSomHover(whatsapp, "audio/re2-cursor-move.mp3")
  adicionarSomHover(gmail, "audio/re2-cursor-move.mp3")
  // --- Fim Sons de Hover ---

  // --- Evento de clique no menu NAV ---
  document.querySelectorAll("nav ul li:not(.sem-som-global)").forEach(li => {
    adicionarSomHover(li, "audio/re2-cursor-move.mp3")
    li.addEventListener("click", (e) => {
      document.querySelectorAll("nav li").forEach(el => el.classList.remove("ativo"))
      li.classList.add("ativo")
      tocarSom("audio/re2-cursor-select.mp3")
      if (li.id === "projetos") {
        if (info1img) info1img.style.display = "none"
        if (info2txt) info2txt.style.display = "none"
        if (modalSkills) modalSkills.style.display = "none"
        if (modalGithub) modalGithub.style.display = "none"
        if (modalLinkedin) modalLinkedin.style.display = "none"
        limparItensAtivos()
        const isVisible = carrossel && carrossel.style.display === "block"
        if (carrossel) {
          if (isVisible) {
            carrossel.style.display = "none"
            if (info1) info1.style.backgroundColor = '#0A2018'
          } else {
            carrossel.style.display = "block"
            if (info1) info1.style.display = "flex"
            if (info1Span) info1Span.style.display = "block"
            if (info1) info1.style.borderImage = originalBorderImage
            if (info1) info1.style.backgroundColor = '#07081F'
          }
        }
      }
    })
  })
  // --- Fim evento clique nav ---

  // --- Clique fora do nav e das setas do carrossel remove ativo do menu ---
  document.addEventListener("click", (e) => {
    const isNav = e.target.closest("nav")
    const isCarouselControl = e.target.closest(".carousel-control")
    if (!isNav && !isCarouselControl) {
      document.querySelectorAll("nav li").forEach(el => el.classList.remove("ativo"))
    }
  })
  // --- Fim clique fora nav/carrossel ---

  // --- Evento dos itens dos modais para adicionar "ativo" e som ---
  document.querySelectorAll(".modal-skills li, .modal-github li, .modal-linkedin li").forEach(li => {
    adicionarSomHover(li, "audio/re2-cursor-move.mp3")
    li.addEventListener("click", () => {
      li.parentElement.querySelectorAll('li').forEach(item => {
        item.classList.remove('ativo')
      })
      li.classList.add('ativo')
      if (
        !li.classList.contains("examinar-github") &&
        !li.classList.contains("examinar-linkedin")
      ) {
        tocarSom("audio/re2-cursor-select.mp3")
      }
    })
  })
  // --- Fim evento itens dos modais ---

  // --- Inicialização do carrossel se necessário ---
  if (carrossel && !carrossel.querySelector('.carousel-container')) {
    const novoCarousel = new Carousel(carrossel)
    novoCarousel.mounted()
  }
  // --- Fim inicialização carrossel ---
}
// --- Fim reinicializarScripts ---

// --- Função para adicionar som ao passar mouse (hover) ---
function adicionarSomHover(elemento, caminhoAudio) {
  if (elemento) {
    elemento.removeEventListener("mouseenter", elemento._mouseenterHandler || (()=>{}))
    const handler = () => {
      const audio = new Audio(caminhoAudio)
      audio.volume = 0.5
      audio.play().catch(() => {})
    }
    elemento.addEventListener("mouseenter", handler)
    elemento._mouseenterHandler = handler
  }
}
// --- Fim função som hover ---

// --- Função para tocar som de clique ou ação ---
function tocarSom(caminhoAudio) {
  const audio = new Audio(caminhoAudio)
  audio.volume = 0.6
  audio.play().catch(() => {})
}
// --- Fim função tocarSom ---

// --- Função para ativar eventos de navegação dinâmica ---
function ativarEventos() {
  const linkCertificados = document.getElementById('n4')
  if (linkCertificados) {
    linkCertificados.addEventListener('click', e => {
      e.preventDefault()
      carregarPagina('certificados.html')
    })
  }

  const linkSobre = document.getElementById('link-sobre')
  if (linkSobre) {
    linkSobre.addEventListener('click', e => {
      e.preventDefault()
      carregarPagina('sobre.html')
    })
  }

  const linkVoltar = document.getElementById('voltar-index')
  if (linkVoltar) {
    linkVoltar.addEventListener('click', e => {
      e.preventDefault()
      tocarSom("audio/re2-cursor-cancel.mp3")
      principalDiv.innerHTML = conteudoOriginal
      principalDiv.style.padding = originalPadding
      ativarEventos()
      reinicializarScripts()
    })
  }
}
// --- Fim função ativarEventos ---

// --- Função para carregar páginas dinâmicas ---
function carregarPagina(url) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Erro ao carregar ${url}`)
      return res.text()
    })
    .then(html => {
      principalDiv.innerHTML = html
      if (url === 'sobre.html' || url === 'certificados.html') {
        principalDiv.style.padding = '0'
      } else {
        reinicializarScripts()
      }
      if (url === 'sobre.html') {
        inicializarNavegacaoTextoSobre()
      }
      ativarEventos()
    })
    .catch(err => {
      console.error(err)
      alert('Erro ao carregar a página')
    })
}
// --- Fim função carregarPagina ---

// --- Classe do Carrossel de projetos ---
class Carousel {
  constructor(el) {
    this.el = el
    this.carouselOptions = ["previous", "next"]
    this.carouselData = [
      { id: "1", src: "img/capa-files2.jpg", title: "Portfólio Pessoal - HTML/CSS/JavaScript", link: "https://julianovreis.github.io/portfolio/" },
      { id: "2", src: "img/capa-files3.jpg", title: "Bikcraft - HTML/CSS/JavaScript", link: "https://projetositebikcraft.netlify.app/" },
      { id: "3", src: "img/capa-files4.jpg", title: "Animais Fantásticos - HTML/CSS/JavaScript", link: "https://projetoanimaisfantasticos.netlify.app/" },
      { id: "4", src: "img/capa-files5.jpg", title: "Pokédex - HTML/CSS/JavaScript", link: "https://julianovreis.github.io/pokedex/" },
      { id: "5", src: "img/capa-files6.jpg", title: "Projeto Portfólio - HTML/CSS", link: "https://julianovreis.github.io/projeto-portfolio/" },
    ]
    this.carouselInView = [1, 2, 3, 4, 5]
    this.carouselContainer = null
  }

  mounted() {
    this.setupCarousel()
  }

  setupCarousel() {
    const container = document.createElement("div")
    const controls = document.createElement("div")
    this.el.append(container, controls)
    container.className = "carousel-container"
    controls.className = "carousel-controls"

    this.carouselData.forEach((item, index) => {
      const wrapper = document.createElement("div")
      const img = document.createElement("img")
      const caption = document.createElement("div")
      wrapper.className = `carousel-item carousel-item-${index + 1}`
      img.src = item.src
      img.setAttribute("loading", "lazy")
      img.setAttribute("data-index", `${index + 1}`)
      caption.className = "carousel-caption"
      caption.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`
      wrapper.appendChild(img)
      wrapper.appendChild(caption)
      container.appendChild(wrapper)
    })

    this.carouselOptions.forEach(option => {
      const btn = document.createElement("button")
      const span = document.createElement("span")
      span.innerText = option
      span.className = "ax-hidden"
      btn.appendChild(span)
      btn.className = `carousel-control carousel-control-${option}`
      btn.setAttribute("data-name", option)
      controls.appendChild(btn)
    })

    this.setControls([...controls.children])
    this.carouselContainer = container
  }

  setControls(controls) {
    controls.forEach(control => {
      control.onclick = (event) => {
        event.preventDefault()
        tocarSom("audio/re2-select-carrossel.WAV")
        this.controlManager(control.dataset.name)
      }
    })
  }

  controlManager(control) {
    if (control === "previous") return this.previous()
    if (control === "next") return this.next()
  }

  previous() {
    this.carouselData.unshift(this.carouselData.pop())
    this.carouselInView.push(this.carouselInView.shift())
    this.updateCarouselItems()
  }

  next() {
    this.carouselData.push(this.carouselData.shift())
    this.carouselInView.unshift(this.carouselInView.pop())
    this.updateCarouselItems()
  }

  updateCarouselItems() {
    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`
    })
    this.carouselData.slice(0, 5).forEach((data, index) => {
      const wrapper = this.carouselContainer.children[index]
      wrapper.querySelector("img").src = data.src
      wrapper.querySelector(".carousel-caption").innerHTML = `<a href="${data.link}" target="_blank">${data.title}</a>`
    })
  }
}
// --- Fim classe Carousel ---

// --- Evento DOMContentLoaded: ativa scripts no carregamento ---
window.addEventListener("DOMContentLoaded", () => {
  ativarEventos()
  reinicializarScripts()
  const somFundo = document.getElementById("musica-fundo")
  if (somFundo) {
    somFundo.volume = 0.3
    somFundo.play().catch(() => {
      document.addEventListener("click", () => {
        somFundo.play()
      }, { once: true })
    })
  }
})
// --- Fim evento DOMContentLoaded ---

// --- Função navegação dinâmica do texto sobre ---
function inicializarNavegacaoTextoSobre() {
  const paragrafos = document.querySelectorAll('.texto-sobre')
  const titulo = document.getElementById('titulo-sobre')
  const setaEsquerda = document.getElementById('seta-esquerda')
  const setaDireita = document.getElementById('seta-direita')
  let indiceAtual = 0

  function mostrarParagrafo(novoIndice) {
    if (novoIndice < 0 || novoIndice >= paragrafos.length || novoIndice === indiceAtual) return
    const atual = paragrafos[indiceAtual]
    const proximo = paragrafos[novoIndice]
    atual.classList.remove('ativo')
    atual.classList.add(novoIndice > indiceAtual ? 'saindo-esquerda' : 'saindo-direita')
    proximo.classList.add('ativo')
    setTimeout(() => {
      atual.classList.remove('saindo-esquerda', 'saindo-direita')
    }, 500)
    titulo.style.display = novoIndice === 0 ? 'block' : 'none'
    indiceAtual = novoIndice
    setaEsquerda.style.display = indiceAtual === 0 ? 'none' : 'block'
    setaDireita.style.display = indiceAtual === paragrafos.length - 1 ? 'none' : 'block'
  }

  setaEsquerda.addEventListener('click', (e) => {
    e.stopPropagation()
    tocarSom("audio/re2-book-page-turn.mp3")
    mostrarParagrafo(indiceAtual - 1)
  })

  setaDireita.addEventListener('click', (e) => {
    e.stopPropagation()
    tocarSom("audio/re2-book-page-turn.mp3")
    mostrarParagrafo(indiceAtual + 1)
  })

  titulo.style.display = 'block'
  setaEsquerda.style.display = 'none'
  setaDireita.style.display = paragrafos.length > 1 ? 'block' : 'none'
}
// --- Fim navegação texto sobre ---