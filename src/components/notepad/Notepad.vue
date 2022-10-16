<script>
import { QuillEditor } from '@vueup/vue-quill';
import html2pdf from 'html2pdf.js';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import InputShare from './InputShare.vue';
import { pdfFileName } from '../../helpers/Constants.js';
import ShowToast from './showToast.vue';
import ToastMessage from '../CommonComponents/ToastMessage.vue';
export default {
  components: {
    QuillEditor,
    InputShare,
    ShowToast,
    ToastMessage
},
  computed: {},
  unmounted() {
    this.$store.commit('clearState');
  },
  methods: {
    exportToPDF() {
      const documentPdf = `<div class="content ql-editor">
        <h1>${this.$store.state.notes.notepad.sharedNote.title}</h1><br/>
        ${this.$store.state.notes.notepad.sharedNote.body}
        </div>`;
      html2pdf(documentPdf, {
        margin: 1,
        filename: pdfFileName,
        image: { type: 'jpeg', quality: 0.99 },
        html2canvas: { dpi: 192 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      });
    },
  },
};
</script>

<template>
  <div v-if="$store.state.notes.notepad.sharedNote!=null">
    <ShowToast />
  </div>
  <ToastMessage
    id="noteError"
    :message="$store.state.notes.notepad.errorMsg"
  />
  <InputShare />
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
