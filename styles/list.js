import React from 'react-native';
var { StyleSheet } = React;

export default StyleSheet.create({
  content: {
    padding: 22,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    backgroundColor: '#eee',
    padding: 11,
  },
  name: {
    flexDirection: 'row'
  },
  firstName: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  lastName: {
    color: '#333',
  },
  picture: {
    width: 50,
    height: 50,
    marginRight: 11,
  }
})
