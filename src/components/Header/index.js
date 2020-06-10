import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from "react-redux";

import { Container, Cart } from './styles';
import Logo from '../../assets/img/logo.png';

function Header({ cardSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="ecoomerce shoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Carrinho</strong>
          <span>{cardSize} itens</span>
        </div>
        <MdShoppingBasket size="36" color="#000" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cardSize: state.cart.length
}))(Header);