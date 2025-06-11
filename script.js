// inicio da animacao de clique do inventario
let whatsapp = document.querySelector('.whatsapp')
let gmail = document.querySelector('.gmail')
let info1img = document.querySelector('.info-1-img')
let info2txt = document.querySelector('.txt-info-2')
let img = document.createElement('img')
info1img.appendChild(img)

whatsapp.addEventListener('click', () => {
	if (info1img.style.display === 'flex' && img.src.includes('whatsapp.png')) {
    info1img.style.display = 'none'
    info2txt.style.display = 'none'
  } else {
    info1img.style.display = 'flex'
    img.src = 'img/whatsapp.png'
    info2txt.style.display = 'block'
		typeWriterInfo('<span style="color: green;">WhatsApp</span>: (51) 989199543')
  }
})

gmail.addEventListener('click', () => {
	if (info1img.style.display === 'flex' && img.src.includes('gmail.webp')) {
    info1img.style.display = 'none'
    info2txt.style.display = 'none'
  } else {
    info1img.style.display = 'flex'
    img.src = 'img/gmail.webp'
    info2txt.style.display = 'block'
		typeWriterInfo('<span style="color: green;">Gmail</span>: julianovreis@gmail.com')
  }
})

document.addEventListener('click', (e) => {
  if (
    !whatsapp.contains(e.target) &&
    !gmail.contains(e.target) &&
    !info1img.contains(e.target)
  ) {
    info1img.style.display = 'none';
    info2txt.style.display = 'none';
  }
})
// fim da animacao de clique do inventario

// inicio typewriter
let typeitInstance = null

function typeWriterInfo(texto) {
  if (typeitInstance) {
    typeitInstance.destroy()
    document.querySelector('#info2txt').innerHTML = ''
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