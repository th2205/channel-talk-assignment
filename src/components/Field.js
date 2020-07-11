import React from 'react';
import styled from 'styled-components';

export default function Field({ name, onFieldClick }) {
  return <Item onClick={onFieldClick}>{name}</Item>;
}

const Item = styled.p`
  width: 7rem;
  font-size: 1.3rem;
  color: rgb(70, 119, 255);
  text-align: center;
  cursor: pointer;
`;
