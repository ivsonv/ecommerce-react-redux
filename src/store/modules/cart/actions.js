export function addCarrinhoRequest(id) {
  return {
    type: "ADD_CARRINHO_REQUEST",
    id
  }
}

export function addCarrinhoSucesso(prod) {
  return {
    type: "ADD_CARRINHO_SUCESSO",
    prod
  }
}

export function removeCarrinho(id) {
  return {
    type: 'REMOVER_DO_CARRINHO',
    id
  }
}

export function updateQtd(id, qtd) {
  return {
    type: 'UPDATE_CARRINHO_QTD',
    id,
    qtd
  }
}