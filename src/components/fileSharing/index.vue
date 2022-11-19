<script>
import Sender from './Sender.vue';
import Receiver from './Receiver.vue';
export default {
    name: 'FileSharing',
    components: {
        Sender,
        Receiver
    },
};
</script>

<template>
  <div class="">
    <div v-if="$store.state.utilites.fileSharing.connctionMethod===0">    
      <h2 class="text-center text-2xl font-bold dark:text-white mb-5">
        Share your files securely
      </h2>
      <div class="flex justify-evenly">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          @click="$store.commit('setConnectionMethod', 1)"
        >
          Sender
        </button>
        <button
          type="button"
          class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          @click="$store.commit('setConnectionMethod', 2)"
        >
          Receiver
        </button>
      </div>
    </div>
    <div v-if="$store.state.utilites.fileSharing.connctionMethod===1"> 
      <Sender />
    </div>
    <div v-if="$store.state.utilites.fileSharing.connctionMethod===2">    
      <Receiver />
    </div>
  </div>
</template>
