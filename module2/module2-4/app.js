Vue.createApp({
  data() {
    return {
      finalNum: 0,
      text: "",
    };
  },
  watch: {
    finalNum() {
      if (this.finalNum < 37) {
        this.text = "Not there yet!";
      } else if (this.finalNum > 37) {
        this.text = "Too much!";

        const that = this;
        setTimeout(() => {
          that.finalNum = 0;
        }, 2000);
      } else {
        this.text = "Just right!";
      }
    },
  },
  methods: {
    addOne() {
      this.finalNum++;
    },
    addFive() {
      this.finalNum = this.finalNum + 5;
    },
  },
}).mount("#assignment");
