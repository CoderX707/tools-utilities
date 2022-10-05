<script>
import QrcodeVue from 'qrcode.vue';

export default {
  components: {
    QrcodeVue,
  },
};
</script>
<template>
  <textarea
    v-model="$store.state.qrcode.qrCodeString"
    class="
      form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      mb-4
      dark:bg-gray-700 dark:text-gray-100
      focus:border-blue-600 focus:outline-none
    "
    rows="2"
    placeholder="URL, Text to Generate QR Code"
  />
  <figure class="qrcode mx-auto">
    <qrcode-vue
      :value="$store.state.qrcode.qrCodeString"
      :size="250"
      level="H"
    />
    <img
      class="qrcode__image dark:bg-gray-700 bg-white"
      :src="$store.state.darkLightTheme.logo"
      alt="QR Code"
    >
  </figure>
</template>
<style scoped>
.qrcode {
  display: table;
  font-size: 0;
  border: 2px solid white;
  margin-bottom: 0;
  position: relative;
}
.qrcode__image {
  border: 0.15rem solid #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  height: 20%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
}
</style>
