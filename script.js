// ===============================
// FUNÇÃO: Alternar Tema (Dark/Light)
// ===============================
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

// ===============================
// EVENTOS DE JANELA
// ===============================
window.addEventListener('load', ajustarImagens);
window.addEventListener('resize', ajustarImagens);