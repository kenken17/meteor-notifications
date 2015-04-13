Meteor.publish('pubNotifications', function(opts) {
	var query = {
		read: false
	};

	if (opts.id) {
		query._id = opts.id;
	} else {
		if (opts.userId) {
			query.userId = opts.userId;
		}

		if (opts.type) {
			query.type = opts.type;
		}
	}

	return NotificationsCollection.find(query);
});