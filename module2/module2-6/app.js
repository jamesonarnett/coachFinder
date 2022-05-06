Vue.createApp({
  data() {
    return {
      userChoice: "",
      btn: true,
      inputBgColor: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userChoice === "user1",
        user2: this.userChoice === "user2",
        visible: this.btn,
        hidden: !this.btn,
      };
    },
  },
  methods: {
    toggleParagraph() {
      this.btn = !this.btn;
    },
  },
}).mount("#assignment");
