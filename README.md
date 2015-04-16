meteor-notifications
================

A simple notifications package.

## Installation

```bash
$ meteor add kenken:meteor-notifications
```

There will be two new collections being created. One running on the client (beowser), the other one running in both client and server. A `default` template is provided.

##Methods
Below are current available methods.

####MNotifications.add(doc, [callback])
The `add()` method is to add a new notification into the collection. The structure of the doc for `default` template is as below:

```json
 {
	userId: Meteor.userId(),
	type: 'notificationType',
	data: {
			class: 'alert alert-success',
			message: 'Retailer update info successfully.'
		}
	}
```

If the `userId` property is omitted, the collection will run on client only.

---

####MNotifications.read(notificationId)
Mark the notification (via `notificationId `) as read. Notification marked as read, will not be subscribed.

---

####MNotifications.show(options)
Show the notification(s). Only unread notifcatio is subscribed under this method. The `options` could be:

```json
{
	id: '',
	type: '',
	userId: ''
}
```

If the notification `id` is given, only that notification will be subscribed. Followed by the `type` and `userId`. 

---

Combine above methods, we can `add`, `show`, and set the notification as `read`.

*Examples:*

```javascript
// prepare the data for notification
var notification = {
	userId: Meteor.userId(),
	type: 'updateRetailer',
	data: {
		class: 'alert alert-success',
		message: 'Retailer update info successfully.'
	}
};

MNotifications.add(notification, function(err, id) {
	// Show the notification immediately
	MNotifications.show({
		id: id
	});

	// after 7 secs set it to read
	Meteor.setTimeout(function() {
		// set it to read
		MNotifications.read(id);
	}, 7000);
});
```

```html
// The markup for showing the notification
{{> MNotificationsTemplate style='default'}}
```

##Templates

Currently only support one `default` template. The template strcuture as below:

```html
<div class="container notification notification-default">
	{{#each notifications}}
	<div class="row">
		<div class="col-md-12">
			<div class="{{data.class}}">{{data.message}}</div>
		</div>
	</div>
	{{/each}}
</div>
```



