Template.MNotificationsTemplate.helpers({
    'style': function() {
		switch(Template.instance().data.style) {
			case 'default':
				return '_MNotificationsDefault';
				break;
		}
    }
});

Template._MNotificationsDefault.helpers({
	notifications: function() {
		var notificationsServer = NotificationsCollection.find({
			read: false
		}).fetch();

		var notificationsClient = NotificationsClientCollection.find({
			read: false
		}).fetch();

		return _.union(notificationsClient, notificationsServer)
	}
});

