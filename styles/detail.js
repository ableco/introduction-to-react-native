import React from 'react-native';
var { StyleSheet } = React;

export default StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 64,
    padding: 12,
  },
  item: {
    padding: 12,
    backgroundColor: '#eee',
    marginBottom: 12,
  },
  name: {
    flexDirection: 'row'
  },
  fieldset: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  firstName: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  lastName: {
    color: '#333',
  },
  normalText: {
    color: '#666',
  },
  pictureWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  picture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  }
})
