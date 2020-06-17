import React, { useState, useEffect } from 'react';
import { bindActionCreators } from "redux";
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import { connect } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import { ProductList } from './styles';

function Home({ addCarrinhoRequest }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const res = await api.get('/products');
      const data = res.data.map(prd => ({
        ...prd,
        priceformatado: formatPrice(prd.price)
      }))

      setProducts(data);
    }

    loadProducts();
  }, [])

  function addProduto(id) {
    addCarrinhoRequest(id);
  }

  return (
    <ProductList>
      {products.map(prod => (
        <li key={prod.id}>
          <img src={prod.image} alt={prod.title} />
          <strong>{prod.title}</strong>
          <span>{prod.priceformatado}</span>

          <button type="button" onClick={() => addProduto(prod.id)}>
            <div>
              <MdAddShoppingCart size="20" color="#FFF" />
            </div>
            <span>Adicionar Carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);