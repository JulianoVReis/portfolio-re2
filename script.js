// inicio da animacao de clique do inventario
let whatsapp, gmail, skills, modalSkills, modalSkillsN1, modalSkillsN2, modalSkillsN3;
let info1img, info1, info1Span, info2txt, carrossel, projetos;
let img;
let originalBorderImage, originalBackgroundColor;
let typeitInstance = null;
let github, linkedin, modalGithub, modalLinkedin;
let formacao;
let examinarGithub, examinarLinkedin;

const principalDiv = document.querySelector('.principal');
const conteudoOriginal = principalDiv.innerHTML;
let originalPadding = getComputedStyle(principalDiv).padding;

function typeWriterInfo(texto) {
  if (typeitInstance) {
    typeitInstance.destroy();
    info2txt.innerHTML = "";
  }

  typeitInstance = new TypeIt("#info2txt", {
    strings: texto,
    speed: 50,
    loop: false,
    waitUntilVisible: true,
    cursor: false,
  }).go();
}

function reinicializarScripts() {
  whatsapp = document.querySelector(".whatsapp");
  gmail = document.querySelector(".gmail");
  skills = document.querySelector(".skills");
  modalSkills = document.querySelector(".modal-skills");
  modalSkillsN1 = document.querySelector(".modal-skills .n1");
  modalSkillsN2 = document.querySelector(".modal-skills .n2");
  modalSkillsN3 = document.querySelector(".modal-skills .n3");
  info1img = document.querySelector(".info-1-img");
  info1 = document.querySelector(".info-1");
  info1Span = document.querySelector(".info-1 span");
  info2txt = document.querySelector("#info2txt");
  carrossel = document.querySelector(".carousel");
  projetos = document.querySelector("#projetos");
  github = document.querySelector(".github");
  linkedin = document.querySelector(".linkedin");
  modalGithub = document.querySelector(".modal-github");
  modalLinkedin = document.querySelector(".modal-linkedin");
  formacao = document.querySelector(".formacao");
  examinarGithub = document.querySelector(".examinar-github");
  examinarLinkedin = document.querySelector(".examinar-linkedin");

  img = document.createElement("img");
  info1img.appendChild(img);

  const info1Styles = getComputedStyle(info1);
  originalBorderImage = info1Styles.borderImage;
  originalBackgroundColor = info1Styles.backgroundColor;

  let skillsAberto = false;
  let githubAberto = false;
  let linkedinAberto = false;

  whatsapp?.addEventListener("click", () => {
    tocarSom("audio/re2-cursor-select.mp3");
    carrossel.style.display = "none";
    modalSkills.style.display = "none";
    modalGithub.style.display = "none";
    modalLinkedin.style.display = "none";
    skillsAberto = false;
    githubAberto = false;
    linkedinAberto = false;
    info1.style.borderImage = originalBorderImage;
    info1.style.backgroundColor = originalBackgroundColor;
    info1Span.style.display = "block";
    if (info1img.style.display === "flex" && img.src.includes("whatsapp.png")) {
      info1img.style.display = "none";
      info2txt.style.display = "none";
    } else {
      info1img.style.display = "flex";
      img.src = "img/whatsapp.png";
      info2txt.style.display = "block";
      typeWriterInfo('<span style="color: #19E428;">WhatsApp</span><br>(51) 989199543');
    }
  });

  gmail?.addEventListener("click", () => {
    tocarSom("audio/re2-cursor-select.mp3");
    carrossel.style.display = "none";
    modalSkills.style.display = "none";
    modalGithub.style.display = "none";
    modalLinkedin.style.display = "none";
    skillsAberto = false;
    githubAberto = false;
    linkedinAberto = false;
    info1.style.borderImage = originalBorderImage;
    info1.style.backgroundColor = originalBackgroundColor;
    info1Span.style.display = "block";
    if (info1img.style.display === "flex" && img.src.includes("gmail.webp")) {
      info1img.style.display = "none";
      info2txt.style.display = "none";
    } else {
      info1img.style.display = "flex";
      img.src = "img/gmail.png";
      info2txt.style.display = "block";
      typeWriterInfo('<span style="color: #19E428;">Gmail</span><br>julianovreis@gmail.com');
    }
  });

  formacao?.addEventListener("click", () => {
    tocarSom("audio/re2-cursor-select.mp3");
    carrossel.style.display = "none";
    modalSkills.style.display = "none";
    modalGithub.style.display = "none";
    modalLinkedin.style.display = "none";
    skillsAberto = false;
    githubAberto = false;
    linkedinAberto = false;
    info1.style.borderImage = originalBorderImage;
    info1.style.backgroundColor = originalBackgroundColor;
    info1Span.style.display = "block";
    if (info1img.style.display === "flex" && img.src.includes("formacao.png")) {
      info1img.style.display = "none";
      info2txt.style.display = "none";
    } else {
      info1img.style.display = "flex";
      img.src = "img/formacao.png";
      info2txt.style.display = "block";
      typeWriterInfo('<span style="color: #19E428;">Formação</span><br>QI - Faculdade & Escola Técnica<br>(cursando)');
    }
  });

  skills?.addEventListener("click", () => {
    info1img.style.display = "none";
    info2txt.style.display = "none";
    carrossel.style.display = "none";
    modalGithub.style.display = "none";
    modalLinkedin.style.display = "none";
    info1.style.borderImage = "none";
    info1.style.backgroundColor = "#07081F";
    info1Span.style.display = "none";

    if (skillsAberto) {
      modalSkills.classList.remove("animar-entrada");
      modalSkills.classList.add("animar-saida-direita");
      modalSkills.addEventListener("animationend", function esconder() {
        modalSkills.style.display = "none";
        modalSkills.classList.remove("animar-saida-direita");
        modalSkills.removeEventListener("animationend", esconder);
        skillsAberto = false;
        tocarSom("audio/re2-cursor-cancel.mp3");
      });
    } else {
      modalSkills.style.display = "block";
      modalSkills.classList.remove("animar-saida-direita");
      modalSkills.classList.add("animar-entrada");
      skillsAberto = true;
      tocarSom("audio/re2-cursor-select.mp3");
    }
  });

  github?.addEventListener("click", () => {
    info1img.style.display = "none";
    info2txt.style.display = "none";
    carrossel.style.display = "none";
    modalSkills.style.display = "none";
    modalLinkedin.style.display = "none";
    info1.style.borderImage = "none";
    info1.style.backgroundColor = "#07081F";
    info1Span.style.display = "none";

    if (githubAberto) {
      modalGithub.classList.remove("animar-entrada");
      modalGithub.classList.add("animar-saida-direita");
      modalGithub.addEventListener("animationend", function esconder() {
        modalGithub.style.display = "none";
        modalGithub.classList.remove("animar-saida-direita");
        modalGithub.removeEventListener("animationend", esconder);
        githubAberto = false;
        tocarSom("audio/re2-cursor-cancel.mp3");
      });
    } else {
      modalGithub.style.display = "block";
      modalGithub.classList.remove("animar-saida-direita");
      modalGithub.classList.add("animar-entrada");
      githubAberto = true;
      linkedinAberto = false;
      skillsAberto = false;
      tocarSom("audio/re2-cursor-select.mp3");
    }
  });

  linkedin?.addEventListener("click", () => {
    info1img.style.display = "none";
    info2txt.style.display = "none";
    carrossel.style.display = "none";
    modalSkills.style.display = "none";
    modalGithub.style.display = "none";
    info1.style.borderImage = "none";
    info1.style.backgroundColor = "#07081F";
    info1Span.style.display = "none";

    if (linkedinAberto) {
      modalLinkedin.classList.remove("animar-entrada");
      modalLinkedin.classList.add("animar-saida-direita");
      modalLinkedin.addEventListener("animationend", function esconder() {
        modalLinkedin.style.display = "none";
        modalLinkedin.classList.remove("animar-saida-direita");
        modalLinkedin.removeEventListener("animationend", esconder);
        linkedinAberto = false;
        tocarSom("audio/re2-cursor-cancel.mp3");
      });
    } else {
      modalLinkedin.style.display = "block";
      modalLinkedin.classList.remove("animar-saida-direita");
      modalLinkedin.classList.add("animar-entrada");
      linkedinAberto = true;
      githubAberto = false;
      skillsAberto = false;
      tocarSom("audio/re2-cursor-select.mp3");
    }
  });

  modalSkillsN1?.addEventListener("click", () => {
    info2txt.style.display = "block";
    typeWriterInfo('<span style="color: #19E428;">HTML5/CSS3</span><br>Curso em Vídeo - 40h<br>Origamid - 23h');
  });

  modalSkillsN2?.addEventListener("click", () => {
    info2txt.style.display = "block";
    typeWriterInfo('<span style="color: #19E428;">Algoritmos</span><br>Curso em Vídeo - 40h');
  });

  modalSkillsN3?.addEventListener("click", () => {
    info2txt.style.display = "block";
    typeWriterInfo('<span style="color: #19E428;">JavaScript</span><br>Curso em Vídeo - 40h<br>Origamid - 37h');
  });

  projetos?.addEventListener("click", () => {
		tocarSom("audio/re2-cursor-select.mp3");
    info1img.style.display = "none";
    info2txt.style.display = "none";
    modalSkills.style.display = "none";
    modalGithub.style.display = "none";
    modalLinkedin.style.display = "none";

    const isVisible = carrossel.style.display === "block";
    if (isVisible) {
      carrossel.style.display = "none";
      info1.style.backgroundColor = '#0A2018';
    } else {
      carrossel.style.display = "block";
      info1.style.display = "flex";
      info1Span.style.display = "block";
      info1.style.borderImage = originalBorderImage;
      info1.style.backgroundColor = '#07081F';
    }
  });

	const projetosBtn = document.querySelector("#projetos");
if (projetosBtn) {
  projetosBtn.addEventListener("click", () => {
    // Remove 'ativo' de todos os links do nav
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("ativo"));
    
    // Remove 'ativo' do botão projetos (caso esteja)
    projetosBtn.classList.remove("ativo");

    // Adiciona 'ativo' ao botão projetos
    projetosBtn.classList.add("ativo");
  });
}


  examinarGithub?.addEventListener("click", () => {
    tocarSom("audio/re2-cursor-select.mp3");
    modalGithub.style.display = "none";
    githubAberto = false;
    carrossel.style.display = "none";
    modalSkills.style.display = "none";
    modalLinkedin.style.display = "none";
    skillsAberto = false;
    linkedinAberto = false;
    info1.style.borderImage = originalBorderImage;
    info1.style.backgroundColor = originalBackgroundColor;
    info1Span.style.display = "block";
    if (info1img.style.display === "flex" && img.src.includes("github.png")) {
      info1img.style.display = "none";
      info2txt.style.display = "none";
    } else {
      info1img.style.display = "flex";
      img.src = "img/github.png";
      info2txt.style.display = "block";
      typeWriterInfo('<span style="color: #19E428;">GitHub</span> é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.');
    }
  });

  examinarLinkedin?.addEventListener("click", () => {
    tocarSom("audio/re2-cursor-select.mp3");
    modalLinkedin.style.display = "none";
    linkedinAberto = false;
    carrossel.style.display = "none";
    modalSkills.style.display = "none";
    modalGithub.style.display = "none";
    skillsAberto = false;
    githubAberto = false;
    info1.style.borderImage = originalBorderImage;
    info1.style.backgroundColor = originalBackgroundColor;
    info1Span.style.display = "block";
    if (info1img.style.display === "flex" && img.src.includes("linkedin.png")) {
      info1img.style.display = "none";
      info2txt.style.display = "none";
    } else {
      info1img.style.display = "flex";
      img.src = "img/linkedin.png";
      info2txt.style.display = "block";
      typeWriterInfo('<span style="color: #19E428;">LinkedIn</span> é uma plataforma de mídia social focada em negócios e emprego que funciona através de sites e aplicativos móveis.');
    }
  });

  document.addEventListener("click", (e) => {
    const ignorarClique = [
      info2txt, modalSkillsN1, modalSkillsN2, modalSkillsN3,
      whatsapp, gmail, skills, github, linkedin, formacao,
      examinarGithub, examinarLinkedin
    ];

		if (!ignorarClique.some(el => el && el.contains(e.target))) {
    // Remove a classe 'ativo' de todos os itens ao clicar fora
    document.querySelectorAll('.modal-skills li, .modal-github li, .modal-linkedin li').forEach(li => {
      li.classList.remove('ativo');
    });
  }

    if (!ignorarClique.some(el => el && el.contains(e.target))) {
      info2txt.style.display = "none";
      modalSkills.style.display = "none";
      modalGithub.style.display = "none";
      modalLinkedin.style.display = "none";
      info1img.style.display = "none";
      skillsAberto = false;
      githubAberto = false;
      linkedinAberto = false;
    }
  });

  // Sons de hover e clique dos elementos
  adicionarSomHover(skills, "audio/re2-cursor-move.mp3");
  adicionarSomHover(formacao, "audio/re2-cursor-move.mp3");
  adicionarSomHover(github, "audio/re2-cursor-move.mp3");
  adicionarSomHover(linkedin, "audio/re2-cursor-move.mp3");
  adicionarSomHover(whatsapp, "audio/re2-cursor-move.mp3");
  adicionarSomHover(gmail, "audio/re2-cursor-move.mp3");
	adicionarSomHover(projetos, "audio/re2-cursor-move.mp3");

  document.querySelectorAll("nav ul li:not(.sem-som-global)").forEach(li => {
  const link = li.querySelector("a");
  if (!link) return;

  adicionarSomHover(li, "audio/re2-cursor-move.mp3");

  li.addEventListener("click", () => {
    tocarSom("audio/re2-cursor-select.mp3");

    // Remove classe 'ativo' de todos os links
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("ativo"));

    // Adiciona no link clicado
    link.classList.add("ativo");
  });
});


  document.querySelectorAll(".modal-skills li, .modal-github li, .modal-linkedin li").forEach(li => {
  adicionarSomHover(li, "audio/re2-cursor-move.mp3");
  li.addEventListener("click", () => {
    // Remove a classe 'ativo' de todos os itens do mesmo modal
    li.parentElement.querySelectorAll('li').forEach(item => {
      item.classList.remove('ativo');
    });
    // Adiciona a classe 'ativo' apenas no item clicado
    li.classList.add('ativo');
    tocarSom("audio/re2-cursor-select.mp3");
  });
});

  // Verifica se precisa montar o carrossel
  if (carrossel && carrossel.children.length === 0) {
    const novoCarousel = new Carousel(carrossel);
    novoCarousel.mounted();
  }
}


