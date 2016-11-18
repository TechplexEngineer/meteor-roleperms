Template.permToGroup.onCreated(function(){});
Template.permToGroup.onRendered(function(){});
Template.permToGroup.events({
	'submit form'(event) {
		event.preventDefault();

		let perm = $('[name="perm"]', $(event.target)).val();
		let group = $('[name="group"]', $(event.target)).val();

		Meteor.call('addPermissionToGroup', perm, group, (err, ret) => {
			if (err) {
				console.log('addPermissionToGroup', err, ret);
			}
		});
	}
});
Template.permToGroup.helpers({});
Template.permToGroup.onDestroyed(function(){});