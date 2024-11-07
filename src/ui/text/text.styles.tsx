import {StyleSheet} from 'react-native';
import {FSize, FWeight, TextProps} from './text.types';
import {COLORS} from 'style';

export const getStyle = (props: Omit<TextProps, 'children'>) => {
  const {
    fs = FSize.S14,
    w = FWeight.Regular,
    color = COLORS.dark,
    align = 'auto',
    mb = 0,
    style = {},
  } = props;

  const computedStyle: any = {};

  computedStyle.text = {
    fontSize: fs,
    fontFamily: w,
    color: color,
    textAlign: align,
    marginBottom: mb,
    lineHeight: fs * 1.4,
  };

  if (style) {
    computedStyle.text = {
      ...computedStyle.text,
      ...style,
    };
  }
  return StyleSheet.create(computedStyle);
};
