import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import React, {FC, ReactNode, useState} from 'react';
import {getStyle} from './input.styles';
import {Text} from 'ui';

export interface InputProps extends TextInputProps {
  mb?: number;
  label?: string;
  bottomLabel?: string;
  isError?: boolean;
  lineColor?: string;
  borderW?: number;
}

export const Input: FC<InputProps> = props => {
  const {label, style, bottomLabel, ...otherProps} = props;
  const computedStyle = getStyle(props);

  return (
    <View style={computedStyle.container}>
      <View style={computedStyle.inputWrapper}>
        <TextInput hitSlop={15} style={computedStyle.input} {...otherProps} />
      </View>
      <View style={computedStyle.line} />
      {bottomLabel && (
        <Text style={computedStyle.labelText}>{bottomLabel}</Text>
      )}
    </View>
  );
};
