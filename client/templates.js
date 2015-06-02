Template.MNotificationsTemplate.helpers({
    'style': function() {
		switch(Template.instance().data.style) {
			case 'default':
				return '_MNotificationsDefault';
				break;
		}
    }
});

Template._MNotificationsDefault.onRendered(function() {
	var EVENTS = 'webkitTransitionEnd oTransitionEnd transitionEnd msTransitionEnd transitionend';

	this.firstNode._uihooks = {
		//insertElement: function(node, next) {
		//	$(node).addClass('off').insertBefore(next);
		//
		//	Tracker.afterFlush(function() {
		//		$(node).removeClass('off');
		//	});
		//},

		removeElement: function(node) {
			$(node).addClass('off').on(EVENTS, function() {
			    this.remove();
			});
		}
	};
});

Template._MNotificationsDefault.helpers({
	notifications: function() {
		var notificationsServer = NotificationsCollection.find({
			read: false
		}, {
			sort: {
				createdAt: -1
			}
		}).fetch();

		var notificationsClient = NotificationsClientCollection.find({
			read: false
		}, {
			sort: {
				createdAt: -1
			}
		}).fetch();

		return _.union(notificationsClient, notificationsServer)
	}
});

Template._MNotificationsDefault.events({
    'click .btn-close-message': function(e) {
        e.preventDefault();

		MNotifications.read(this._id);
    }
});

