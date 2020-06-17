import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { useSelector } from "react-redux";

import { Container, Cart } from './styles';
import Logo from '../../assets/img/logo.png';

export default function Header() {
  const cardSize = useSelector(state => state.cart.length);

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