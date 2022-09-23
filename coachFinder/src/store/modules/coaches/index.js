import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Jameson',
          lastName: 'Arnett',
          areas: ['frontend', 'backend', 'career'],
          description:
            'I am Jameson. Let me help you become a developer as well!',
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Jimmy',
          lastName: 'James',
          areas: ['frontend', 'career'],
          description:
            'I am Jimmy and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
