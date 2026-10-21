const produtos = [
    { id: 1, nome: "Fone Sem Fio Bluetooth", preco: 149.90 },
    { id: 2, nome: "Smartwatch Sport", preco: 299.00 },
    { id: 3, nome: "Teclado Mecânico RGB", preco: 220.50 },
    { id: 4, nome: "Mouse Gamer 12000 DPI", preco: 89.90 },
    { id: 5, nome: "Monitor Ultrawide 29''", preco: 1199.00 },
    { id: 6, nome: "Headset Gamer 7.1", preco: 259.90 },
    { id: 7, nome: "Webcam Full HD 1080p", preco: 189.00 },
    { id: 8, nome: "Microfone Condensador USB", preco: 310.00 },
    { id: 9, nome: "Cadeira Gamer Ergonômica", preco: 849.00 },
    { id: 10, nome: "Mousepad Extra Grande", preco: 59.90 },
    { id: 11, nome: "Caixa de Som Bluetooth 20W", preco: 199.90 },
    { id: 12, nome: "Hub USB-C 7 em 1", preco: 139.00 },
    { id: 13, nome: "HD Externo 1TB Portable", preco: 349.90 },
    { id: 14, nome: "SSD NVMe M.2 512GB", preco: 289.00 },
    { id: 15, nome: "Suporte para Notebook", preco: 79.90 },
    { id: 16, nome: "Luminária de Mesa LED", preco: 99.00 },
    { id: 17, nome: "Carregador por Indução", preco: 119.90 },
    { id: 18, nome: "Power Bank 20000mAh", preco: 169.00 },
    { id: 19, nome: "Placa de Captura Cam Link", preco: 450.00 },
    { id: 20, nome: "Ring Light 10 polegadas", preco: 85.00 },
    { id: 21, nome: "Mochila Impermeável", preco: 189.90 },
    { id: 22, nome: "Cabo HDMI 2.1 2m", preco: 49.90 },
    { id: 23, nome: "Filtro de Linha 8 Tomadas", preco: 69.90 },
    { id: 24, nome: "Adaptador Bluetooth 5.0", preco: 35.00 },
    { id: 25, nome: "Earbuds TWS Canc. Ruído", preco: 389.00 },
    { id: 26, nome: "Drone Compacto 4K", preco: 1499.00 },
    { id: 27, nome: "Estabilizador Gimbal", preco: 599.00 },
    { id: 28, nome: "Tablet 10'' HD 64GB", preco: 799.00 },
    { id: 29, nome: "Teclado Sem Fio Ergonômico", preco: 279.90 },
    { id: 30, nome: "Mouse Vertical Ergonômico", preco: 129.90 },
    { id: 31, nome: "Barra de Luz ScreenBar", preco: 199.00 },
    { id: 32, nome: "Lâmpada Smart Wi-Fi RGB", preco: 59.00 },
    { id: 33, nome: "Stream Deck 15 Teclas", preco: 989.00 },
    { id: 34, nome: "Fita LED RGB 5m Smart", preco: 79.90 },
    { id: 35, nome: "Organizador de Cabos", preco: 29.90 },
    { id: 36, nome: "Base Cooler para Notebook", preco: 119.00 }
  ];
  
  let carrinho = [];
  
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
  
  // Troca automática a cada 5 segundos
  setInterval(() => {
    mudarBanner(1);
  }, 5000);
  
  /* Lógica dos Produtos */
  function carregarProdutos() {
    const container = document.getElementById("grid-produtos");
    container.innerHTML = "";
  
    produtos.forEach(produto => {
      const card = document.createElement("div");
      card.className = "card-produto";
      card.innerHTML = `
        <div class="imagem-placeholder">Foto do Produto</div>
        <h3>${produto.nome}</h3>
        <p class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
        <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
      `;
      container.appendChild(card);
    });
  }
  
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
  
  carregarProdutos();