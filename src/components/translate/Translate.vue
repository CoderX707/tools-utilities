<script>
import InputBox from './InputBox.vue';
import HeaderTitle from '../CommonComponents/HeaderTitle.vue';
export default {
  components: {
    InputBox,
    HeaderTitle,
  },
};
</script>
<template>
  <HeaderTitle heading="Translate" />
  <InputBox />
  <p class="bg-slate-100 p-2 my-3 rounded-lg text-gray-400 dark:bg-gray-700 dark:text-gray-100">
    {{ $store.state.languageModule.englishTonativeLang }}
  </p>
  <p class="bg-gray-100 p-2 rounded-lg font-bold text-gray-400 dark:bg-gray-700 dark:text-gray-100">
    {{ $store.state.languageModule.translatedString }}
  </p>
</template>
