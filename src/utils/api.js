import axios from 'axios';

export function fetchCountries() {
  return axios.get(
    'https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes'
  );
}
