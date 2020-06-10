import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addCarrinhoSucesso } from './actions';

function* addCarrinho({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  console.log(response.data);

  yield put(addCarrinhoSucesso(response.data));
}

export default all([
  takeLatest('ADD_CARRINHO_REQUEST', addCarrinho)
])