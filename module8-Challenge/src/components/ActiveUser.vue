<template>
  <h2>{{ name }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
};
</script>
