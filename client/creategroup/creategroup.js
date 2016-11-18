Template.createGroup.onCreated(function(){});
Template.createGroup.onRendered(function(){});
Template.createGroup.events({
	'submit form'(event) {
		event.preventDefault();

		let name = $('[name="name"]', $(event.target)).val();
		let perms = $('[name="perms"]', $(event.target)).val().split(',');

		console.log('createGroup', name, perms);

		Meteor.call('createGroup', name, perms, (err, ret) => {
			if (err) {
				console.log('createGroup', err, ret);
			}
		})
	}
});
Template.createGroup.helpers({});
Template.createGroup.onDestroyed(function(){});