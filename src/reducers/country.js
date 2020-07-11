import {
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILURE,
  CHANGE_SORT_ORDER,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  SEARCH_COUNTRIES,
  CHANGE_SEARCH_WORD
} from '../constants/actions';

const changeOrder = (countries, targetField, sortState) => {
  if (!sortState) {
    return countries.sort((a, b) => {
      if (isNaN(parseInt(a[targetField]))) {
        return b[targetField] > a[targetField] ? -1 : 1;
      }
      return parseInt(b[targetField]) > parseInt(a[targetField]) ? -1 : 1;
    });
  } else if (sortState === 'ascending') {
    return countries.sort((a, b) => {
      if (isNaN(parseInt(a[targetField]))) {
        return a[targetField] > b[targetField] ? -1 : 1;
      }
      return parseInt(a[targetField]) > parseInt(b[targetField]) ? -1 : 1;
    });
  } else {
    return countries.sort((a, b) => {
      if (isNaN(parseInt(a[targetField]))) {
        return b[targetField] > a[targetField] ? -1 : 1;
      }
      return parseInt(b[targetField]) > parseInt(a[targetField]) ? -1 : 1;
    });
  }
};

const initialState = {
  countries: [],
  searchResult: [],
  searchWord: '',
  nameSort: null,
  alpha2CodeSort: null,
  callingCodesSort: null,
  capitalSort: null,
  regionsSort: null,
  isLoading: false
};

export const country = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        countries: action.data
      };
    case GET_COUNTRIES_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case CHANGE_SORT_ORDER:
      const targetField = action.target;
      const sortState = state[`${targetField}Sort`];

      return {
        ...state,
        countries: changeOrder(state.countries, targetField, sortState),
        [`${targetField}Sort`]: !sortState
          ? 'ascending'
          : sortState === 'ascending'
          ? 'descending'
          : 'ascending'
      };
    case ADD_COUNTRY:
      return {
        ...state,
        countries: [...state.countries, action.country]
      };
    case REMOVE_COUNTRY:
      return {
        ...state,
        countries: state.countries.filter(
          (country) => country.name !== action.countryName
        ),
        searchResult: state.searchResult.filter(
          (country) => country.name !== action.countryName
        )
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        searchResult: action.countries
      };
    case CHANGE_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.text
      };
    default:
      return {
        ...state
      };
  }
};
