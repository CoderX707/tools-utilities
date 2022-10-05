<script>
import html2pdf from 'html2pdf.js';

export default {
  name:"InputField",
  methods: {
    exportToPDF() {
      const documentPdf = document.getElementById('qr-code');
      html2pdf(documentPdf, {
        margin: 1,
        filename: 'QR-Code',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      });
    },
  }
}
</script>
<template>
  <div class="relative mb-4">
    <textarea 
      v-model="$store.state.qrcode.qrCodeString" 
      class="
        block
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
      rows="1" 
      placeholder="URL, Text to Generate QR Code" 
      required
    />
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
      @click="exportToPDF"
    >
      Download
    </button>
  </div>
</template>