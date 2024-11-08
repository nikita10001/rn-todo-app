import * as React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';

export function NotFoundIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <G fill="none" stroke="#000" strokeLinecap="round" strokeWidth={1.4}>
        <Path strokeLinejoin="round" d="M15 18.5l5-5m0 5l-5-5" />
        <Path d="M21 6H3m18 4H3m8 4H3m8 4H3" />
      </G>
    </Svg>
  );
}
