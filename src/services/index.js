const users = require('./users/users.service.js');
const cat = require('./cat/cat.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
	app.configure(users);
	app.configure(cat);
};
