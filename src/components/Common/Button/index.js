import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export function CustomButton({
  title,
  backgroundColor,
  color,
  borderColor,
  borderWidth,
  onPress,
}) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderWidth: borderWidth,
  };

  const textStyle = {
    color: color,
  };

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
