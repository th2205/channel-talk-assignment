import React from 'react';
import styled from 'styled-components';
import Error from './Error';

export default function Form({
  name,
  alpha2Code,
  callingCodes,
  capital,
  region,
  errorMessage,
  setName,
  setAlphaCode,
  setCapital,
  setCallingCodes,
  setRegion,
  onSubmit
}) {
  return (
    <FormContainer onSubmit={onSubmit}>
      <Label>Country Name</Label>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Label>Alpha-2 Code</Label>
      <Input
        type="text"
        value={alpha2Code}
        onChange={(e) => setAlphaCode(e.target.value)}
      />
      <Label>Calling Codes</Label>
      <Input
        type="text"
        value={callingCodes}
        onChange={(e) => setCallingCodes(e.target.value)}
        placeholder="ex) 1 32 19 ..."
      />
      <Label>Capital</Label>
      <Input
        type="text"
        value={capital}
        onChange={(e) => setCapital(e.target.value)}
      />
      <Label>Region</Label>
      <Input
        type="text"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      />
      <Button>Submit</Button>
      <Error errorMessage={errorMessage} />
    </FormContainer>
  );
}

const FormContainer = styled.form`
  width: 70%;
  max-width: 1000px;
  margin: 5rem auto 0 auto;
`;

const Label = styled.label`
  width: 100%;
  text-align: left;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
  margin: 1rem 0;
`;

const Button = styled.button`
  width: 100%;
  height: 2rem;
  background-color: rgb(70, 119, 255);
  color: #ffffff;
  font-size: 1rem;
  margin: 1rem 0 0 0;
`;
