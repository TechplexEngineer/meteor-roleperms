

const Permissions = {
	isUserInGroup(userId, group) {
		check(userId, String);
		check(group, String);
		const user = Meteor.users.findOne(userId);
		if (!user) {
			console.error('UserId %s not found', userId);
			return false; // technically the userId was invalid...
		}
		return (user.groups && _.contains(user.groups, group));
	},
	// @todo what happens if the permission passed has wildcards?
	doesUserHavePermission(userId, permission) {
		check(userId, String);
		check(permission, String);
		const user = Meteor.users.findOne(userId);
		if (!user) {
			console.error('UserId %s not found', userId);
			return false; // technically the userId was invalid...
		}
		// check user permissions
		if (user.permissions) {
			for (let i = 0; i < user.permissions.length; i++) {
				if (permission.match(user.permissions[i])) {
					return true;
				}
			}
		}
		// check each of the user's groups permissions
		if (user.groups) {
			for (let i = 0; i < user.groups.length; i++) {
				const groupName = user.groups[i];
				const group = Meteor.groups.findOne({ name: groupName });

				for (let j = 0; j < group.permissions.length; j++) {
					if (permission.match(group.permissions[j])) {
						return true;
					}
				}
			}
		}
		return false;
	},
	//Tested
	createGroup(groupName, permissions) {
		check(groupName, String);
		check(permissions, [String]);
		Meteor.groups.insert({ name: groupName, permissions: permissions });
	},
	//Tested
	addPermissionToUser(permission, userId) {
		check(permission, String);
		check(userId, String);
		Meteor.users.update({ _id: userId }, { $addToSet: { permissions: permission } });
	},
	//tested
	addPermissionToGroup(permission, groupName) {
		check(permission, String);
		check(groupName, String);
		Meteor.groups.update({ name: groupName }, { $addToSet: { permissions: permission } });
	},
	removePermissionFromUser(permission, userId) {
		check(permission, String);
		check(userId, String);
		Meteor.users.update({ _id: userId }, { $pull: { permissions: permission } });
	},
	removePermissionFromGroup(permission, groupName) {
		check(permission, String);
		check(groupName, String);
		Meteor.groups.update({ name: groupName }, { $pull: { permissions: permission } });
	},
};


Meteor.methods({
	isUserInGroup(userId, group) {
		Permissions.isUserInGroup(userId, group);
	},
	doesUserHavePermission(userId, permission) {
		Permissions.doesUserHavePermission(userId, permission);
	},
	createGroup(groupName, permissions) {
		Permissions.createGroup(groupName, permissions);
	},
	addPermissionToUser(permission, userId) {
		Permissions.addPermissionToUser(permission, userId);
	},
	addPermissionToGroup(permission, groupName) {
		Permissions.addPermissionToGroup(permission, groupName);
	},
	removePermissionFromUser(permission, userId) {
		Permissions.removePermissionFromUser(permission, userId);
	},
	removePermissionFromGroup(permission, groupName) {
		Permissions.removePermissionFromGroup(permission, groupName);
	},
});

