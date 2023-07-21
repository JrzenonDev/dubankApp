import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

export function ToggleSwitch({value, onToggle}) {
  return (
    <TouchableOpacity onPress={onToggle}>
      <View
        style={[
          styles.toggleContainer,
          {backgroundColor: value ? '#e2e2e2' : 'white'},
        ]}>
        <View style={[styles.toggleButton, {marginLeft: value ? 'auto' : 0}]} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  toggleContainer: {
    width: 48,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#e2e2e2',
    justifyContent: 'center',
    padding: 2,
  },
  toggleButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#89cd0f',
  },
});
