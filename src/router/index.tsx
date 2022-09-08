import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

export default function App() {
  const a = 'TEXTO'
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text>{a}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  loading: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center'
  },
  section: {
    backgroundColor: 'tomato',
    padding: 20,
    borderBottomWidth: 1,
    borderRadius: 4,
    marginBottom: 1
  }
})
