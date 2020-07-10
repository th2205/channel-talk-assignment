import React from 'react';
import styled from 'styled-components';

export default function Error({ errorMessage }) {
  return <ErrorMessage>{errorMessage}</ErrorMessage>;
}

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin: 1rem 0;
`;
