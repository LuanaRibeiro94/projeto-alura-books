// Método para exibir os livros na tela

const elementoParaInserirLivros = document.getElementById('livros');

const elementoComValorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirLivrosNaTela(listaDeLivros) {
  elementoComValorTotalLivrosDisponiveis.innerHTML = '';
  elementoParaInserirLivros.innerHTML = '';
  
  // percorre o array e cria os elementos na tela exibindo os dados do array
  listaDeLivros.forEach(livro => {
    
    //let disponibilidade = verificarDisponibilidadeLivro(livro); 

    // Verificar disponibilidade usando 1 linha 
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';

    // Preencher as informações na tela
    elementoParaInserirLivros.innerHTML += `
    <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}  
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `  
  });
}

/*function verificarDisponibilidadeLivro(livro) {
  if(livro.quantidade > 0) {
    return 'livro__imagens'
  } else {
    return 'livro__imagens indisponivel'
  }
}*/