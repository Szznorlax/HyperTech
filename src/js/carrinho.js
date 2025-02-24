// Função para carregar os products do localStorage
function productsTodos() {
    const productsSalvos = JSON.parse(localStorage.getItem('listaProdutos')) || { produtos: [] };
    return productsSalvos.produtos;
}



// Adiciona o EventListener ao botão
document.getElementById('adicionarItem').addEventListener('click', function(event) {
    adicionarItemCarrinho();
});


function adicionarItemCarrinho() {
    const products = productsTodos();
    const item = products.find(prod => prod.id === 2);

    if (item) {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        // Verifica se o item já está no carrinho
        const itemNoCarrinho = carrinho.find(prod => prod.id === item.id);
        if (itemNoCarrinho) {
            // Se o item já está no carrinho, aumenta a quantidade
            itemNoCarrinho.quantidade += 1;
        } else {
            // Se o item não está no carrinho, adiciona com quantidade 1
            item.quantidade = 1;
            carrinho.push(item);
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        console.log("Item adicionado ao carrinho:", item);
        alert("Item adicionado ao carrinho!");

        carregarCarrinho();
    } else {
        console.error("Item não encontrado.");
        alert("Item não encontrado.");
    }
}