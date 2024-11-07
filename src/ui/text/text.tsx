import React, {FC} from 'react';
import {Text as RNText} from 'react-native';
import {getStyle} from './text.styles';
import {TextProps} from './text.types';

export const Text: FC<TextProps> = props => {
  const {children, style, numberOfLines, ...otherProps} = props;
  const computedStyle = getStyle(props);
  return (
    <RNText
      ellipsizeMode="tail"
      suppressHighlighting
      style={computedStyle.text}
      numberOfLines={numberOfLines}
      {...otherProps}>
      {children}
    </RNText>
  );
};
