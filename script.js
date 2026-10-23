// Lista dos 36 produtos personalizados com nomes, caminhos de imagens e preços condizentes
const produtos = [
  { id: 1, nome: "Bebida sabor Windows", preco: 14.90, img: "./imagens/bebida windows.jpg" },
  { id: 2, nome: "Cadeira Gamer Batman", preco: 1299.00, img: "./imagens/cadeira gamer batman.jpg" },
  { id: 3, nome: "Cadeira Gamer Multiusos", preco: 899.90, img: "./imagens/cadeira gamer multiusos.jpg" },
  { id: 4, nome: "CD ChatGPT Offline", preco: 49.90, img: "./imagens/CD chat gpt of line.jpg" },
  { id: 5, nome: "Chinelo para Programação", preco: 39.90, img: "./imagens/chinelo para programaçao.jpg" },
  { id: 6, nome: "Ciber Cruz", preco: 79.90, img: "./imagens/ciber cruz.jpg" },
  { id: 7, nome: "Conjunto de Teclado Fruitaero", preco: 249.90, img: "./imagens/conjunto de teclado fruitaero.jpg" },
  { id: 8, nome: "Controle Cromado a Ouro", preco: 599.00, img: "./imagens/controle cromado a ouro.jpg" },
  { id: 9, nome: "Livro Cibertec", preco: 65.00, img: "./imagens/livro cibertec.jpg" },
  { id: 10, nome: "Martelo Lendário Inquebrável Nokia", preco: 9999.00, img: "./imagens/martelo lendario inquebravel nokia.jpg" },
  { id: 11, nome: "Mouse Carrinho", preco: 69.90, img: "./imagens/mause carrinho.jpg" },
  { id: 12, nome: "Mouse Escorpião Perigoso", preco: 119.90, img: "./imagens/mause escorpiao perigoso.jpg" },
  { id: 13, nome: "Mouse Pet", preco: 89.90, img: "./imagens/mause pet.jpg" },
  { id: 14, nome: "Mouse Tank", preco: 159.90, img: "./imagens/mause tank.jpg" },
  { id: 15, nome: "Moletom para Programadores", preco: 139.90, img: "./imagens/moletom para programadores.jpg" },
  { id: 16, nome: "Óculos de Realidade Virtual", preco: 1499.00, img: "./imagens/oculos de realidade virtual.jpg" },
  { id: 17, nome: "Papel Higiênico Tecnológico", preco: 29.90, img: "./imagens/papel higienico tecnologico.jpg" },
  { id: 18, nome: "PC Econômico Montado", preco: 1899.00, img: "./imagens/pc economico montado.jpg" },
  { id: 19, nome: "PC Gamer Simples e Econômico", preco: 2499.00, img: "./imagens/pc gamer simples e economico montado.jpg" },
  { id: 20, nome: "PC Montado Simples", preco: 1599.00, img: "./imagens/pc montado simples.jpg" },
  { id: 21, nome: "PC Montado Última Geração", preco: 8999.00, img: "./imagens/pc montado ultima geraçao.jpg" },
  { id: 22, nome: "PC Simples Montado", preco: 1399.00, img: "./imagens/pc simples montado.jpg" },
  { id: 23, nome: "PC Super Tecnológico Montado", preco: 11999.00, img: "./imagens/pc super tecnologico montado.jpg" },
  { id: 24, nome: "PC Transparente Tecnológico", preco: 14999.00, img: "./imagens/pc transparente tecnologico.jpg" },
  { id: 25, nome: "Pen Drive Sabor KitKat", preco: 45.00, img: "./imagens/pen drive sabor kitkat.jpg" },
  { id: 26, nome: "PlayStation Azul Transparente", preco: 3200.00, img: "./imagens/playstation azul transparente.jpg" },
  { id: 27, nome: "Ponta de Lança Tecnológica", preco: 189.90, img: "./imagens/ponta de lança tecnologica.jpg" },
  { id: 28, nome: "RTX Pequena", preco: 1899.00, img: "./imagens/RTX pequena.jpg" },
  { id: 29, nome: "Teclado Arma Sônica", preco: 349.90, img: "./imagens/teclado arma sonica.jpg" },
  { id: 30, nome: "Teclado Batman", preco: 299.90, img: "./imagens/teclado batman.jpg" },
  { id: 31, nome: "Teclado Cubo Mágico", preco: 179.90, img: "./imagens/teclado cubo magico.jpg" },
  { id: 32, nome: "Teclado Granada Funcional com LED", preco: 229.90, img: "./imagens/teclado granada funcional com led.jpg" },
  { id: 33, nome: "Teclado Granada Funcional", preco: 189.90, img: "./imagens/teclado granada funcional.jpg" },
  { id: 34, nome: "Teclado Holográfico", preco: 499.00, img: "./imagens/teclado holografico.jpg" },
  { id: 35, nome: "Terno para Programadores", preco: 399.90, img: "./imagens/terno para programadores.jpg" },
  { id: 36, nome: "Trono dos Teclados", preco: 2899.00, img: "./imagens/trono dos teclados.jpg" }
];

