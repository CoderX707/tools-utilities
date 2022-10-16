<script>
export default{
  methods:{
    shareNote(){
      if(this.$store.state.notes.notepad.noteTitle!=''){
        this.$store.dispatch('createNote')
      }
    }
  }
}
</script>
<template>
  <div class="relative mb-2">
    <input
      v-model="$store.state.notes.notepad.noteTitle"
      type="text"
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
      placeholder="Note Title ..."
      required
    >
    <button
      type="button"
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
      @click="shareNote"
    >
      Share
    </button>
  </div>
</template>