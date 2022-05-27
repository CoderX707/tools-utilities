<script>
import { QuillEditor } from '@vueup/vue-quill';
import { ref } from 'vue';
import html2pdf from 'html2pdf.js';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import { pdfFileName } from '../../helpers/Constants.js';
export default {
  components: {
    QuillEditor,
  },

  methods: {
    exportToPDF() {
      const documentPdf = `<div class="content ql-editor">${this.$store.state.notes.notepad.inputValue}</div>`;
      html2pdf(documentPdf, {
        margin: 1,
        filename: pdfFileName,
        image: { type: 'jpeg', quality: 0.99 },
        html2canvas: { dpi: 192 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      });
    },
  },
  computed: {},
};
</script>

<template>
  <QuillEditor
    v-model:content="$store.state.notes.notepad.inputValue"
    class="dark:text-gray-300 dark:border-white"
    content-type="html"
    theme="snow"
    toolbar="full"
    style="height: 70vh"
  />

  <button
    class="float-right dark:text-gray-300 text-gray-500 hover:text-black"
    @click="exportToPDF"
  >
    Export to PDF
  </button>
</template>
