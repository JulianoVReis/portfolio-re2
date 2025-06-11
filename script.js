// inicio da animacao de clique do inventario
let whatsapp = document.querySelector('.whatsapp')
let gmail = document.querySelector('.gmail')
let skills = document.querySelector('.skills')
let modalSkills = document.querySelector('.modal-skills')
let modalSkillsN1 = document.querySelector('.modal-skills .n1')
let modalSkillsN2 = document.querySelector('.modal-skills .n2')
let modalSkillsN3 = document.querySelector('.modal-skills .n3')
let info1img = document.querySelector('.info-1-img')
let info1 = document.querySelector('.info-1')
let info1Span = document.querySelector('.info-1 span')
let info2txt = document.querySelector('#info2txt')
let img = document.createElement('img')
info1img.appendChild(img)

// inicio estilos originais
let info1Styles = getComputedStyle(info1)
let originalBorderImage = info1Styles.borderImage
let originalBackgroundColor = info1Styles.backgroundColor
// fim estilos originais

whatsapp.addEventListener('click', () => {
	modalSkills.style.display = 'none'
	info1.style.borderImage = originalBorderImage
	info1.style.backgroundColor = originalBackgroundColor
	info1Span.style.display = 'block'
	if (info1img.style.display === 'flex' && img.src.includes('whatsapp.png')) {
    info1img.style.display = 'none'
    info2txt.style.display = 'none'
  } else {
    info1img.style.display = 'flex'
    img.src = 'img/whatsapp.png'
    info2txt.style.display = 'block'
		typeWriterInfo('<span style="color: #19E428;">WhatsApp</span><br>(51) 989199543')
  }
})

gmail.addEventListener('click', () => {
	modalSkills.style.display = 'none'
	info1.style.borderImage = originalBorderImage
	info1.style.backgroundColor = originalBackgroundColor
	info1Span.style.display = 'block'
	if (info1img.style.display === 'flex' && img.src.includes('gmail.webp')) {
    info1img.style.display = 'none'
    info2txt.style.display = 'none'
  } else {
    info1img.style.display = 'flex'
    img.src = 'img/gmail.webp'
    info2txt.style.display = 'block'
		typeWriterInfo('<span style="color: #19E428;">Gmail</span><br>julianovreis@gmail.com')
  }
})

skills.addEventListener('click', () => {
	info1.style.borderImage = 'none'
	info1.style.backgroundColor = '#07081F'
	info1img.style.display = 'none'
	info1Span.style.display = 'none'
	info2txt.style.display = 'none'
	if (modalSkills.style.display === 'block') {
		modalSkills.style.display = 'none'
	} else {
		modalSkills.style.display = 'block'
	}
})

document.addEventListener('click', (e) => {
  if (
    !whatsapp.contains(e.target) &&
    !gmail.contains(e.target) &&
    !skills.contains(e.target) &&
    !modalSkills.contains(e.target)
  ) {
    modalSkills.style.display = 'none'
  }
})
// fim da animacao de clique do inventario

// inicio typewriter
let typeitInstance = null

function typeWriterInfo(texto) {
  if (typeitInstance) {
    typeitInstance.destroy()
    info2txt.innerHTML = ''
  }

  typeitInstance = new TypeIt("#info2txt", {
    strings: texto,
    speed: 50,
    loop: false,
    waitUntilVisible: true,
		cursor: false
  }).go()
}
// fim typewriter

// inicio do modal das skills
modalSkillsN1.addEventListener('click', () => {
	info2txt.style.display = 'block'
	typeWriterInfo('<span style="color: #19E428;">HTML5/CSS3</span><br>Curso em Vídeo - 40h<br>Origamid - 23h')
})

modalSkillsN2.addEventListener('click', () => {
	info2txt.style.display = 'block'
	typeWriterInfo('<span style="color: #19E428;">Algoritmos</span><br>Curso em Vídeo - 40h')
})

modalSkillsN3.addEventListener('click', () => {
	info2txt.style.display = 'block'
	typeWriterInfo('<span style="color: #19E428;">JavaScript</span><br>Curso em Vídeo - 40h<br>Origamid - 37h')
})

document.addEventListener('click', (e) => {
  let ignorarClique = [
    info2txt,
    modalSkillsN1,
    modalSkillsN2,
    modalSkillsN3,
    whatsapp,
    gmail
  ]

  let clicouFora = !ignorarClique.some(el => el.contains(e.target))
  if (clicouFora) {
    info2txt.style.display = 'none'
  }
})
// fim do modal das skills