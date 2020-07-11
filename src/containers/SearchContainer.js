import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchCountries,
  changeSearchWord,
  removeCountry
} from '../constants/actions';
import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';

export default function SearchContainer({ history }) {
  const { countries, searchResult, searchWord } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();

  const handleSearchWordChange = useCallback(
    (text) => {
      dispatch(changeSearchWord(text));
    },
    [dispatch]
  );

  const handlRemoveButtonClick = (countryName) => {
    dispatch(removeCountry(countryName));
  };

  const filterCountries = () => {
    return countries.filter((country) => {
      for (let key in country) {
        const value = country[key];

        if (Array.isArray(value)) {
          for (let el in value) {
            const lowerCase = value[el].toLowerCase();
            if (lowerCase.includes(searchWord)) return countries;
          }
        } else {
          const lowerCase = country[key].toLowerCase();
          if (lowerCase.includes(searchWord)) return countries;
        }
      }
    });
  };

  useEffect(() => {
    if (!searchWord) {
      history.push('/search');
      dispatch(searchCountries([]));
    } else {
      history.push(`/search?q=${searchWord}`);
      dispatch(searchCountries(filterCountries()));
    }
  }, [searchWord]);

  return (
    <>
      <SearchForm
        searchWord={searchWord}
        onSearchWordChange={handleSearchWordChange}
      />
      <SearchResult
        searchResult={searchResult}
        handlRemoveButtonClick={handlRemoveButtonClick}
      />
    </>
  );
}
