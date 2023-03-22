// Método reduce para somar os valores dos livros

function calcularValorTotalLivrosDisponiveis(livros) {
  return livros.reduce((acumulador, livro) => acumulador + livro.preco, 0).toFixed(2);
}