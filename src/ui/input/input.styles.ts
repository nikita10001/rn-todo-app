import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS} from 'style';
import {FSize} from 'ui';

export const getStyle = (props: any) => {
  const {mb = 0, inputStyle = {}, isError, style = {}, lineColor = ''} = props;

  let colorLine = isError ? COLORS.redNotification : COLORS.black100;
  if (lineColor) {
    colorLine = lineColor;
  }

  //correct types??
  const computedStyle: Record<string, ViewStyle | TextStyle> = {
    container: {
      marginBottom: mb,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      fontSize: FSize.S16,
      height: 50,
      color: COLORS.dark,
      flex: 1,
      ...inputStyle,
      ...style,
    },
    line: {
      height: 1,
      borderRadius: 3,
      backgroundColor: colorLine,
    },

    labelText: {
      fontSize: FSize.S12,
      color: isError ? COLORS.redNotification : COLORS.dark,
      position: 'absolute',
      // -19 ?
      bottom: -18,
    },
  };

  return StyleSheet.create(computedStyle);
};
