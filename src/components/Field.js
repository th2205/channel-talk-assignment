import React from 'react';
import styled from 'styled-components';

export default function Field({ name, onFieldClick }) {
  return (
    <Item id="name" onClick={onFieldClick}>
      {name}
    </Item>
  );
}

const Item = styled.p`
  width: 7rem;
  text-align: center;
  cursor: pointer;
`;
