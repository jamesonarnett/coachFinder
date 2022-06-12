<template>
  <span class="badge" :class="type">
    {{ title }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  copmuted: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #4d3966;
  color: white;
}

.backend {
  background-color: #314bbd;
  color: white;
}

.career {
  background-color: #b94da2;
  color: white;
}
</style>
