MNotifications = MNotifications || {};

NotificationsCollection = new Mongo.Collection('MNotifications');

var add = function(doc, cb) {
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
};

var read = function(id, cb) {
	Meteor.call('MNotificationsRead', id, function(err, id) {
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
};

MNotifications.add = add;
MNotifications.read = read;

