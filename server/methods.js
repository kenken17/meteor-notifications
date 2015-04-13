Meteor.methods({
	MNotificationsAdd: function(doc) {
		doc = _.extend(doc, {
			read: false,
			createdAt: new Date()
		});

		return NotificationsCollection.insert(doc);
	},

	MNotificationsRead: function(_id) {
		return NotificationsCollection.update({
			_id: _id
		}, {
			$set: {
				read: true
			}
		});
	}
});