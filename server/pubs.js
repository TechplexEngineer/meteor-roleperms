

Meteor.publish('_allUsers', function() {
	return Meteor.users.find();
});

Meteor.publish('_allGroups', function() {
	return Meteor.groups.find();
});