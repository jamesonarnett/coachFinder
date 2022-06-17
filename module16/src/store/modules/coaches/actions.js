export default {
  registerCoach(context, data) {
    const coachData = {
      //hardcode id temporarily
      id: 'c3',
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    context.commit('registerCoach', coachData);
  },
};
