import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format'

export default function Cart() {
  const total = useSelector(state => formatPrice(
    state.cart.reduce((totalSUM, prod) => {
      return totalSUM + (prod.price * prod.qtd);
    }, 0)
  ));
  const cart = useSelector(state => state.cart.map(prod => ({
    ...prod,
    subtotal: formatPrice(prod.price * prod.qtd),
  })));

  const _dispatch = useDispatch();

  function incrementeQtd(prod) {
    _dispatch(CartActions.updateQtd(prod.id, prod.qtd + 1));
  }

  function decrementQtd(prod) {
    _dispatch(CartActions.updateQtd(prod.id, prod.qtd - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Qtd</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(prod => (
            <tr key={prod.id}>
              <td>
                <img src={prod.image} alt={prod.title} />
              </td>
              <td>
                <strong>{prod.title}</strong>
                <span>{prod.priceformatado}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrementQtd(prod)}>
                    <MdRemoveCircleOutline size={20} color="#999" />
                  </button>
                  <input type="number" readOnly value={prod.qtd} />
                  <button type="button" onClick={() => incrementeQtd(prod)}>
                    <MdAddCircleOutline size={20} color="#999" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{prod.subtotal}</strong>
              </td>
              <td>
                <button type="button" onClick={() => _dispatch(CartActions.removeCarrinho(prod.id))}>
                  <MdDelete size={20} color="#999" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Comprar</button>
        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}