let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosAPI();

// criando função assíncrona para esperar a promise de receber os livros do endpoint
async function getBuscarLivrosAPI() { 
  const res = await fetch(endpointAPI);
  livros = await res.json();

  let livrosComDesconto = aplicarDesconto(livros);
  exibirLivrosNaTela(livrosComDesconto);
}