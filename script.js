// inicio da animacao de clique do inventario
let whatsapp, gmail, skills, modalSkills, modalSkillsN1, modalSkillsN2, modalSkillsN3;
let info1img, info1, info1Span, info2txt, carrossel, projetos;
let img;
let originalBorderImage, originalBackgroundColor;
let typeitInstance = null;

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

  img = document.createElement("img");
  info1img.appendChild(img);

  const info1Styles = getComputedStyle(info1);
  originalBorderImage = info1Styles.borderImage;
  originalBackgroundColor = info1Styles.backgroundColor;

  whatsapp?.addEventListener("click", () => {
    carrossel.style.display = "none";
    modalSkills.style.display = "none";
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
    carrossel.style.display = "none";
    modalSkills.style.display = "none";
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

  skills?.addEventListener("click", () => {
    carrossel.style.display = "none";
    info1.style.borderImage = "none";
    info1.style.backgroundColor = "#07081F";
    info1img.style.display = "none";
    info1Span.style.display = "none";
    info2txt.style.display = "none";
    modalSkills.style.display = modalSkills.style.display === "block" ? "none" : "block";
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

  document.addEventListener("click", (e) => {
    const ignorarClique = [info2txt, modalSkillsN1, modalSkillsN2, modalSkillsN3, whatsapp, gmail, skills];
    if (!ignorarClique.some(el => el && el.contains(e.target))) {
      info2txt.style.display = "none";
      modalSkills.style.display = "none";
    }
  });

  if (carrossel && carrossel.children.length === 0) {
    const novoCarousel = new Carousel(carrossel);
    novoCarousel.mounted();
  }

  projetos?.addEventListener("click", () => {
    const isVisible = carrossel.style.display === "block";
    if (isVisible) {
      carrossel.style.display = "none";
      info1.style.backgroundColor = '#0A2018';
    } else {
      carrossel.style.display = "block";
      info1.style.display = "flex";
      info1img.style.display = "none";
      info2txt.style.display = "none";
      info1Span.style.display = "block";
      modalSkills.style.display = "none";
      info1.style.borderImage = originalBorderImage;
      info1.style.backgroundColor = '#07081F';
    }
  });
}

function ativarEventos() {
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
      principalDiv.innerHTML = conteudoOriginal;
      principalDiv.style.padding = originalPadding; // restaura o padding
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

      if (url === 'sobre.html') {
        principalDiv.style.padding = '0';
        inicializarNavegacaoTextoSobre(); // inicializa a navegação APÓS carregar o conteúdo
      }

      ativarEventos();
    })
    .catch(err => {
      console.error(err);
      alert('Erro ao carregar a página');
    });
}


// ================== Classe Carousel =====================

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

// Inicializa tudo no carregamento
window.addEventListener("DOMContentLoaded", () => {
  ativarEventos();
  reinicializarScripts();

  const el = document.querySelector(".carousel");
  if (el && el.children.length === 0) {
    const exampleCarousel = new Carousel(el);
    exampleCarousel.mounted();
  }
});



function inicializarNavegacaoTextoSobre() {
  const paragrafos = document.querySelectorAll('.texto-sobre');
  let indiceAtual = 0;

  function mostrarParagrafo(novoIndice, direcao) {
    if (novoIndice === indiceAtual) return;

    const atual = paragrafos[indiceAtual];
    const proximo = paragrafos[novoIndice];

    atual.classList.remove('ativo');
    atual.classList.add(direcao === 'esquerda' ? 'saindo-direita' : 'saindo-esquerda');
    proximo.classList.add('ativo');

    setTimeout(() => {
      atual.classList.remove('saindo-esquerda', 'saindo-direita');
    }, 500);

    indiceAtual = novoIndice;
  }

  const container = document.querySelector('.sobre-container');

  if (!container || paragrafos.length < 2) return; // segurança

  container.addEventListener('click', (e) => {
    const x = e.clientX;
    const largura = container.clientWidth;
    const margem = 100;

    if (x < margem && indiceAtual !== 0) {
      mostrarParagrafo(0, 'esquerda');
    } else if (x > largura - margem && indiceAtual !== 1) {
      mostrarParagrafo(1, 'direita');
    }
  });
}