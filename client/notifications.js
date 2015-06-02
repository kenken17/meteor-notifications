MNotifications.show = function(opts) {
	if (opts.id) {
		// first look at the client side notification collection
		var notifications = NotificationsClientCollection.find({
			_id: opts.id
		});

		// if it doesn't have any, go to server
		if (notifications && notifications.count() > 0) {
			return notifications;
		} else {
			Meteor.subscribe('pubNotifications', opts);
		}
	}
};

MNotifications.clear = function(opts) {
	if (opts.type) {
		NotificationsClientCollection.update({
			type: opts.type,
			read: false
		}, {
			$set: {
				read: true
			}
		}, {
			multi: true
		});
	}
};