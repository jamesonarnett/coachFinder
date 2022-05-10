<template>
  <section>
    <active-user
      v-for="contact in contacts"
      :key="contact.id"
      :name="contact.name"
      :age="contact.age"
    ></active-user>
    <user-data @add-contact="updateUserData"></user-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contacts: [{ id: "jameson", name: "jameson arnett", age: "25" }],
    };
  },
  methods: {
    // addUser(name, age) {
    //   const newUser = {
    //     id: new Date().toISOString(),
    //     name: name,
    //     age: age,
    //   };
    //   this.contacts.push(newUser);
    // },
    updateUserData(name, age) {
      this.contacts[0] = {
        id: new Date().toISOString(),
        name: name,
        age: age,
      };
    },
  },
};
</script>
