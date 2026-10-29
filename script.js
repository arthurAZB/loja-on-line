// Lista dos 43 produtos cadastrados
const produtos = [
  { id: 1, nome: "Bebida Windows", preco: 14.90, img: "./imagens/bebida windows.jpg" },
  { id: 2, nome: "Cadeira Gamer Batman", preco: 1299.00, img: "./imagens/cadeira gamer batman.jpg" },
  { id: 3, nome: "Cadeira Gamer Multiusos", preco: 899.90, img: "./imagens/cadeira gamer multiusos.jpg" },
  { id: 4, nome: "CD ChatGPT Offline", preco: 49.90, img: "./imagens/CD chat gpt of line.jpg" },
  { id: 5, nome: "Chinelo para Programação", preco: 39.90, img: "./imagens/chinelo para programação.jpg" },
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
  { id: 19, nome: "PC Gamer Simples e Econômico", preco: 2499.00, img: "./imagens/pc gamer simples e economico mont...jpg" },
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
  { id: 36, nome: "Trono dos Teclados", preco: 2899.00, img: "./imagens/trono dos teclados.jpg" },
  { id: 37, nome: "Xícara Android", preco: 49.90, img: "./imagens/xicara android.jpg" },
  { id: 38, nome: "Camiseta de Circuitos Metálicos Funcional", preco: 89.90, img: "./imagens/camiseta de circuitos metatlicos funcional.jpg" },
  { id: 39, nome: "Bananas Fone", preco: 79.90, img: "./imagens/bananas fone.jpg" },
  { id: 40, nome: "Controle de PlayStation Edição Primal", preco: 449.90, img: "./imagens/controle de playstation edição primal.jpg" },
  { id: 41, nome: "Controle de Xbox Edição Primal", preco: 449.90, img: "./imagens/controle de xbox edição primal.jpg" },
  { id: 42, nome: "Travesseiros de Bateria de Lítio", preco: 119.90, img: "./imagens/travesseiros de bateria de litio.jpg" },
  { id: 43, nome: "Bebida de Caixinha Windows", preco: 16.90, img: "./imagens/bebida de caixinha windows.jpg" }
];

let carrinho = [];
let bannerAtual = 0;

/* Modo Claro / Escuro */
function alternarTema() {
  const ehEscuro = document.body.classList.toggle("modo-escuro");
  document.getElementById("tema-btn").innerHTML = ehEscuro ? "☀️ Modo Claro" : "🌙 Modo Escuro";
  localStorage.setItem("tema_escuro", ehEscuro);
}

/* Banner de Propaganda */
function mostrarBanner(index) {
  const slides = document.querySelectorAll(".slide");
  const pontos = document.querySelectorAll(".ponto");
  
  bannerAtual = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => slide.classList.toggle("ativo", i === bannerAtual));
  pontos.forEach((ponto, i) => ponto.classList.toggle("ativo", i === bannerAtual));
}

function mudarBanner(direcao) {
  mostrarBanner(bannerAtual + direcao);
}

function irParaBanner(index) {
  mostrarBanner(index);
}

setInterval(() => mudarBanner(1), 5000);

/* Renderização e Busca de Produtos */
function carregarProdutos(lista = produtos) {
  const container = document.getElementById("grid-produtos");
  
  if (lista.length === 0) {
    container.innerHTML = '<p class="sem-produtos">Nenhum produto encontrado.</p>';
    return;
  }

  container.innerHTML = lista.map(p => `
    <div class="card-produto">
      <img src="${p.img}" alt="${p.nome}" class="img-produto" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=Imagem+Indisponivel'">
      <h3>${p.nome}</h3>
      <p class="preco">R$ ${p.preco.toFixed(2).replace('.', ',')}</p>
      <button onclick="adicionarAoCarrinho(${p.id})">Adicionar ao Carrinho</button>
    </div>
  `).join('');
}

function filtrarProdutos() {
  const termo = document.getElementById("campo-busca").value.toLowerCase().trim();
  carregarProdutos(produtos.filter(p => p.nome.toLowerCase().includes(termo)));
}

/* Gestão do Carrinho */
function toggleCarrinho() {
  document.getElementById("carrinho-painel").classList.toggle("aberto");
  document.getElementById("carrinho-overlay").classList.toggle("ativo");
}

function adicionarAoCarrinho(idProduto) {
  const item = carrinho.find(i => i.id === idProduto);
  if (item) {
    item.quantidade++;
  } else {
    const produto = produtos.find(p => p.id === idProduto);
    carrinho.push({ ...produto, quantidade: 1 });
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
  let total = 0;
  let totalItens = 0;

  if (carrinho.length === 0) {
    containerItens.innerHTML = '<p class="carrinho-vazio">Seu carrinho está vazio.</p>';
  } else {
    containerItens.innerHTML = carrinho.map(item => {
      total += item.preco * item.quantidade;
      totalItens += item.quantidade;
      return `
        <div class="item-carrinho">
          <div class="item-info">
            <h4>${item.nome}</h4>
            <p>R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
          </div>
          <div class="item-qtd-controles">
            <button onclick="alterarQuantidade(${item.id}, -1)">-</button>
            <span>${item.quantidade}</span>
            <button onclick="alterarQuantidade(${item.id}, 1)">+</button>
          </div>
        </div>
      `;
    }).join('');
  }

  document.getElementById("carrinho-total").innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
  document.getElementById("qtd-carrinho").innerText = totalItens;
}

function finalizarCompra() {
  if (carrinho.length === 0) return alert("Seu carrinho está vazio!");
  
  toggleCarrinho();
  document.getElementById("modal-sucesso").classList.add("ativo");
  
  carrinho = [];
  atualizarCarrinho();
}

function fecharModalSucesso() {
  document.getElementById("modal-sucesso").classList.remove("ativo");
}

/* Inicialização */
if (localStorage.getItem("tema_escuro") === "true") {
  document.body.classList.add("modo-escuro");
  document.getElementById("tema-btn").innerHTML = "☀️ Modo Claro";
}

carregarProdutos();