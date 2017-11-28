const graphql = require('./graphql/graphql.service.js');
// const graphql = require('./graphql/graphql.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  // app.configure(graphql);
  app.configure(graphql);
};
