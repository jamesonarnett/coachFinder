const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Arnett";
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    setName(e) {
      this.name = e.target.value;
    },
    submitForm(e) {
      // e.preventDefault();
      alert("We like Vue ;)");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
    // outputFullName() {
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Arnett";
    // },
  },
});

app.mount("#events");
