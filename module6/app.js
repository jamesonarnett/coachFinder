const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "Jameson",
          name: "Jameson Arnett",
          phone: "123 345 5678",
          email: "example@email.com",
        },
        {
          id: "Ricky",
          name: "Ricky Bobby",
          phone: "987 654 3211",
          email: "email@localhost.com",
        },
      ],
    };
  },
  methods: {},
});

////////////////////////////////////////////
////////////////////////////////////////////

app.component("friend-contact", {
  template: `
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">
            {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
          </button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "Jameson",
        name: "Jameson Arnett",
        phone: "123 345 5678",
        email: "example@email.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
