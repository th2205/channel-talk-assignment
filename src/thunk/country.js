import {
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILURE
} from '../constants/actionTypes';
import { fetchCountries } from '../utils/api';

const getCountriesRequest = () => ({
  type: GET_COUNTRIES_REQUEST
});

const getCountriesSuccess = (countries) => ({
  type: GET_COUNTRIES_SUCCESS,
  data: countries
});

const getCountriesFailure = () => ({
  type: GET_COUNTRIES_FAILURE
});

export const loadCountries = () => async (dispatch) => {
  dispatch(getCountriesRequest());

  try {
    const { data } = await fetchCountries();
    dispatch(getCountriesSuccess(data));
  } catch (err) {
    dispatch(getCountriesFailure());
  }
};
