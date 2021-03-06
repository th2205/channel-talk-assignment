import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCountries } from '../thunk/country';
import { changeSortOrder, removeCountry } from '../constants/actions';
import CountryList from '../components/CountryList';
import Loading from '../components/Loading';

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
        <Loading />
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
