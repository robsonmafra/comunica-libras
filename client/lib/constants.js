if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Comunica LIBRAS',
  DESCRIPTION: 'Comunica LIBRAS tem como objetivo criar uma glossário de sinais, para facilitar a comunição entre regiões do Brasil.'
};
