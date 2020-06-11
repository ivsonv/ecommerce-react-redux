import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { formatPrice } from '../../../utils/format';
import { toast } from 'react-toastify';

import { addCarrinhoSucesso, updateQtd } from './actions';

function* addCarrinho({ id }) {
  const _prod = yield select(state => state.cart.find(p => p.id === id));

  if (_prod) {
    const qtd = _prod.qtd + 1;
    yield put(updateQtd(id, qtd));

    toast.success("Quantidade atualizada com sucesso.");
  }
  else {
    toast.success("Produto adicionado com sucesso.");

    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      qtd: 1,
      priceFormatted: formatPrice(response.data.price)
    }
    yield put(addCarrinhoSucesso(data));
  }
}

export default all([
  takeLatest('ADD_CARRINHO_REQUEST', addCarrinho)
])