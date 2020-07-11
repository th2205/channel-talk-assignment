import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { ICON_SIZE } from '../constants/constant';

export default function SearchForm({ searchWord, onSearchWordChange }) {
  return (
    <SearchFormContainter>
      <AiOutlineSearch size={ICON_SIZE} />
      <SearchInput
        type="text"
        value={searchWord}
        onChange={(e) => onSearchWordChange(e.target.value)}
      />
    </SearchFormContainter>
  );
}

const SearchFormContainter = styled.div`
  margin: 3rem auto;
  width: 50%;
  max-width: 700px;
  height: 3rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  outline: none;
  font-size: 1.5rem;
`;
