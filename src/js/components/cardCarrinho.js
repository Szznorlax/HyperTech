// Função para gerar o HTML de um card de product
export function cardCarrinhoComponent(product) {
    const valorNumerico = converterValorParaNumero(product.valor);
    const total = (valorNumerico * product.quantidade).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return `
    <div class="mb-3" data-id="${product.id}">
        <div class="card-body d-flex align-items-center">
            <img src="${product.imagem}" alt="${product.nome}" class="img-fluid me-3" style="width: 125px;">
            <div class="flex-grow-1">
                <h4 class="mb-1">${product.valor}</h4>
                <h5 class="mb-1">${product.nome}</h5>
            </div>
            <div class="d-flex align-items-center">
                <button class="btn btn-outline-secondary btn-sm btn-diminuir">-</button>
                <input type="text" class="form-control text-center mx-2 input-quantidade" value="${product.quantidade}" style="width: 50px;">
                <button class="btn btn-outline-secondary btn-sm btn-aumentar">+</button>
            </div>
            <p class="ms-3 mb-0">Total: ${total}</p>
            <button class="btn btn-danger btn-sm btn-excluir">Excluir</button>
        </div>
    </div>
    `;
}




function converterValorParaNumero(valor) {
    return parseFloat(valor.replace("R$", "").replace(".", "").replace(",", "."));
}