<template>
  <h3>{{ counter }}</h3>
</template>

<script>
export default {
  data() {},
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>