function adicionarSomHover(elemento, caminhoAudio) {
  if (elemento) {
    elemento.addEventListener("mouseenter", () => {
      const audio = new Audio(caminhoAudio);
      audio.volume = 0.5; // ajuste o volume se quiser
      audio.play().catch(() => {});
    });
  }
}

function tocarSom(caminhoAudio) {
  const audio = new Audio(caminhoAudio);
  audio.volume = 0.6; // ou ajuste como preferir
  audio.play().catch(() => {});
}

		// Adicionar som ao clicar nas lis dos modais
const modalItems = document.querySelectorAll(
  ".modal-skills li, .modal-github li, .modal-linkedin li"
);

modalItems.forEach(li => {
  li.addEventListener("click", () => {
    tocarSom("audio/re2-cursor-select.mp3");
  });
});

function ativarEventos() {
	const linkCertificados = document.getElementById('n4');
if (linkCertificados) {
  linkCertificados.addEventListener('click', e => {
    e.preventDefault();// ← SOM AO CLICAR
    carregarPagina('certificados.html');
  });
}


  const linkSobre = document.getElementById('link-sobre');
  if (linkSobre) {
    linkSobre.addEventListener('click', e => {
      e.preventDefault();
      carregarPagina('sobre.html');
    });
  }

  const linkVoltar = document.getElementById('voltar-index');
  if (linkVoltar) {
    linkVoltar.addEventListener('click', e => {
      e.preventDefault();
			tocarSom("audio/re2-cursor-cancel.mp3");
      principalDiv.innerHTML = conteudoOriginal;
      principalDiv.style.padding = originalPadding;
      ativarEventos();
      reinicializarScripts();
    });
  }
}

