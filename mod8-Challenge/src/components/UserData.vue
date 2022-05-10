<template>
  <div><label>Name: </label> <input v-model="userName" type="text" /></div>
  <div><label>Age: </label> <input v-model="age" type="text" /></div>
  <button @click="submitContact">Add</button>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      age: "",
    };
  },
  emits: ["add-contact"],
  methods: {
    submitContact() {
      this.$emit("add-contact", this.userName, this.age);
    },
  },
};
</script>
