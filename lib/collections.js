

Meteor.groups = new Mongo.Collection('groups');
if (Meteor.isServer) {
	//Can only call _ensureIndex on server collections
	Meteor.groups._ensureIndex('name', {unique: 1})
}
Meteor.groups.schema = new SimpleSchema({
	name: {
		type: String,
		label: 'Group Name',
	},
	permissions: {
		type: [String],
		label: 'Permissions',
	},
});

Meteor.groups.attachSchema(Meteor.groups.schema);