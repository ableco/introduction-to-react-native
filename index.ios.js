/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  Text,
  StyleSheet,
  View,
} from 'react-native';

class mySweetProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2
      })
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
      />
    );
  }

  componentWillMount() {
    fetch('http://api.randomuser.me/?results=10&nat=us')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.results)
      })
    })
  }

  _renderRow(data) {
    return (
      <View>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: data.user.picture.medium}}
          />
        <View>
          <Text>{data.user.name.first}</Text>
          <Text>{data.user.name.last}</Text>
          <Text>{data.user.email}</Text>
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('mySweetProject', () => mySweetProject);
