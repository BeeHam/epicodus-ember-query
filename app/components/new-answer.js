import Ember from 'ember';

export default Ember.Component.extend({
  addAnswer: false,

  actions: {
    showAnswerForm() {
      this.set('addAnswer', true);
    },

    saveAnswer(question) {
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        date: Date.now(),
        question: question
      }
      this.set('addAnswer', false),
      this.sendAction('saveAnswer', question, params)
    }
  }
});
