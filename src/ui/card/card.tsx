import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {COLORS} from 'style';

interface CardProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  isShadow?: boolean;
}

export const Card: FC<CardProps> = ({children, isShadow = false, style}) => {
  return (
    <View style={[styles.card, {elevation: isShadow ? 2 : 0}, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    overflow: 'hidden',
    shadowColor: COLORS.dark,
  },
});
