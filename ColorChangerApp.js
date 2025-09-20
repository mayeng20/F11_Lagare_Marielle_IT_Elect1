import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function ColorChangerApp() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="Light blue" onPress={() => setBgColor('lightblue')} />
      <Button title=" pink" onPress={() => setBgColor('pink')} />
      <Button title="yellowgreen" onPress={() => setBgColor('yellowgreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }
});