let carrinho = [];

/* Alternar Tema (Modo Claro / Escuro) */
function alternarTema() {
  const body = document.body;
  const btn = document.getElementById("tema-btn");
  
  body.classList.toggle("modo-escuro");
  const ehEscuro = body.classList.contains("modo-escuro");

  btn.innerHTML = ehEscuro ? "☀️ Modo Claro" : "🌙 Modo Escuro";
  localStorage.setItem("tema_escuro", ehEscuro);
}

function carregarTemaSalvo() {
  const ehEscuro = localStorage.getItem("tema_escuro") === "true";
  if (ehEscuro) {
    document.body.classList.add("modo-escuro");
    document.getElementById("tema-btn").innerHTML = "☀️ Modo Claro";
  }
}

/* Lógica do Carrossel de Banner */
let bannerAtual = 0;
const totalBanners = 3;

function mostrarBanner(index) {
  const slides = document.querySelectorAll(".slide");
  const pontos = document.querySelectorAll(".ponto");

  if (index >= totalBanners) bannerAtual = 0;
  else if (index < 0) bannerAtual = totalBanners - 1;
  else bannerAtual = index;

  slides.forEach((slide, i) => {
    slide.classList.toggle("ativo", i === bannerAtual);
  });

  pontos.forEach((ponto, i) => {
    ponto.classList.toggle("ativo", i === bannerAtual);
  });
}

function mudarBanner(direcao) {
  mostrarBanner(bannerAtual + direcao);
}

function irParaBanner(index) {
  mostrarBanner(index);
}

setInterval(() => {
  mudarBanner(1);
}, 5000);

function gerarSvgReserva(nome) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
    <rect width="100%" height="100%" fill="#e2e8f0"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2c3e50" dominant-baseline="middle" text-anchor="middle">${nome}</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

/* Função para Renderizar Produtos */
function carregarProdutos(lista = produtos) {
  const container = document.getElementById("grid-produtos");
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = '<p class="sem-produtos">Nenhum produto encontrado com essa busca.</p>';
    return;
  }

  lista.forEach(produto => {
    const card = document.createElement("div");
    card.className = "card-produto";
    
    const svgReserva = gerarSvgReserva(produto.nome);

    card.innerHTML = `
      <img src="${produto.img}" 
           alt="${produto.nome}" 
           class="img-produto" 
           loading="lazy"
           onerror="this.onerror=null; this.src='${svgReserva}';">
      <h3>${produto.nome}</h3>
      <p class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
      <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
    `;
    container.appendChild(card);
  });
}

/* Função de Filtrar Produtos na Busca */
function filtrarProdutos() {
  const termo = document.getElementById("campo-busca").value.toLowerCase().trim();
  const produtosFiltrados = produtos.filter(p => p.nome.toLowerCase().includes(termo));
  carregarProdutos(produtosFiltrados);
}

/* Lógica do Carrinho */
function toggleCarrinho() {
  document.getElementById("carrinho-painel").classList.toggle("aberto");
  document.getElementById("carrinho-overlay").classList.toggle("ativo");
}

function adicionarAoCarrinho(idProduto) {
  const produtoExistente = carrinho.find(item => item.id === idProduto);

  if (produtoExistente) {
    produtoExistente.quantidade++;
  } else {
    const produtoOriginal = produtos.find(p => p.id === idProduto);
    carrinho.push({ ...produtoOriginal, quantidade: 1 });
  }

  atualizarCarrinho();
}

function alterarQuantidade(idProduto, mudanca) {
  const item = carrinho.find(i => i.id === idProduto);
  if (!item) return;

  item.quantidade += mudanca;

  if (item.quantidade <= 0) {
    carrinho = carrinho.filter(i => i.id !== idProduto);
  }

  atualizarCarrinho();
}

function atualizarCarrinho() {
  const containerItens = document.getElementById("carrinho-itens");
  const totalElemento = document.getElementById("carrinho-total");
  const qtdContador = document.getElementById("qtd-carrinho");

  containerItens.innerHTML = "";

  let total = 0;
  let totalItens = 0;

  if (carrinho.length === 0) {
    containerItens.innerHTML = '<p class="carrinho-vazio">Seu carrinho está vazio.</p>';
  } else {
    carrinho.forEach(item => {
      total += item.preco * item.quantidade;
      totalItens += item.quantidade;

      const divItem = document.createElement("div");
      divItem.className = "item-carrinho";
      divItem.innerHTML = `
        <div class="item-info">
          <h4>${item.nome}</h4>
          <p>R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
        </div>
        <div class="item-qtd-controles">
          <button onclick="alterarQuantidade(${item.id}, -1)">-</button>
          <span>${item.quantidade}</span>
          <button onclick="alterarQuantidade(${item.id}, 1)">+</button>
        </div>
      `;
      containerItens.appendChild(divItem);
    });
  }

  totalElemento.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
  qtdContador.innerText = totalItens;
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  alert("Compra finalizada com sucesso!");
  carrinho = [];
  atualizarCarrinho();
  toggleCarrinho();
}

// Inicializações
carregarTemaSalvo();
carregarProdutos();