function tema() {
  const body = document.body;
  const icone = document.getElementById("icone-tema");

  // alterna o tema
  body.classList.toggle("light");

  // muda o ícone
  if (body.classList.contains("light")) {
    icone.className = "bi bi-moon-stars-fill";
  } else {
    icone.className = "bi bi-sun-fill";
  }

  // seleciona as imagens DENTRO das divs
  const img1 = document.querySelector('.mg-1 img');
  const img2 = document.querySelector('.mg-2 img');

  // troca as imagens conforme o tema
  if (body.classList.contains('light')) {
    img1.src = "imagens/claro/grafico-claro.png";
    img2.src = "imagens/claro/grafico-pizza-claro.png";
  } else {
    img1.src = "imagens/escuro/grafico_pizza.png";
    img2.src = "imagens/escuro/grafico.png";
  }
}

// executa ao carregar e quando a janela for redimensionada
window.addEventListener('load', ajustarImagens);
window.addEventListener('resize', ajustarImagens);


let estrelasDiv = document.querySelector('.estrelas')
for (let i = 0; i < 5; i++){
    let estrela = document.createElement('i')
    estrela.className = 'bi bi-star-fill'
    estrela.style.color = 'gold'
    estrela.style.fontSize = '24px'
    estrelasDiv.appendChild(estrela)
}

let estrelasDiv1 = document.querySelector('.estrelas1')
for (let i = 0; i < 5; i++){
    let estrela1 = document.createElement('i')
    estrela1.className = 'bi bi-star-fill'
    estrela1.style.color = 'gold'
    estrela1.style.fontSize = '24px'
    estrelasDiv1.appendChild(estrela1)
}

let estrelasDiv2 = document.querySelector('.estrelas2')
for (let i = 0; i < 5; i++){
    let estrela2 = document.createElement('i')
    estrela2.className = 'bi bi-star-fill'
    estrela2.style.color = 'gold'
    estrela2.style.fontSize = '24px'
    estrelasDiv2.appendChild(estrela2)
}
