Template.permToUser.onCreated(function(){});
Template.permToUser.onRendered(function(){});
Template.permToUser.events({
	'submit form'(event) {
		event.preventDefault();

		let perm = $('[name="perm"]', $(event.target)).val();
		let user = $('[name="user"]', $(event.target)).val();

		console.log('permToUser', perm, user);

		Meteor.call('addPermissionToUser', perm, user, (err, ret) => {
			if (err) {
				console.log('addPermissionToUser', err, ret);
			}
		});
	}
});
Template.permToUser.helpers({});
Template.permToUser.onDestroyed(function(){});