export default {
  increment(context, payload) {
    setTimeout(() => {
      context.commit('increment', payload);
    }, [2000]);
  },
  increase(context, payload) {
    context.commit('increase', payload);
  },
};
