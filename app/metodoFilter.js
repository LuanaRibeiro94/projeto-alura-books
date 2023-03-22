const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
  // Salvar a categoria do botão clicado
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;

  let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
  exibirLivrosNaTela(livrosFiltrados);
}