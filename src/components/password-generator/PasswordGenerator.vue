<script>
import Checkbox from './Checkbox.vue';
import HeaderTitle from '../CommonComponents/HeaderTitle.vue';

export default {
  components: {
    Checkbox,
    HeaderTitle
  },
};
</script>

<template>
  <div>
    <HeaderTitle heading="Password Generator" />
    <div class="relative mt-4">
      <input
        v-model="$store.state.generatePassword.ganeratedPassword"
        type="search"
        :class="{
          'text-green-700':
            $store.state.generatePassword.passwordStrength === 0,
          'text-yellow-500':
            $store.state.generatePassword.passwordStrength === 1,
          'text-red-600': $store.state.generatePassword.passwordStrength === 2,
        }"
        class="
          block
          text-base
          p-4
          w-full
          text-sm text-gray-900
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
        placeholder="Generate strong password"
        required
      >

      <button
        type="submit"
        class="
          text-white
          absolute
          right-2.5
          bottom-2.5
          bg-blue-700
          hover:bg-blue-800
          focus:ring-4 focus:outline-none focus:ring-blue-300
          font-medium
          rounded-lg
          text-sm
          px-4
          py-2
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        "
        @click="$store.commit('generatePassword')"
      >
        Generate
      </button>
    </div>
    <div class="my-4">
      <label
        for="default-range"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >Password Length ( {{ $store.state.generatePassword.passwordLength }} )
      </label>
      <input
        type="range"
        :value="$store.state.generatePassword.passwordLength"
        min="6"
        max="16"
        class="
          w-full
          h-2
          bg-gray-200
          rounded-lg
          appearance-none
          cursor-pointer
          dark:bg-gray-700
        "
        @input="$store.commit('changePasswordLength', $event.target.value)"
      >
    </div>

    <div
      class="
        flex flex-wrap
        -mx-1
        overflow-hidden
        sm:-mx-1
        md:-mx-1
        lg:-mx-1
        xl:-mx-1
      "
    >
      <div
        class="
          my-1
          px-1
          w-1/2
          overflow-hidden
          sm:my-1 sm:px-1 sm:w-1/2
          md:my-1 md:px-1 md:w-1/2
          lg:my-1 lg:px-1 lg:w-1/2
          xl:my-1 xl:px-1 xl:w-1/2
        "
      >
        <Checkbox
          title="Uppercase"
          :checkbox-value="$store.state.generatePassword.isUpperCase"
        />
      </div>

      <div
        class="
          my-1
          px-1
          w-1/2
          overflow-hidden
          sm:my-1 sm:px-1 sm:w-1/2
          md:my-1 md:px-1 md:w-1/2
          lg:my-1 lg:px-1 lg:w-1/2
          xl:my-1 xl:px-1 xl:w-1/2
        "
      >
        <Checkbox
          title="Numbers"
          :checkbox-value="$store.state.generatePassword.isNumeric"
        />
      </div>

      <div
        class="
          my-1
          px-1
          w-1/2
          overflow-hidden
          sm:my-1 sm:px-1 sm:w-1/2
          md:my-1 md:px-1 md:w-1/2
          lg:my-1 lg:px-1 lg:w-1/2
          xl:my-1 xl:px-1 xl:w-1/2
        "
      >
        <Checkbox
          title="Lowercase"
          :checkbox-value="$store.state.generatePassword.isLowerCase"
        />
      </div>

      <div
        class="
          my-1
          px-1
          w-1/2
          overflow-hidden
          sm:my-1 sm:px-1 sm:w-1/2
          md:my-1 md:px-1 md:w-1/2
          lg:my-1 lg:px-1 lg:w-1/2
          xl:my-1 xl:px-1 xl:w-1/2
        "
      >
        <Checkbox
          title="Symbols"
          :checkbox-value="$store.state.generatePassword.isSymbols"
        />
      </div>
    </div>
  </div>
</template>
