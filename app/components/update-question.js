import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,

  actions: {
    showUpdateForm() {
      this.set('showUpdateForm', true);
    },

    update(question) {
      var params = {
        name: this.get('name'),
        content: this.get('content'),
        notes: this.get('notes')
      };
      this.set('showUpdateForm', false);
      this.sendAction('update', question, params);
    }
  }
});
