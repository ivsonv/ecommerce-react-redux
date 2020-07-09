import styled from 'styled-components';
export const Container = styled.div `
  padding: 30px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0px 10px 16px -8px rgba(0,0,0,0.2);

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items:center;

    button {
      background: #58b792;
      color: #fff;
      border: 0;
      border-radius: 5px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: opacity 0.2s;
      &:hover {
          opacity: 0.7;
       }
    }
  }
`;

export const ProductTable = styled.table `
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
    border-radius: 10px;
  }

  strong {
    color: #333;
    display: block
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 5px;
      color: #666;
      padding: 6px;
      width: 50px;
    }

    button {
      background: none;
      border: 0;
      padding: 6px;
    }
  }
`;

export const Total = styled.div `
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;