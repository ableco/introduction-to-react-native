import React from 'react-native';
var { StyleSheet } = React;

export default StyleSheet.create({
  content: {
    padding: 12,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 6,
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
    marginRight: 12,
    borderRadius: 6,
  }
})
