import React from 'react';
import styled from 'styled-components';
import Country from './County';
import Field from './Field';

export default function CountryList({ countries, onFieldClick }) {
  return (
    <>
      <ListContainer>
        {Object.keys(countries[0]).map((fieldName, index) => (
          <Field key={index} name={fieldName} onFieldClick={onFieldClick} />
        ))}
      </ListContainer>
      {countries.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </>
  );
}

const ListContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
