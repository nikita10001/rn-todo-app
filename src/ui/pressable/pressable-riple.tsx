import {FC, ReactNode} from 'react';
import {Pressable, PressableProps, StyleSheet} from 'react-native';
import {COLORS} from 'style';

interface PressableRippleProps extends PressableProps {
  children: ReactNode;
}

export const PressableRipple: FC<PressableRippleProps> = ({
  children,
  onPress,
  style,
  ...rest
}) => {
  return (
    <Pressable
      style={style}
      onPress={onPress}
      android_ripple={{
        foreground: true,
        color: COLORS.ripple,
      }}
      {...rest}>
      {children}
    </Pressable>
  );
};
