<script>
import QrcodeVue from 'qrcode.vue';
import InputField from './InputField.vue';

export default {
  components: {
    QrcodeVue,
    InputField
}
};
</script>
<template>
  <InputField />
  <figure 
    id="qr-code" 
    class="qrcode mx-auto"
  >
    <qrcode-vue
      :value="$store.state.qrcode.qrCodeString"
      :size="300"
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
