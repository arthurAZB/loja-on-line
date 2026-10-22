// Lista dos 36 produtos
const produtos = [
  { id: 1, nome: "Produto 1", preco: 149.90, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80" },
  { id: 2, nome: "Produto 2", preco: 299.00, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
  { id: 3, nome: "Produto 3", preco: 220.50, img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80" },
  { id: 4, nome: "Produto 4", preco: 89.90, img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&q=80" },
  { id: 5, nome: "Produto 5", preco: 1199.00, img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80" },
  { id: 6, nome: "Produto 6", preco: 259.90, img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80" },
  { id: 7, nome: "Produto 7", preco: 189.00, img: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&q=80" },
  { id: 8, nome: "Produto 8", preco: 310.00, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80" },
  { id: 9, nome: "Produto 9", preco: 849.00, img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80" },
  { id: 10, nome: "Produto 10", preco: 59.90, img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&q=80" },
  { id: 11, nome: "Produto 11", preco: 199.90, img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&q=80" },
  { id: 12, nome: "Produto 12", preco: 139.00, img: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&q=80" },
  { id: 13, nome: "Produto 13", preco: 349.90, img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&q=80" },
  { id: 14, nome: "Produto 14", preco: 289.00, img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80" },
  { id: 15, nome: "Produto 15", preco: 79.90, img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80" },
  { id: 16, nome: "Produto 16", preco: 99.00, img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80" },
  { id: 17, nome: "Produto 17", preco: 119.90, img: "https://images.unsplash.com/photo-1622445268121-da118181293d?w=400&q=80" },
  { id: 18, nome: "Produto 18", preco: 169.00, img: "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?w=400&q=80" },
  { id: 19, nome: "Produto 19", preco: 450.00, img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80" },
  { id: 20, nome: "Produto 20", preco: 85.00, img: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=400&q=80" },
  { id: 21, nome: "Produto 21", preco: 189.90, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
  { id: 22, nome: "Produto 22", preco: 49.90, img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80" },
  { id: 23, nome: "Produto 23", preco: 69.90, img: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400&q=80" },
  { id: 24, nome: "Produto 24", preco: 35.00, img: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&q=80" },
  { id: 25, nome: "Produto 25", preco: 389.00, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80" },
  { id: 26, nome: "Produto 26", preco: 1499.00, img: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=400&q=80" },
  { id: 27, nome: "Produto 27", preco: 599.00, img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80" },
  { id: 28, nome: "Produto 28", preco: 799.00, img: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80" },
  { id: 29, nome: "Produto 29", preco: 279.90, img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&q=80" },
  { id: 30, nome: "Produto 30", preco: 129.90, img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80" },
  { id: 31, nome: "Produto 31", preco: 199.00, img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80" },
  { id: 32, nome: "Produto 32", preco: 59.00, img: "https://images.unsplash.com/photo-1550985616-10810253b84d?w=400&q=80" },
  { id: 33, nome: "Produto 33", preco: 989.00, img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80" },
  { id: 34, nome: "Produto 34", preco: 79.90, img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80" },
  { id: 35, nome: "Produto 35", preco: 703.91, img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80" },
  { id: 36, nome: "Produto 36", preco: 119.00, img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=80" }
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
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#2c3e50" dominant-baseline="middle" text-anchor="middle">${nome}</text>
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