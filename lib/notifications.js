MNotifications = MNotifications || {};

// Client only collection to show immediate notification
NotificationsClientCollection = new Mongo.Collection('MNotificationsClient', {connection: null});

NotificationsCollection = new Mongo.Collection('MNotifications');

var add = function(doc, cb) {
	if (!doc.userId) {
		doc = _.extend(doc, {
			read: false,
			createdAt: new Date()
		});

		NotificationsClientCollection.insert(doc, function(err, id) {
			if (err) {
				if (cb) {
					return cb(err);
				} else {
					throw new Error(err);
				}
			} else {
				if (cb) {
					return cb(null, id);
				}
			}
		});
	} else {
		Meteor.call('MNotificationsAdd', doc, function(err, id) {
			if (err) {
				if (cb) {
					return cb(err);
				} else {
					throw new Error(err);
				}
			} else {
				if (cb) {
					return cb(null, id);
				}
			}
		});
	}
};

var read = function(id) {
	NotificationsClientCollection.update({
		_id: id
	}, {
		$set: {
			read: true
		}
	}, function(err, row) {
		if (err) throw new Error(err);

		// if the row is not set, go to server and grab the notification
		if (!row) {
			Meteor.call('MNotificationsRead', id, function(err) {
				if (err) throw new Error(err);
			});
		}
	});
};

MNotifications.add = add;
MNotifications.read = read;

