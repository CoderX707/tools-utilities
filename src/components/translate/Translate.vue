<script>
import InputBox from './InputBox.vue';
export default {
  components: {
    InputBox,
  },
};
</script>
<template>
<p class="font-bold text-gray-400 text-2xl text-center">Translate</p>
  <InputBox />
  <p class="bg-slate-100 p-2 my-3 rounded-lg text-gray-400">
    {{ $store.state.languageModule.englishTonativeLang }}
  </p>
  <p class="bg-gray-100 p-2 rounded-lg font-bold text-gray-400">
    {{ $store.state.languageModule.translatedString }}
  </p>
</template>