function carregarPagina(url) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Erro ao carregar ${url}`);
      return res.text();
    })
    .then(html => {
      principalDiv.innerHTML = html;

      if (url === 'sobre.html' || url === 'certificados.html') {
        principalDiv.style.padding = '0';
      }

      if (url === 'sobre.html') {
        inicializarNavegacaoTextoSobre();
      }

      ativarEventos();
    })
    .catch(err => {
      console.error(err);
      alert('Erro ao carregar a página');
    });

}


// Classe Carousel incluída aqui para unificar o script
class Carousel {
  constructor(el) {
    this.el = el;
    this.carouselOptions = ["previous", "next"];
    this.carouselData = [
      { id: "1", src: "img/capa-files2.jpg", title: "Portfólio Pessoal - HTML/CSS/JavaScript", link: "https://julianovreis.github.io/portfolio/" },
      { id: "2", src: "img/capa-files3.jpg", title: "Bikcraft - HTML/CSS/JavaScript", link: "https://projetositebikcraft.netlify.app/" },
      { id: "3", src: "img/capa-files4.jpg", title: "Animais Fantásticos - HTML/CSS/JavaScript", link: "https://projetoanimaisfantasticos.netlify.app/" },
      { id: "4", src: "img/capa-files5.jpg", title: "Pokédex - HTML/CSS/JavaScript", link: "https://julianovreis.github.io/pokedex/" },
      { id: "5", src: "img/capa-files6.jpg", title: "Projeto Portfólio - HTML/CSS", link: "https://julianovreis.github.io/projeto-portfolio/" },
    ];
    this.carouselInView = [1, 2, 3, 4, 5];
    this.carouselContainer = null;
  }

  mounted() {
    this.setupCarousel();
  }

  setupCarousel() {
    const container = document.createElement("div");
    const controls = document.createElement("div");

    this.el.append(container, controls);
    container.className = "carousel-container";
    controls.className = "carousel-controls";

    this.carouselData.forEach((item, index) => {
      const wrapper = document.createElement("div");
      const img = document.createElement("img");
      const caption = document.createElement("div");

      wrapper.className = `carousel-item carousel-item-${index + 1}`;
      img.src = item.src;
      img.setAttribute("loading", "lazy");
      img.setAttribute("data-index", `${index + 1}`);

      caption.className = "carousel-caption";
      caption.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;

      wrapper.appendChild(img);
      wrapper.appendChild(caption);
      container.appendChild(wrapper);
    });

    this.carouselOptions.forEach(option => {
      const btn = document.createElement("button");
      const span = document.createElement("span");
      span.innerText = option;
      span.className = "ax-hidden";
      btn.appendChild(span);
      btn.className = `carousel-control carousel-control-${option}`;
      btn.setAttribute("data-name", option);
      controls.appendChild(btn);
    });

    this.setControls([...controls.children]);
    this.carouselContainer = container;
  }

  setControls(controls) {
    controls.forEach(control => {
      control.onclick = (event) => {
        event.preventDefault();
				tocarSom("audio/re2-select-carrossel.WAV");
        this.controlManager(control.dataset.name);
      };
    });
  }

  controlManager(control) {
    if (control === "previous") return this.previous();
    if (control === "next") return this.next();
  }

  previous() {
    this.carouselData.unshift(this.carouselData.pop());
    this.carouselInView.push(this.carouselInView.shift());
    this.updateCarouselItems();
  }

  next() {
    this.carouselData.push(this.carouselData.shift());
    this.carouselInView.unshift(this.carouselInView.pop());
    this.updateCarouselItems();
  }

  updateCarouselItems() {
    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`;
    });

    this.carouselData.slice(0, 5).forEach((data, index) => {
      const wrapper = this.carouselContainer.children[index];
      wrapper.querySelector("img").src = data.src;
      wrapper.querySelector(".carousel-caption").innerHTML = `<a href="${data.link}" target="_blank">${data.title}</a>`;
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  ativarEventos();
  reinicializarScripts();
	  // Som de fundo em loop
  const somFundo = new Audio("audio/som-fundo.mp3"); // ajuste o caminho se necessário
  somFundo.loop = true;
  somFundo.volume = 0.3;

  // Tenta tocar automaticamente
  somFundo.play().catch(() => {
    // Se o navegador bloquear, toca no primeiro clique do usuário
    document.addEventListener("click", () => {
      somFundo.play();
    }, { once: true });
  });

  const el = document.querySelector(".carousel");
  if (el && el.children.length === 0) {
    const exampleCarousel = new Carousel(el);
    exampleCarousel.mounted();
  }
});

