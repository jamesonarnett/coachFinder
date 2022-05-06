Vue.createApp({
  data() {
    return {
      goals: [],
      inputGoal: "",
      hideShowList: true,
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputGoal);
    },
    hideList() {
      this.hideShowList = !this.hideShowList;
    },
  },
}).mount("#assignment");
