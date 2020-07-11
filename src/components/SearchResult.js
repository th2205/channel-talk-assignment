import React from 'react';
import styled from 'styled-components';
import CountryList from './CountryList';

export default function SearchResult({ searchResult, handlRemoveButtonClick }) {
  return (
    <>
      {searchResult.length ? (
        <CountryList
          countries={searchResult}
          handlRemoveButtonClick={handlRemoveButtonClick}
        />
      ) : (
        <Text>검색결과가 없습니다.</Text>
      )}
    </>
  );
}

const Text = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 3rem;
`;
