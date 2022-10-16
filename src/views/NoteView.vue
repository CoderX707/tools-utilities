<script>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import html2pdf from 'html2pdf.js';

import { pdfFileName } from '../helpers/Constants';
import NotFound from './NotFound.vue'

export default {
  components: {
    QuillEditor,
    NotFound
  },
  beforeCreate() {
    this.$store.dispatch('getNote', this.$route.params.slug)
  },
  methods: {
    exportToPDF() {
      const documentPdf = `<div class="content ql-editor">
        <h1>${this.$store.state.notes.notepad.sharedNote.title}</h1>
        ${this.$store.state.notes.notepad.sharedNote.body}
        </div>`;
      html2pdf(documentPdf, {
        margin: 1,
        filename: pdfFileName,
        image: { type: 'jpeg', quality: 0.99 },
        html2canvas: { dpi: 192 },
        jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' },
      });
    },
  },
}
</script>
<template>
  <div v-if="$store.state.notes.notepad.isLoading">
    loading...
  </div>
  <div v-else-if="$store.state.notes.notepad.sharedNote==null">
    <NotFound />
  </div>
  <div
    v-else
    class="container p-6 lg:w-5/6 mx-auto shadow-lg rounded-lg"
  >
    <div class="relative mb-2">
      <span
        class="
          block
          p-4
          w-full
          text-sm text-gray-900
          bg-gray-50
          rounded-lg
          border border-gray-300
          focus:ring-red-500 focus:border-red-500
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-red-500
          dark:focus:border-red-500
        "
      >
        {{ $store.state.notes.notepad.sharedNote.title }}
      </span>
      <button
        type="button"
        class="
          text-white
          absolute
          right-2.5
          bottom-2.5
          bg-red-700
          hover:bg-red-800
          focus:ring-4 focus:outline-none focus:ring-red-300
          font-medium
          rounded-lg
          text-sm
          px-4
          py-2
          dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800
        "
        @click="$store.dispatch('deleteNote',$store.state.notes.notepad.sharedNote.id)"
      >
        Delete
      </button>
    </div>
    <QuillEditor
      v-model:content="$store.state.notes.notepad.sharedNote.body"
      class="dark:text-gray-300 dark:border-white"
      content-type="html"
      theme="snow"
      toolbar="full"
      style="height: 70vh"
      :read-only="true"
    />
    <button
      class="float-right dark:text-gray-300 text-gray-500 hover:text-black"
      @click="exportToPDF"
    >
      Export to PDF
    </button>
  </div>
</template>