function inicializarNavegacaoTextoSobre() {
  const paragrafos = document.querySelectorAll('.texto-sobre');
  const titulo = document.getElementById('titulo-sobre');
  const setaEsquerda = document.getElementById('seta-esquerda');
  const setaDireita = document.getElementById('seta-direita');

  let indiceAtual = 0;

  function mostrarParagrafo(novoIndice) {
    if (novoIndice < 0 || novoIndice >= paragrafos.length || novoIndice === indiceAtual) return;

    const atual = paragrafos[indiceAtual];
    const proximo = paragrafos[novoIndice];

    atual.classList.remove('ativo');
    atual.classList.add(novoIndice > indiceAtual ? 'saindo-esquerda' : 'saindo-direita');
    proximo.classList.add('ativo');

    setTimeout(() => {
      atual.classList.remove('saindo-esquerda', 'saindo-direita');
    }, 500);

    titulo.style.display = novoIndice === 0 ? 'block' : 'none';
    indiceAtual = novoIndice;

    setaEsquerda.style.display = indiceAtual === 0 ? 'none' : 'block';
    setaDireita.style.display = indiceAtual === paragrafos.length - 1 ? 'none' : 'block';
  }

  setaEsquerda.addEventListener('click', (e) => {
    e.stopPropagation();
		tocarSom("audio/re2-book-page-turn.mp3");
    mostrarParagrafo(indiceAtual - 1);
  });

  setaDireita.addEventListener('click', (e) => {
    e.stopPropagation();
		tocarSom("audio/re2-book-page-turn.mp3");
    mostrarParagrafo(indiceAtual + 1);
  });

  titulo.style.display = 'block';
  setaEsquerda.style.display = 'none';
  setaDireita.style.display = paragrafos.length > 1 ? 'block' : 'none';
}