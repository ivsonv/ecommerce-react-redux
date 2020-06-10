export function addCarrinho(prod) {
  return {
    type: "ADD_CARRINHO",
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