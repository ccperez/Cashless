import 'dart:async';
import 'package:sqflite/sqflite.dart';

import '../database/database_helper.dart';
import '../models/user.dart';

class UsersController {
	DatabaseHelper connect = DatabaseHelper();

	String tblUsers = 'users';

	// Save Operation: Update, not exist insert user object to database
	Future<int> saveAccout(User user) async {
		Database db = await connect.database;
		int result = await db.update(tblUsers, user.toMap(), where: 'phone = ?', whereArgs: [user.phone]);
		if (result == 0) result = await db.insert(tblUsers, user.toMap());
		return result;
	}

	Future<int> confirmAccount(User user) async {
		Database db = await connect.database;
		int result = await db.rawUpdate('Update $tblUsers Set confirm = 1 Where phone = ?', [user.phone]);
		return result;
	}

	Future<int> accountExist(User user) async {
		Database db = await connect.database;
		int result = await db.rawUpdate('Update $tblUsers Set confirm=1 Where confirm=1 and phone = ?', [user.phone]);
		return result;
	}

	// Update Operation: Update a user object to database
	Future<int> updateAccount(User user) async {
		Database db = await connect.database;
		int result = await db.update(tblUsers, user.toMap(), where: 'phone = ?', whereArgs: [user.phone]);
		return result;
	}

	Future<int> deleteAccount(int id) async {
		var db = await connect.database;
		int result = await db.rawDelete('Delete From $tblUsers Where id = $id');
		return result;
	}

	// Fetch Operation: Get all user objects from database
	Future<List<Map<String, dynamic>>> getUserMapList() async {
		Database db = await connect.database;
		var result = await db.query(tblUsers);
		return result;
	}

	// Get the 'Map List' [ List<Map> ] and convert it to 'User List' [ List<User> ]
	Future<List<User>> getUserList() async {
		var userMapList = await getUserMapList(); // Get 'Map List' from database
		int count = userMapList.length;         // Count the number of map entries in db table
		List<User> userList = List<User>();
		// For loop to create a 'User List' from a 'Map List'
		for (int i = 0; i < count; i++) {
			userList.add(User.fromDb(userMapList[i]));
		}
		return userList;
	}

}
