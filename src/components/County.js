import React from 'react';
import styled from 'styled-components';

export default function Country({ country, onRemoveButtonClick }) {
  return (
    <CountryContainer>
      <Item>{country.name}</Item>
      <Item>{country.alpha2Code}</Item>
      <Item>{country.callingCodes[0] || '-'}</Item>
      <Item>{country.capital || '-'}</Item>
      <Item>{country.region || '-'}</Item>
      <RemoveButton onClick={() => onRemoveButtonClick(country.name)}>
        삭제
      </RemoveButton>
    </CountryContainer>
  );
}

const CountryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const Item = styled.p`
  width: 7rem;
  text-align: center;
`;

const RemoveButton = styled.button`
  width: 7rem;
  height: 2rem;
  background-color: red;
  color: #ffffff;
`;
