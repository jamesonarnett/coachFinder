Vue.createApp({
  data() {
    return {
      text: "",
      secondText: "",
    };
  },
  methods: {
    showAlert() {
      alert("Nice course");
    },
    showInput(e) {
      this.text = e.target.value;
    },
    showInputOnEnter(e) {
      this.secondText = e.target.value;
    },
  },
}).mount("#assignment");
