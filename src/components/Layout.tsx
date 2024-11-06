import {
  Keyboard,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from 'style';

interface LayoutProps extends PropsWithChildren {
  style?: ViewStyle;
  isPadding?: boolean;
  isVertPd?: boolean;
  statusBarColor?: string;
  barStyle?: 'dark-content' | 'light-content';
}

export const Layout: FC<LayoutProps> = ({
  children,
  style,
  isVertPd = false,
  isPadding = false,
  statusBarColor = COLORS.mainBg,
  barStyle,
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.mainBg,
        paddingVertical: isVertPd ? 10 : 0,
        paddingHorizontal: isPadding ? 15 : 0,
        ...style,
      }}>
      <StatusBar
        barStyle={barStyle || 'dark-content'}
        backgroundColor={statusBarColor}
      />

      {children}
    </View>
  );
};
