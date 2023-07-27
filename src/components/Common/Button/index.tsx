import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface CustomButtonProps {
  title: string;
  backgroundColor?: string;
  color: string;
  borderColor: string;
  borderWidth: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>; // For additional styles to be applied to TouchableOpacity
  textStyle?: StyleProp<TextStyle>; // For additional styles to be applied to Text
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  backgroundColor = '#FFFFFF',
  color = '#000000',
  borderColor = '#000000',
  borderWidth = 1,
  onPress,
  style,
  textStyle,
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderWidth:
      typeof borderWidth === 'string' ? parseFloat(borderWidth) : borderWidth,
  };

  const buttonTextStyle = {
    color: color,
  };

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, style]}
      onPress={onPress}>
      <Text style={[styles.buttonText, buttonTextStyle, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

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
