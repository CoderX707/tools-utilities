<script>
export default {

}
</script>
<template>
  <div class="text-center pb-2 lg:px-4">
    <div
      class="p-2 cursor-pointer bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex"
      role="alert"
    >
      <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Preview</span>
      <router-link
        v-if="$store.state.notes.notepad.sharedNote?.note?.slug"
        :to="$store.state.notes.notepad.sharedNote?.note?.slug||'#'"
        class="font-semibold mr-2 text-left flex-auto"
      >
        Click to preview your note and share it, This note is available for 24 hours only
      </router-link>
      <svg
        class="fill-current opacity-75 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
      </svg>
    </div>
  </div>
</template>