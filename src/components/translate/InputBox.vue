<script>
export default {
  methods: {
    onSelectChangeFrom(event) {
      this.$store.state.languageModule.fromLang = event.target.value;
      this.$store.dispatch('startTranslate');
    },
    onSelectChangeTo(event) {
      this.$store.state.languageModule.toLang = event.target.value;
      this.$store.dispatch('startTranslate');
    },
    inputChange(event) {
      this.$store.state.languageModule.translateString = event.target.value;
      this.$store.dispatch('startTranslate');
    },
  },
};
</script>

<template>
  <div class="flex mt-5">
    <select
      @change="onSelectChangeFrom($event)"
      class="
        bg-gray-50
        border border-gray-300
        text-gray-900
        mb-6
        text-sm
        rounded-lg
        focus:ring-blue-500 focus:border-blue-500
        block
        w-full
        p-2.5
        dark:bg-gray-700
        dark:border-gray-600
        dark:placeholder-gray-400
        dark:text-white
        dark:focus:ring-blue-500
        dark:focus:border-blue-500
      "
    >
      <option
        v-for="translateLang in $store.state.languageModule.translateLanguages"
        :value="translateLang.code"
      >
        {{ translateLang.name }} - ({{ translateLang.nativeName }})
      </option>
    </select>
    <h1 class="text-3xl mx-3 text-gray-400">To</h1>
    <select
      @change="onSelectChangeTo($event)"
      class="
        bg-gray-50
        border border-gray-300
        text-gray-900
        mb-6
        text-sm
        rounded-lg
        focus:ring-blue-500 focus:border-blue-500
        block
        w-full
        p-2.5
        dark:bg-gray-700
        dark:border-gray-600
        dark:placeholder-gray-400
        dark:text-white
        dark:focus:ring-blue-500
        dark:focus:border-blue-500
      "
    >
      <option
        v-for="translateLang in $store.state.languageModule.translateLanguages"
        :value="translateLang.code"
      >
        {{ translateLang.name }} - ({{ translateLang.nativeName }})
      </option>
    </select>
  </div>

  <textarea
    @keyup="inputChange($event)"
    class="
      form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      dark:bg-gray-700 dark:text-gray-100
      focus:border-blue-600 focus:outline-none
    "
    rows="3"
    placeholder="Hello नमस्कार hola"
    >{{ $store.state.languageModule.translateString }}</textarea
  >
</template>
