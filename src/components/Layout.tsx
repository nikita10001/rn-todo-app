import {ScrollView, StatusBar, View, ViewStyle} from 'react-native';
import React, {FC, PropsWithChildren, useEffect} from 'react';
import {COLORS} from 'style';

interface LayoutProps extends PropsWithChildren {
  style?: ViewStyle;
  isPadding?: boolean;
  isVertPd?: boolean;
  isScroll?: boolean;
}

export const Layout: FC<LayoutProps> = ({
  children,
  style,
  isVertPd = false,
  isPadding = false,
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.mainBg,
        paddingVertical: isVertPd ? 10 : 0,
        paddingHorizontal: isPadding ? 10 : 0,
        ...style,
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.mainBg} />

      {children}
    </View>
  );
};
