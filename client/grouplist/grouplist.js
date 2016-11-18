Template.groupList.onCreated(function(){
	this.autorun(()=> {
		this.subscribe('_allGroups');
	});
});
Template.groupList.onRendered(function(){});
Template.groupList.events({});
Template.groupList.helpers({
	groups() {
		return Meteor.groups.find() || [];
	}
});
Template.groupList.onDestroyed(function(){});