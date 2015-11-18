import Ember from 'ember';

export default Ember.Route.extend({

  // Get model for this route
  model: function() {
    console.log('loading model..');
    return this.store.findAll('team');
  },

  // Set model as 'teams' for route's controller
  setupController: function(controller, model) {
    console.log('setting up controller...');
    controller.set('teams', model);
  }

});
