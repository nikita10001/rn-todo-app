import {TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {FC} from 'react';
import {ButtonProps} from './button.types';
import {getStyle} from './button.styles';
import {Text} from 'ui/text';

export const Button: FC<ButtonProps> = props => {
  const {
    onPress,
    iconLeft,
    iconRight,
    disabled,
    loading,
    children,
    activeOpacity = 0.6,
  } = props;

  const computedStyle = getStyle(props);

  const renderChildren = () => {
    if (typeof children === 'string' || typeof children === 'number') {
      return <Text style={computedStyle.text}>{children}</Text>;
    }
    return children;
  };
  return (
    <TouchableOpacity
      hitSlop={10}
      activeOpacity={activeOpacity}
      onPress={onPress}
      disabled={disabled}
      style={computedStyle.container}>
      {iconLeft}
      {loading ? (
        <ActivityIndicator color="white" /> //
      ) : (
        renderChildren()
      )}
      {iconRight}
    </TouchableOpacity>
  );
};
