<script>
import InputGroupFirst from './InputGroupFirst.vue';
import InputGroupSecond from './InputGroupSecond.vue';
export default {
  components: {
    InputGroupFirst,
    InputGroupSecond,
  },
  beforeMount() {
    this.$store.dispatch('get_currency_price');
  },
  methods: {
    onChangeCurrencyFirst(currency) {
      const selectedCountryArr = currency.split('-');
      this.$store.state.currencyModule.selectedCurrrencyFrom.country =
        selectedCountryArr[0];
      this.$store.state.currencyModule.selectedCurrrencyFrom.countryCode =
        selectedCountryArr[1];
      this.$store.state.currencyModule.selectedCurrrencyFrom.rate =
        selectedCountryArr[2];
      this.convertCurrency;
    },
    onChangeCurrencySecond(currency) {
      const selectedCountryArr = currency.split('-');
      this.$store.state.currencyModule.selectedCurrrencyTo.country =
        selectedCountryArr[0];
      this.$store.state.currencyModule.selectedCurrrencyTo.countryCode =
        selectedCountryArr[1];
      this.$store.state.currencyModule.selectedCurrrencyTo.rate =
        selectedCountryArr[2];
      this.convertCurrency;
    },
    inputValueChange(currencyValue) {
      this.convertCurrency;
    },
  },
  computed: {
    convertCurrency() {
      if (
        parseFloat(
          this.$store.state.currencyModule.selectedCurrrencyFrom.rate
        ) <
        parseFloat(this.$store.state.currencyModule.selectedCurrrencyTo.rate)
      ) {
        const calculated =
          this.$store.state.currencyModule.currencyInputValue *
          parseFloat(this.$store.state.currencyModule.selectedCurrrencyTo.rate);
        this.$store.state.currencyModule.currencyConvertedInputValue =
          calculated.toFixed(4);
        this.$store.state.currencyModule.currencyFormula = `(${
          this.$store.state.currencyModule.currencyInputValue
        } * ${
          this.$store.state.currencyModule.selectedCurrrencyTo.rate
        } (exchange rate) )   = ${calculated.toFixed(4)}`;
      }
      if (
        parseFloat(
          this.$store.state.currencyModule.selectedCurrrencyFrom.rate
        ) >
        parseFloat(this.$store.state.currencyModule.selectedCurrrencyTo.rate)
      ) {
        const calculated =
          this.$store.state.currencyModule.currencyInputValue /
          parseFloat(
            this.$store.state.currencyModule.selectedCurrrencyFrom.rate
          );
        this.$store.state.currencyModule.currencyConvertedInputValue =
          calculated.toFixed(4);
        this.$store.state.currencyModule.currencyFormula = `(${
          this.$store.state.currencyModule.currencyInputValue
        } / ${
          this.$store.state.currencyModule.selectedCurrrencyFrom.rate
        } (exchange rate) )   = ${calculated.toFixed(4)}`;
      }
      if (
        parseFloat(
          this.$store.state.currencyModule.selectedCurrrencyFrom.rate
        ) ==
        parseFloat(this.$store.state.currencyModule.selectedCurrrencyTo.rate)
      ) {
        this.$store.state.currencyModule.currencyConvertedInputValue =
          this.$store.state.currencyModule.currencyInputValue;
        this.$store.state.currencyModule.currencyFormula = `(${this.$store.state.currencyModule.currencyInputValue} == ${this.$store.state.currencyModule.selectedCurrrencyTo.rate} (exchange rate) )   = ${this.$store.state.currencyModule.currencyInputValue}`;
      }
    },
  },
};
</script>

<template>
  <div>
    <p class="italic text-xl dark:text-gray-400">
      {{ $store.state.currencyModule.currencyInputValue }}
      {{ $store.state.currencyModule.selectedCurrrencyFrom.country }} equals,
    </p>
    <h2 class="text-2xl font-bold dark:text-white">
      {{ $store.state.currencyModule.currencyConvertedInputValue }}
      {{ $store.state.currencyModule.selectedCurrrencyTo.country }}
    </h2>
  </div>

  <small class="text-gray-400">
    Updated At: {{ this.$store.state.currencyModule.currencyWithCountry.date }},
    Base on {{ this.$store.state.currencyModule.currencyWithCountry.base }}
  </small>
  <div class="flex mt-5">
    <InputGroupFirst
      @input-value-change="inputValueChange"
      @change-currency-first="onChangeCurrencyFirst"
    ></InputGroupFirst>
    <h1 class="text-4xl mx-auto">=</h1>
    <InputGroupSecond
      @change-currency-second="onChangeCurrencySecond"
    ></InputGroupSecond>
  </div>
  <p class="text-center font-bold dark:text-gray-300">
    <span class="bg-amber-500 text-white font-bold">Formula:</span>
    {{ $store.state.currencyModule.currencyFormula }}
  </p>
</template>
