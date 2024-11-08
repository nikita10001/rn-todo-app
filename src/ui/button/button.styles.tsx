import {StyleSheet} from 'react-native';
import {
  BaseButtonStyles,
  ButtonProps,
  ButtonType,
  TButtonStyle,
} from './button.types';
import {FSize, FWeight} from 'ui/text';
import {COLORS} from 'style';

export const buttonTypeStyles: TButtonStyle = {
  [ButtonType.PRIMARY]: {
    container: {
      backgroundColor: COLORS.primary,
      borderColor: COLORS.primary,
    },
    text: {
      color: COLORS.white,
    },
  },
  [ButtonType.PRIMARY_DISABLED]: {
    container: {
      backgroundColor: COLORS.disabled,
    },
    text: {
      color: COLORS.disabledText,
    },
  },
  [ButtonType.OUTLINE]: {
    container: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: COLORS.primary,
    },
    text: {
      color: COLORS.primary,
    },
  },
  [ButtonType.TEXT]: {
    container: {
      backgroundColor: 'transparent',
      borderRadius: 0,
      height: 'auto',
      width: 'auto',
    },
    text: {
      padding: 0,
      fontSize: FSize.S15,
      color: COLORS.primary,
    },
  },
};

export const getStyle = (props: Omit<ButtonProps, 'children'>) => {
  const {
    iconLeft,
    iconRight,
    style = {},
    disabled = false,
    textStyle = {},
    type = ButtonType.PRIMARY,
  } = props;

  const btnType = disabled ? ButtonType.PRIMARY_DISABLED : type;

  const isIcon = iconLeft || iconRight;

  const baseButtonStyles: BaseButtonStyles = {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      borderRadius: 10,
      height: 50,
      flexDirection: isIcon ? 'row' : 'column',
      gap: isIcon ? 7 : 0,
    },
    text: {
      color: COLORS.dark,
      textAlign: 'center',
      fontSize: FSize.S17,
      fontFamily: FWeight.Medium,
    },
  };
  const computedStyle: BaseButtonStyles = {
    container: {
      ...baseButtonStyles.container,
      ...buttonTypeStyles[btnType].container,
      ...style,
    },
    text: {
      ...baseButtonStyles.text,
      ...buttonTypeStyles[btnType].text,
      ...textStyle,
    },
  };

  return StyleSheet.create(computedStyle);
};
