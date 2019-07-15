import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CenteringCradle from './src/Components/Cradles/CenteringCradle/CenteringCradle';


export default function App() {
  return (
    <CenteringCradle>
      <Text>Open up App.js to start working on your app!</Text>
    </CenteringCradle>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
