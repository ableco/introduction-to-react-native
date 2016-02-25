/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class mySweetProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image}
          source={{uri: 'http://frostney.github.io/talks/react-native/slides/images/react-logo.png'}}
          />
        <Text style={styles.welcome}>
          Welcome to ReactJS Lima
        </Text>
        <Text style={styles.yell}>
          This is Able!!!
        </Text>
        <Image
          source={require('./images/300.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefefe',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    marginVertical: 20,
  },
  yell: {
    fontSize: 48,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 15,
  },
  image: {
    width: 150,
    height: 150,
  },
});

AppRegistry.registerComponent('mySweetProject', () => mySweetProject);
