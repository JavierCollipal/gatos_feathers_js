const { Service } = require('feathers-mongoose');

exports.Cat = class Cat extends Service {
	adoptOne(user, catId) {
		console.log(typeof catId);
		console.log(typeof user);
	}
};
