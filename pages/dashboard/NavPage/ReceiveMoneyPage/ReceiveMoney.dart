import 'package:flutter/material.dart';

class ReceiveMoney extends StatefulWidget {
  ReceiveMoney({Key key}) : super(key: key);

  @override
  _ReceiveMoneyState createState() => _ReceiveMoneyState();
}

class _ReceiveMoneyState extends State<ReceiveMoney> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.green [900], 
        title: Text('Receive Money'),
      ),
    );
  }
}