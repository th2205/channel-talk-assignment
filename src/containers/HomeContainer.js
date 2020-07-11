import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCountries } from '../thunk/country';
import { changeSortOrder, removeCountry } from '../reducers/country';
import CountryList from '../components/CountryList';

export default function HomeContainer() {
  const { countries, isLoading } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  const handlFieldClick = (e) => {
    dispatch(changeSortOrder(e.target.textContent));
  };

  const handlRemoveButtonClick = (countryName) => {
    dispatch(removeCountry(countryName));
  };

  useEffect(() => {
    if (!countries.length) dispatch(loadCountries());
  }, [dispatch]);

  return (
    <>
      {isLoading || !countries.length ? (
        <div>loading...</div>
      ) : (
        <CountryList
          countries={countries}
          onFieldClick={handlFieldClick}
          handlRemoveButtonClick={handlRemoveButtonClick}
        />
      )}
    </>
  );
}
