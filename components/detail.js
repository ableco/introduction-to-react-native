import React, {
  Component,
  Image,
  Text,
  View,
} from 'react-native';
import styles from '../styles/router';

class DetailComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
    }
  }

  render() {
    var user = this.state.user;
    return (
      <View style={styles.detail.content}>
        <View style={styles.detail.pictureWrapper}>
          <Image
            style={styles.detail.picture}
            source={{uri: user.picture.medium}}
          />
        </View>
        <View style={styles.detail.item}>
          <Text style={styles.detail.fieldset}>Names</Text>
          <Text style={styles.detail.firstName}>{user.username}</Text>
          <Text style={styles.detail.lastName}>{user.name.first} {user.name.last}</Text>
        </View>
        <View style={styles.detail.item}>
          <Text style={styles.detail.fieldset}>Details</Text>
          <Text style={styles.detail.normalText}>{user.email}</Text>
          <Text style={styles.detail.normalText}>{user.phone}</Text>
        </View>
      </View>
    );
  }

}

module.exports = DetailComponent;
