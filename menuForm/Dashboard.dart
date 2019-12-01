import 'package:flutter/material.dart';

import 'NavBar.dart';

class Dashboard extends StatefulWidget {
  Dashboard({Key key}) : super(key: key);

  @override
  _DashboardState createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
       bottomNavigationBar: NavBar() ,
    );
  }
}
