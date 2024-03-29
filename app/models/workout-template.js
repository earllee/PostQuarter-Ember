import DS from 'ember-data';

export default DS.Model.extend({
  user:   DS.belongsTo('user'),
  team:   DS.belongsTo('team'),
  sets:   DS.hasMany('set'),

  notes:  DS.attr('string')
});
