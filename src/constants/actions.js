export const GET_COUNTRIES_REQUEST = 'GET_COUNTRIES_REQUEST';
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
export const GET_COUNTRIES_FAILURE = 'GET_COUNTRIES_FAILURE';
export const CHANGE_SORT_ORDER = 'CHANGE_SORT_ORDER';
export const ADD_COUNTRY = 'ADD_COUNTRY';
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const CHANGE_SEARCH_WORD = 'CHANGE_SEARCH_WORD';

export const getCountriesRequest = () => ({
  type: GET_COUNTRIES_REQUEST
});

export const getCountriesSuccess = (countries) => ({
  type: GET_COUNTRIES_SUCCESS,
  data: countries
});

export const getCountriesFailure = () => ({
  type: GET_COUNTRIES_FAILURE
});

export const changeSortOrder = (target) => ({
  type: CHANGE_SORT_ORDER,
  target
});

export const addCountry = (country) => ({
  type: ADD_COUNTRY,
  country
});

export const removeCountry = (countryName) => ({
  type: REMOVE_COUNTRY,
  countryName
});

export const searchCountries = (countries) => ({
  type: SEARCH_COUNTRIES,
  countries
});

export const changeSearchWord = (text) => ({
  type: CHANGE_SEARCH_WORD,
  text
});
