import {ScrollView, StatusBar, View, ViewStyle} from 'react-native';
import React, {FC, PropsWithChildren, useEffect} from 'react';
import {COLORS} from 'style';
import {Theme, useTheme} from 'context';

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
  const {theme, colors} = useTheme();
  const isDark = theme === Theme.Dark;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingVertical: isVertPd ? 10 : 0,
        paddingHorizontal: isPadding ? 10 : 0,
        ...style,
      }}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />

      {children}
    </View>
  );
};
