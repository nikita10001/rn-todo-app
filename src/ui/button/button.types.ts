import {ReactElement} from 'react';
import {ViewStyle, TextStyle} from 'react-native';

export interface ButtonProps {
  children?: ReactElement | string | number;

  type?: ButtonType;
  style?: ViewStyle;
  textStyle?: TextStyle;

  disabled?: boolean;
  loading?: boolean;

  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;

  activeOpacity?: number;

  onPress?: () => void;
}

export enum ButtonType {
  PRIMARY = 'primary',
  PRIMARY_DISABLED = 'primary-disabled',
  OUTLINE = 'outline',
  TEXT = 'text',
}

export type BaseButtonStyles = {
  container: ViewStyle;
  text: TextStyle;
};
export type TButtonStyle = Record<ButtonType, BaseButtonStyles>;
