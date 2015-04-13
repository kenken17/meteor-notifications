Package.describe({
	name: 'kenken:meteor-notifications',
	summary: 'A simple notifications package.',
	version: '1.0.0',
	git: 'https://github.com/kenken17/meteor-notifications'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	// Meteor dependencies
	api.use('templating');
	api.use('underscore');
	api.use('mongo');

	// Main file
	api.addFiles('lib/notifications.js');

	// Client files
	api.addFiles('client/notifications.js', 'client');
	api.addFiles('client/templates.html', 'client');
	api.addFiles('client/templates.js', 'client');

	// Servers
	api.addFiles('server/publications.js', 'server');
	api.addFiles('server/methods.js', 'server');

	if (api.export) {
		api.export('MNotifications');
	}
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('kenken:meteor-notifications');
	api.addFiles('tests/notifications-tests.js');
});
