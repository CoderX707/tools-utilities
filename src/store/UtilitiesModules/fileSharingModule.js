const moduleFileSharing = {
  state() {
    return {
      // connctionMethod: 0 - Not choosed method, 1 - Sender, 2 - Receiver
      connctionMethod: 0,
      senderID:'',
      receiverID:'',
      isConnected:false,
      sendingSpeed:10240
    };
  },
  mutations: {
    setConnectionMethod(state, connection) {
      state.connctionMethod = connection;
    },
    changeSpeed(state, speed){
      state.sendingSpeed = speed;
    }
  },
  actions: {},
  getters: {
    generateID() {
      return `${Math.trunc(Math.random() * 999)}-${Math.trunc(Math.random() * 999)}-${Math.trunc(Math.random() * 999)}-${Math.trunc(Math.random() * 999)}-${Math.trunc(Math.random() * 999)}`;
    },
  },
};

export default moduleFileSharing;
