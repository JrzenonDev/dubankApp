import React from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './src/pages';
import Login from './src/pages/Login';

export default function App() {
  const isLoggedIn = false;
  return (
    <View style={styles.container}>{isLoggedIn ? <Home /> : <Login />}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
