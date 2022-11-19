<script>
import io from 'socket.io-client';
import { socket_io_serverUrl } from '../../helpers/Constants';
import FileSharingLoader from './FileSharingLoader.vue';

export default {
  name: "Sender",
  components: { FileSharingLoader },
  data: function () {
    return {
      fileName: "",
      complatedPercent: 0
    };
  },
  created() {
    this.socketInstance = io(socket_io_serverUrl);
  },
  unmounted() {
    this.socketInstance.disconnect();
  },
  mounted() {
    this.$store.state.utilites.fileSharing.senderID = this.$store.getters.generateID;
    let self = this;
    this.socketInstance.emit("sender-join", {
      uid: self.$store.state.utilites.fileSharing.senderID
    });
    this.socketInstance.on("init", function (uid) {
      self.$store.state.utilites.fileSharing.receiverID = uid;
      self.$store.state.utilites.fileSharing.isConnected = true;
    });
  },
  methods: {
    uploadFile(e) {
      let self = this;
      let file = e.target.files[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = function (e) {
        const buffer = new Uint8Array(reader.result);
        self.fileName = file.name;
        self.shareFile({
          filename: file.name,
          total_buffer_size: buffer.length,
          buffer_size: self.$store.state.utilites.fileSharing.sendingSpeed,
        }, buffer);
      };
      reader.readAsArrayBuffer(file);
    },
    shareFile(metadata, buffer) {
      let self = this;
      this.socketInstance.emit("file-meta", {
        uid: self.$store.state.utilites.fileSharing.receiverID,
        metadata: metadata
      });
      this.socketInstance.on("fs-share", function () {
        let chunk = buffer.slice(0, metadata.buffer_size);
        buffer = buffer.slice(metadata.buffer_size, buffer.length);
        self.complatedPercent = Math.trunc(((metadata.total_buffer_size - buffer.length) / metadata.total_buffer_size * 100));
        if (chunk.length != 0) {
          self.socketInstance.emit("file-raw", {
            uid: self.$store.state.utilites.fileSharing.receiverID,
            buffer: chunk
          });
        }
        else {
          console.log("Sent file successfully");
        }
      });
    }
  }
};
</script>

<template>
  <div>
    <div v-if="$store.state.utilites.fileSharing.isConnected">
      <label
        for="speed"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Sending speed:</label>
      <select
        id="speed"
        class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        @change="$store.commit('changeSpeed', $event.target.value)"
      >
        <option
          selected
          value="10240"
        >
          10Mbps
        </option>
        <option value="20480">
          20Mbps
        </option>
        <option value="51200">
          50Mbps
        </option>
        <option value="81920">
          80Mbps
        </option>
      </select>
      <input
        type="file"
        class=""
        @change="uploadFile"
      >
      <FileSharingLoader
        :file-name="fileName"
        :percent="complatedPercent"
      />
    </div>
    <div v-else>
      <h2 class="text-center text-lg font-bold dark:text-white mb-3">
        Share below unique ID with receiver to create connection:
      </h2>
      <span
        class="
          block
          p-4
          cursor-text
          text-center
          w-full
          text-sm text-gray-900
          bg-gray-50
          rounded-lg
          border border-gray-300
          dark:bg-gray-800
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-red-500
          dark:focus:border-red-500
        "
      >
        {{ $store.state.utilites.fileSharing.senderID }}
      </span>
    </div>
  </div>
</template>
