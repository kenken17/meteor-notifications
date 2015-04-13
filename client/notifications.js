MNotifications.show = function(opts) {
	Meteor.subscribe('pubNotifications', opts);
};