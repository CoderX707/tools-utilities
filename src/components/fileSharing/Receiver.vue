<script>
import io from 'socket.io-client';
import download from 'downloadjs';

import { socket_io_serverUrl } from '../../helpers/Constants';
import FileSharingLoader from './FileSharingLoader.vue';

export default {
  name: "Receiver",
  components: { FileSharingLoader },
  data: function () {
    return {
      fileName: '',
      complatedPercent: 0,
    };
  },
  created() {
    this.socketInstance = io(socket_io_serverUrl);
  },
  unmounted() {
    this.socketInstance.disconnect();
  },
  methods: {
    handelConnect() {
      let self = this;
      this.socketInstance.emit("receiver-join", {
        sender_uid: self.$store.state.utilites.fileSharing.senderID,
        uid: self.$store.state.utilites.fileSharing.receiverID
      });
      this.$store.state.utilites.fileSharing.isConnected = true;
      let fileShare = {};
      this.socketInstance.on("fs-meta", function (metadata) {
        fileShare.metadata = metadata;
        self.fileName = metadata.filename;
        fileShare.transmitted = 0;
        fileShare.buffer = [];
        self.socketInstance.emit("fs-start", {
          uid: self.$store.state.utilites.fileSharing.senderID
        });
      });
      this.socketInstance.on("fs-share", function (buffer) {
        fileShare.buffer.push(buffer);
        fileShare.transmitted += buffer.byteLength;
        self.complatedPercent = Math.trunc(fileShare.transmitted / fileShare.metadata.total_buffer_size * 100);
        if (fileShare.transmitted == fileShare.metadata.total_buffer_size) {
          download(new Blob(fileShare.buffer), fileShare.metadata.filename);
          fileShare = {};
        }
        else {
          self.socketInstance.emit("fs-start", {
            uid: self.$store.state.utilites.fileSharing.senderID
          });
        }
      });
    }
  }
}
</script>
<template>
  <div>
    <div v-if="$store.state.utilites.fileSharing.isConnected">
      Downloading File:
      <FileSharingLoader
        :percent="complatedPercent"
        :file-name="fileName"
      />
    </div>
    <div v-else>
      <h2 class="text-center text-md font-bold dark:text-white mb-5">
        Enter sender ID to connect with the sender:
      </h2>
      <div class="relative mb-2">
        <input
          v-model="$store.state.utilites.fileSharing.senderID"
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
            dark:bg-gray-800
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          placeholder="XXX - XXX - XXX - XXX - XXX "
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
          @click="handelConnect"
        >
          Connect
        </button>
      </div>
    </div>
  </div>
</template>