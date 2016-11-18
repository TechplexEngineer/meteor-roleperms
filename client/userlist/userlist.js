Template.userList.onCreated(function(){
	this.autorun(()=> {
		this.subscribe('_allUsers');
	});
});
Template.userList.onRendered(function(){});
Template.userList.events({});
Template.userList.helpers({
	users() {
		return Meteor.users.find() || [];
	}
});
Template.userList.onDestroyed(function(){});