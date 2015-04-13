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
		return NotificationsCollection.find();
	}
});

