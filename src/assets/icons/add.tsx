import * as React from 'react';
import Svg, {G, Circle, Path, SvgProps} from 'react-native-svg';
import {COLORS} from 'style';

export function AddIcon(props: SvgProps) {
  const {fill} = props;
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        fill={fill || COLORS.primary}
        d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1"
      />
    </Svg>
  );
}
