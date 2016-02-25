import React, {
  Component,
  Image,
  ListView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import styles from '../styles/router';
import DetailComponent from './detail';

class ListComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2
      })
    }
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

  render() {
    return (
      <ListView
        style={styles.list.content}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
      />
    );
  }

  _renderRow(data) {
    return (
      <TouchableHighlight underlayColor='transparent' onPress={this._pushDetail.bind(this, data.user)}>
        <View style={styles.list.wrapper}>
          <Image
            style={styles.list.picture}
            source={{uri: data.user.picture.medium}}
            />
          <View>
            <View style={styles.list.name}>
              <Text style={styles.list.firstName}>{data.user.name.first}</Text>
              <Text style={styles.list.lastName}>{data.user.name.last}</Text>
            </View>
            <Text>{data.user.email}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  _pushDetail(user) {
    this.props.navigator.push({
      title: user.username,
      component: DetailComponent,
      backButtonTitle: 'Back',
      passProps: {user: user},
    });
  }
}

module.exports = ListComponent;
