import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StatusBarIOS
} from 'react-native';
import styles from './styles/router';
import ListComponent from './components/list';

StatusBarIOS.setStyle('light-content');

class mySweetProject extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.global.container}
        barTintColor= '#2a3744'
        tintColor= '#efefef'
        titleTextColor= '#efefef'
        initialRoute={{
          component: ListComponent,
          title: 'List',
          rightButtonTitle: 'Search'
        }}
        />
    )
  }
}

AppRegistry.registerComponent('mySweetProject', () => mySweetProject);
