import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_CARRINHO_SUCESSO':
      return produce(state, draft => {
        const { prod } = action;

        draft.push(prod);
      });

    case 'REMOVER_DO_CARRINHO':
      return produce(state, draft => {
        const productIndex = draft.findIndex(f => f.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1)
        }
      });

    case 'UPDATE_CARRINHO_QTD': {
      if (action.qtd <= 0)
        return state


      return produce(state, draft => {
        const productIndex = draft.findIndex(f => f.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].qtd = Number(action.qtd);
        }
      });
    }
    default:
      return state;
  }
}