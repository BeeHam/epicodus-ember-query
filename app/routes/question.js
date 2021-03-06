import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    saveAnswer(question, params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      question.save();
      this.transitionTo('question');
    },

    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    }
  }
});
