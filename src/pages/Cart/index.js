import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format'

function Cart({ cart, total, removeCarrinho, updateQtd }) {
  function incrementeQtd(prod) {
    updateQtd(prod.id, prod.qtd + 1);
  }

  function decrementQtd(prod) {
    updateQtd(prod.id, prod.qtd - 1);
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
                <button type="button" onClick={() => removeCarrinho(prod.id)}>
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

const mapStateToProps = state => ({
  cart: state.cart.map(m => ({
    ...m,
    subtotal: formatPrice(m.price * m.qtd),
  })),
  total: formatPrice(state.cart.reduce((total, prod) => {
    return total + (prod.price * prod.qtd);
  }, 0)),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);