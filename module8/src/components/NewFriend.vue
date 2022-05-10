<template>
  <form @submit.prevent="submitContact">
    <div><label>Name: </label> <input v-model="enteredName" type="text" /></div>
    <div>
      <label>Phone: </label> <input v-model="enteredPhone" type="tel" />
    </div>
    <div>
      <label>Email: </label> <input v-model="enteredEmail" type="email" />
    </div>
    <div><button>Add Contact</button></div>
  </form>
</template>

<script>
export default {
  data() {
    return { enteredName: "", enteredPhone: "", enteredEmail: "" };
  },
  emits: ["add-contact"],
  methods: {
    submitContact() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
