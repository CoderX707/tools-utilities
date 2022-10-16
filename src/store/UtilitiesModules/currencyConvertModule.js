import {
  currencyLocalstorageKey,
  get_currency_api_endpoint,
} from '../../helpers/Constants';
import { apiGETcall } from '../../helpers/api_call';
import { countryList } from '../../helpers/country';

const currencyConvertModule = {
  state() {
    return {
      currencyWithCountry: [],
      currencyInputValue: 0,
      selectedCurrrencyFrom: {
        country: 'United States Dollar',
        countryCode: 'USD',
        rate: 0,
      },
      selectedCurrrencyTo: {
        country: 'United States Dollar',
        countryCode: 'USD',
        rate: 0,
      },
      currencyConvertedInputValue: 0,
      currencyFormula: '',
    };
  },
  mutations: {
    get_currency(state, data) {
      state.currencyWithCountry = data;
    },
  },
  actions: {
    async get_currency_price({ commit }) {
      const storage = localStorage.getItem(currencyLocalstorageKey);
      if (storage) {
        commit('get_currency', JSON.parse(storage));
      } else {
        const res = await apiGETcall(get_currency_api_endpoint);
        if (res.status == 200) {
          localStorage.setItem(
            currencyLocalstorageKey,
            JSON.stringify(res.data)
          );
          commit('get_currency', res.data);
        }
      }
    },
  },
  getters: {},
};

export default currencyConvertModule;
