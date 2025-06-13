// inicio da animacao de clique do inventario
let whatsapp = document.querySelector(".whatsapp");
let gmail = document.querySelector(".gmail");
let skills = document.querySelector(".skills");
let modalSkills = document.querySelector(".modal-skills");
let modalSkillsN1 = document.querySelector(".modal-skills .n1");
let modalSkillsN2 = document.querySelector(".modal-skills .n2");
let modalSkillsN3 = document.querySelector(".modal-skills .n3");
let info1img = document.querySelector(".info-1-img");
let info1 = document.querySelector(".info-1");
let info1Span = document.querySelector(".info-1 span");
let info2txt = document.querySelector("#info2txt");
let carrossel = document.querySelector(".carousel");
let projetos = document.querySelector("#projetos");

let img = document.createElement("img");
info1img.appendChild(img);

// inicio estilos originais
let info1Styles = getComputedStyle(info1);
let originalBorderImage = info1Styles.borderImage;
let originalBackgroundColor = info1Styles.backgroundColor;
// fim estilos originais

whatsapp.addEventListener("click", () => {
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

gmail.addEventListener("click", () => {
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
		img.src = "img/gmail.webp";
		info2txt.style.display = "block";
		typeWriterInfo('<span style="color: #19E428;">Gmail</span><br>julianovreis@gmail.com');
	}
});

skills.addEventListener("click", () => {
	carrossel.style.display = "none";
	info1.style.borderImage = "none";
	info1.style.backgroundColor = "#07081F";
	info1img.style.display = "none";
	info1Span.style.display = "none";
	info2txt.style.display = "none";

	if (modalSkills.style.display === "block") {
		modalSkills.style.display = "none";
	} else {
		modalSkills.style.display = "block";
	}
});

document.addEventListener("click", (e) => {
	if (!whatsapp.contains(e.target) && !gmail.contains(e.target) && !skills.contains(e.target) && !modalSkills.contains(e.target)) {
		modalSkills.style.display = "none";
	}
});
// fim da animacao de clique do inventario

// inicio typewriter
let typeitInstance = null;

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
// fim typewriter

// inicio do modal das skills
modalSkillsN1.addEventListener("click", () => {
	info2txt.style.display = "block";
	typeWriterInfo('<span style="color: #19E428;">HTML5/CSS3</span><br>Curso em Vídeo - 40h<br>Origamid - 23h');
});

modalSkillsN2.addEventListener("click", () => {
	info2txt.style.display = "block";
	typeWriterInfo('<span style="color: #19E428;">Algoritmos</span><br>Curso em Vídeo - 40h');
});

modalSkillsN3.addEventListener("click", () => {
	info2txt.style.display = "block";
	typeWriterInfo('<span style="color: #19E428;">JavaScript</span><br>Curso em Vídeo - 40h<br>Origamid - 37h');
});

document.addEventListener("click", (e) => {
	let ignorarClique = [info2txt, modalSkillsN1, modalSkillsN2, modalSkillsN3, whatsapp, gmail, skills];

	let clicouFora = !ignorarClique.some((el) => el.contains(e.target));
	if (clicouFora) {
		info2txt.style.display = "none"
	}
});
// fim do modal das skills

// inicio menu navegacao
projetos.addEventListener("click", () => {
	const isVisible = carrossel.style.display === "block";

	if (isVisible) {
		carrossel.style.display = "none";
	} else {
		carrossel.style.display = "block";
		info1.style.display = "flex";
		info1img.style.display = "none";
		info2txt.style.display = "none";
		info1Span.style.display = "block";
		modalSkills.style.display = "none";
		info1.style.borderImage = originalBorderImage;
		info1.style.backgroundColor = originalBackgroundColor;
	}
});
// fim menu navegacao

// inicio carrossel
("use strict");

class Carousel {
	constructor(el) {
		this.el = el;
		this.carouselOptions = ["previous", "next"];
		this.carouselData = [
			{ id: "1", src: "img/capa-files2.jpg", title: "Portfólio Pessoal - HTML/CSS/JavaScript", link: "https://julianovreis.github.io/portfolio/" },
			{ id: "2", src: "img/capa-files3.jpg", title: "Bikcraft - HTML/CSS/JavaScript", link: "https://projetositebikcraft.netlify.app/" },
			{ id: "3", src: "img/capa-files4.jpg", title: "Animais Fantásticos - HTML/CSS/JavaScript", link: "https://projetoanimaisfantasticos.netlify.app/" },
			{ id: "4", src: "img/capa-files5.jpg", title: "Pokédex - HTML/CSS/JavaScript", link: "https://julianovreis.github.io/pokedex/" },
			{ id: "5", src: "img/capa-files6.jpg", title:"Projeto Portfólio - HTML/CSS", link: "https://julianovreis.github.io/projeto-portfolio/" },
		];

		this.carouselInView = [1, 2, 3, 4, 5];
		this.carouselContainer;
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
			const carouselItemWrapper = document.createElement("div");
			const carouselItem = document.createElement("img");
			const caption = document.createElement("div");

			carouselItemWrapper.className = `carousel-item carousel-item-${index + 1}`;
			carouselItem.src = item.src;
			carouselItem.setAttribute("loading", "lazy");
			carouselItem.setAttribute("data-index", `${index + 1}`);

			caption.className = "carousel-caption";
			caption.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;

			carouselItemWrapper.appendChild(carouselItem);
			carouselItemWrapper.appendChild(caption);
			container.append(carouselItemWrapper);
		});

		this.carouselOptions.forEach((option) => {
			const btn = document.createElement("button");
			const axSpan = document.createElement("span");
			axSpan.innerText = option;
			axSpan.className = "ax-hidden";
			btn.append(axSpan);
			btn.className = `carousel-control carousel-control-${option}`;
			btn.setAttribute("data-name", option);
			controls.append(btn);
		});

		this.setControls([...controls.children]);
		this.carouselContainer = container;
	}

	setControls(controls) {
		controls.forEach((control) => {
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

		this.carouselInView.forEach((item, index) => {
			this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`;
		});

		this.carouselData.slice(0, 5).forEach((data, index) => {
			const wrapper = document.querySelector(`.carousel-item-${index + 1}`);
			wrapper.querySelector("img").src = data.src;
			wrapper.querySelector(".carousel-caption").innerHTML = `<a href="${data.link}" target="_blank">${data.title}</a>`;
		});
	}

	next() {
		this.carouselData.push(this.carouselData.shift());
		this.carouselInView.unshift(this.carouselInView.pop());

		this.carouselInView.forEach((item, index) => {
			this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`;
		});

		this.carouselData.slice(0, 5).forEach((data, index) => {
			const wrapper = document.querySelector(`.carousel-item-${index + 1}`);
			wrapper.querySelector("img").src = data.src;
			wrapper.querySelector(".carousel-caption").innerHTML = `<a href="${data.link}" target="_blank">${data.title}</a>`;
		});
	}
}

const el = document.querySelector(".carousel");
const exampleCarousel = new Carousel(el);
exampleCarousel.mounted();
// fim carrossel

// inicio pagina sobre
const principalDiv = document.querySelector('.principal');
const conteudoOriginal = principalDiv.innerHTML;

function carregarPagina(url) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Erro ao carregar ${url}`);
      return res.text();
    })
    .then(html => {
      principalDiv.innerHTML = html;
      ativarEventos(); // Reaplica os eventos nos links do novo conteúdo
    })
    .catch(err => {
      console.error(err);
      alert('Erro ao carregar a página');
    });
}

function ativarEventos() {
  // Evento do link "SOBRE" (na home)
  const linkSobre = document.getElementById('link-sobre');
  if (linkSobre) {
    linkSobre.addEventListener('click', e => {
      e.preventDefault();
      carregarPagina('sobre.html');
    });
  }

  // Evento do link "Voltar para a Home" (dentro do conteúdo carregado)
  const linkVoltar = document.getElementById('voltar-index');
  if (linkVoltar) {
    linkVoltar.addEventListener('click', e => {
      e.preventDefault();
      principalDiv.innerHTML = conteudoOriginal;
      ativarEventos(); // Reaplica os eventos na home
    });
  }
}

// Inicializa os eventos quando a página carrega
ativarEventos();