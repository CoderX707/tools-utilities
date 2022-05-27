<script>
import InputSelectGroupFirst from './InputSelectGroupFirst.vue';
import InputSelectGroupSecond from './InputSelectGroupSecond.vue';
import {
  tempratureCalculations,
  lengthCalculations,
} from '../../helpers/calculation.js';

export default {
  components: {
    InputSelectGroupFirst,
    InputSelectGroupSecond,
  },
  computed: {
    calculate() {
      if (this.$store.state.converter.selectedConversion === 'Temperature') {
        const result = tempratureCalculations(
          this.$store.state.converter.selectedOptionFrom,
          this.$store.state.converter.selectedOptionTo,
          this.$store.state.converter.firstInputValue
        );
        this.$store.state.converter.secondInputValue = result.result;
        this.$store.state.converter.formula = result.formula;
      }
      if (this.$store.state.converter.selectedConversion === 'Length') {
        const result = lengthCalculations(
          this.$store.state.converter.selectedOptionFrom,
          this.$store.state.converter.selectedOptionTo,
          this.$store.state.converter.firstInputValue
        );
        this.$store.state.converter.secondInputValue = result.result;
        this.$store.state.converter.formula = result.formula;
      }
    },
  },
  methods: {
    inputValueChange(inputValue) {
      this.$store.state.converter.firstInputValue = parseFloat(inputValue);
      this.calculate;
    },
    selectValueChange(selectedValue) {
      this.$store.state.converter.selectedOptionFrom = selectedValue;
      this.calculate;
    },
    onSelect(event) {
      this.$store.state.converter.selectedConversion = event.target.value;
      if (this.$store.state.converter.selectedConversion === 'Temperature') {
        this.$store.state.converter.selectedConverterOptions =
          this.$store.state.converter.temperatureOptions;
        this.$store.state.converter.selectedOptionFrom =
          this.$store.state.converter.temperatureOptions[0];
        this.$store.state.converter.selectedOptionTo =
          this.$store.state.converter.temperatureOptions[1];
        this.calculate;
      }
      if (this.$store.state.converter.selectedConversion === 'Length') {
        this.$store.state.converter.selectedConverterOptions =
          this.$store.state.converter.lengthOptions;
        this.$store.state.converter.selectedOptionFrom =
          this.$store.state.converter.lengthOptions[0];
        this.$store.state.converter.selectedOptionTo =
          this.$store.state.converter.lengthOptions[1];
        this.calculate;
      }
    },
    onSelectChangeSecond(secondSelected) {
      this.$store.state.converter.selectedOptionTo = secondSelected;
      this.calculate;
    },
  },
};
</script>

<template>
  <div>
    <label
      for="large"
      class="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400"
      >Choose to convert</label
    >
    <select
      @change="onSelect($event)"
      v-model="$store.state.converter.selectedConversion"
      class="
        block
        py-3
        px-4
        w-full
        text-base text-gray-900
        bg-gray-50
        rounded-lg
        border border-gray-300
        focus:ring-blue-500 focus:border-blue-500
        dark:bg-gray-700
        dark:border-gray-600
        dark:placeholder-gray-400
        dark:text-white
        dark:focus:ring-blue-500
        dark:focus:border-blue-500
      "
    >
      <option
        v-for="option in $store.state.converter.selectOptions"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
  <div class="flex mt-5">
    <InputSelectGroupFirst
      @input-value-change="inputValueChange"
      @select-value-change="selectValueChange"
    ></InputSelectGroupFirst>
    <h1 class="text-4xl mx-auto">=</h1>
    <InputSelectGroupSecond
      @select-value-change-second="onSelectChangeSecond"
    ></InputSelectGroupSecond>
  </div>

  <p class="text-center font-bold dark:text-gray-300">
    <span class="bg-amber-500 text-white font-bold">Formula:</span>
    {{ $store.state.converter.formula }}
  </p>
</template>
