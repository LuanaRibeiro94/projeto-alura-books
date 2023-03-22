function aplicarDesconto(livros) {
  const desconto = 0.3;

  livrosComDesconto = livros.map(livro => {
    // retornar um objeto fazendo uma cópia do objeto para outro objeto e mudando o preço
    return {...livro, preco: livro.preco - (livro.preco*desconto)}
  });

  return livrosComDesconto;
}