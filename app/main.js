let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosAPI();

const elementoParaInserirLivros = document.getElementById('livros');

// criando função assíncrona para esperar a promise de receber os livros do endpoint
async function getBuscarLivrosAPI() { 
  const res = await fetch(endpointAPI);
  livros = await res.json();
  console.table(livros);
  exibirLivrosNaTela(livros);
}

function exibirLivrosNaTela(listaDeLivros) {
  // percorre o array e cria os elementos na tela exibindo os dados do array
  listaDeLivros.forEach(livro => {
    elementoParaInserirLivros.innerHTML += `
    <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}  
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `  
  });
}