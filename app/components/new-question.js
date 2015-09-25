import Ember from 'ember';

export default Ember.Component.extend({
  addQuestion: false,

  actions: {
    showQuestionForm() {
      this.set('addQuestion', true);
    },

    save() {
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        notes: this.get('notes')
      };
      this.set('addQuestion', false),
      this.sendAction('save', params)
    }
  }
});
