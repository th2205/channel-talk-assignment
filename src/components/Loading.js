import React from 'react';
import styled from 'styled-components';
import loadingImg from '../assets/loading.svg';

export default function Loading() {
  return (
    <LoadingContainer>
      <Img src={loadingImg} alt="loading-img" />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  width: 100%;
  margin: 15% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Img = styled.img`
  width: 5%;
`;
