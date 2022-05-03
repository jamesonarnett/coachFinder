Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course.",
      courseGoalB: "Master Vue and build awesome apps",
      myName: "Jameson Arnett",
      myAge: 25,
      favoriteNumber: Math.random().toFixed(2),
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
}).mount("#user-goal");
