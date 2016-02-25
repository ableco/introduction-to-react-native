import React, {
  ActivityIndicatorIOS,
  Component,
  View,
} from 'react-native';
import styles from '../styles/router';

class LoadingComponent extends Component {

  render() {
    return (
      <View style={styles.loading.wrapper}>
        <ActivityIndicatorIOS
          animating={true}
          color="#2a3744"
          size="large"
        />
      </View>
    );
  }

}

module.exports = LoadingComponent;
