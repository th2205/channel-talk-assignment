import React from 'react';
import styled from 'styled-components';
import Country from './County';
import Field from './Field';

export default function CountryList({
  countries,
  onFieldClick,
  handlRemoveButtonClick
}) {
  const fields = Object.keys(countries[0]);
  fields.push('');
  return (
    <Section>
      <ListContainer>
        {fields.map((fieldName, index) => (
          <Field key={index} name={fieldName} onFieldClick={onFieldClick} />
        ))}
      </ListContainer>
      {countries.map((country) => (
        <Country
          key={country.name}
          country={country}
          onRemoveButtonClick={handlRemoveButtonClick}
        />
      ))}
    </Section>
  );
}

const Section = styled.section`
  width: 80%;
  max-width: 1000px;
  margin: 3rem auto;
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
