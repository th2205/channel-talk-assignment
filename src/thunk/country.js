import {
  getCountriesRequest,
  getCountriesSuccess,
  getCountriesFailure
} from '../constants/actions';
import { fetchCountries } from '../utils/api';

export const loadCountries = () => async (dispatch) => {
  dispatch(getCountriesRequest());

  try {
    const { data } = await fetchCountries();
    dispatch(getCountriesSuccess(data));
  } catch (err) {
    dispatch(getCountriesFailure());
  }
};
