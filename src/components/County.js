import React from 'react';
import styled from 'styled-components';

export default function Country({ country }) {
  return (
    <CountryContainer>
      <Item>{country.name}</Item>
      <Item>{country.alpha2Code}</Item>
      <Item>{country.callingCodes[0] || '-'}</Item>
      <Item>{country.capital || '-'}</Item>
      <Item>{country.region || '-'}</Item>
    </CountryContainer>
  );
}

const CountryContainer = styled.div`
  width: 80%;
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
