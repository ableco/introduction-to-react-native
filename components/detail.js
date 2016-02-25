import React, {
  Component,
  Image,
  ListView,
  Text,
  View,
} from 'react-native';
import styles from '../styles/router';

class DetailComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
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
    )
  }
}

module.exports = ListComponent;
