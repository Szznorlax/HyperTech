// Importa os componentes
import { navbarComponent } from './components/navbar.js';
import { footerComponent } from './components/footer.js';
import { cardComponent } from './components/card.js';
import { cardCarrinhoComponent } from './components/cardCarrinho.js';

document.getElementById('navbar').innerHTML = navbarComponent();
document.getElementById('footer').innerHTML = footerComponent();


async function carregarProdutos() {
    try {
        let produtosSalvos = JSON.parse(localStorage.getItem('listaProdutos')) || { produtos: [] };
        if (produtosSalvos.produtos.length === 0) {
            const response = await fetch('/src/produtos.json'); 
            const data = await response.json();

            if (data && data.produtos && Array.isArray(data.produtos)) {
                produtosSalvos = { produtos: data.produtos }; 
                localStorage.setItem('listaProdutos', JSON.stringify(produtosSalvos)); 
            } else {
                console.error("O JSON não contém um array de produtos.");
                return;
            }
        }

        const produtos = produtosSalvos.produtos;

        const smartphones = produtos.filter(prod => prod.tipo === "Smartphone");
        const drones = produtos.filter(prod => prod.tipo === "Drone");
        const fones = produtos.filter(prod => prod.tipo === "Fone de Ouvido");
        const smart = produtos.filter(prod => prod.tipo === "Smartwatch");


        const containerSmartphones = document.querySelector('#card-smartphone');
        if (containerSmartphones) {
            containerSmartphones.innerHTML = ''; 
            smartphones.forEach(prod => {
                containerSmartphones.insertAdjacentHTML('beforeend', cardComponent(prod));
            });
        }
        const containerDrones = document.querySelector('#card-drone');
        if (containerDrones) {
            containerDrones.innerHTML = ''; 
            drones.forEach(prod => {
                containerDrones.insertAdjacentHTML('beforeend', cardComponent(prod));
            });
        }

        const containerFones = document.querySelector('#card-fone');
        if (containerFones) {
            containerFones.innerHTML = ''; 
            fones.forEach(prod => {
                containerFones.insertAdjacentHTML('beforeend', cardComponent(prod));
            });
        }
        const containerSmart = document.querySelector('#card-smart');
        if (containerSmart) {
            containerSmart.innerHTML = ''; 
            smart.forEach(prod => {
                containerSmart.insertAdjacentHTML('beforeend', cardComponent(prod));
            });
        }
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
});

//------------------------------------------------------------------------
//Card do carrinho

// Função para carregar e exibir os itens do carrinho
function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const containerCarrinho = document.getElementById('card-carrinho');

    if (containerCarrinho) {
        containerCarrinho.innerHTML = '';

        carrinho.forEach(product => {
            const cardHTML = cardCarrinhoComponent(product);
            containerCarrinho.insertAdjacentHTML('beforeend', cardHTML);
        });
    } else {
        console.error("Container do carrinho não encontrado.");
    }
}






// Função para atualizar a quantidade de um produto no carrinho
function atualizarQuantidade(id, novaQuantidade) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produto = carrinho.find(prod => prod.id === id);

    if (produto) {
        if (novaQuantidade > 0) {
            produto.quantidade = novaQuantidade;
        } else {
            // Remove o produto se a quantidade for 0 ou negativa
            carrinho = carrinho.filter(prod => prod.id !== id);
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        carregarCarrinho(); // Atualiza a exibição do carrinho
    }
}

// Função para adicionar eventos aos botões
function adicionarEventos() {
    const containerCarrinho = document.getElementById('card-carrinho');

    if (containerCarrinho) {
        // Evento para aumentar a quantidade
        containerCarrinho.addEventListener('click', function(event) {
            if (event.target.classList.contains('btn-aumentar')) {
                const card = event.target.closest('.mb-3');
                const id = parseInt(card.getAttribute('data-id'));
                const inputQuantidade = card.querySelector('.input-quantidade');
                const novaQuantidade = parseInt(inputQuantidade.value) + 1;
                console.log("adicionou 1")
                inputQuantidade.value = novaQuantidade;
                atualizarQuantidade(id, novaQuantidade);
            }
        });

        // Evento para diminuir a quantidade
        containerCarrinho.addEventListener('click', function(event) {
            if (event.target.classList.contains('btn-diminuir')) {
                const card = event.target.closest('.mb-3');
                const id = parseInt(card.getAttribute('data-id'));
                const inputQuantidade = card.querySelector('.input-quantidade');
                const novaQuantidade = parseInt(inputQuantidade.value) - 1;
                inputQuantidade.value = novaQuantidade;
                atualizarQuantidade(id, novaQuantidade);
            }
        });

        // Evento para excluir o produto
        containerCarrinho.addEventListener('click', function(event) {
            if (event.target.classList.contains('btn-excluir')) {
                const card = event.target.closest('.mb-3');
                const id = parseInt(card.getAttribute('data-id'));
                atualizarQuantidade(id, 0); // Remove o produto
            }
        });
    }
}

// Carrega os products do carrinho quando a página é carregada
document.addEventListener('DOMContentLoaded', function() {
    carregarCarrinho();
    adicionarEventos(); // Adiciona os eventos aos botões
});