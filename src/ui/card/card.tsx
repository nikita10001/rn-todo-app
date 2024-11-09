import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {COLORS} from 'style';
import {PressableRipple} from 'ui';

interface CardProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  isShadow?: boolean;
  isPressable?: boolean;
  onPress?: () => void;
}

export const Card: FC<CardProps> = ({
  children,
  isShadow = true,
  style,
  isPressable = false,
  onPress,
}) => {
  const Container = isPressable ? PressableRipple : View;
  const pressProps = isPressable
    ? {
        onPress,
      }
    : {};
  return (
    <Container
      {...pressProps}
      style={[styles.card, {elevation: isShadow ? 3 : 0}, style]}>
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    borderRadius: 10,
    // borderRadius: 14,
  },
});
