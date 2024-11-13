import {StyleSheet} from 'react-native';
import {BasicColors} from 'style';
import {FSize} from 'ui';

export const getStyles = (colors: BasicColors) =>
  StyleSheet.create({
    container: {flex: 1, padding: 10},
    titleInput: {
      height: 42,
      color: colors.text,
      fontSize: FSize.S18,
    },
    descriptionInput: {flex: 1, height: 230, color: colors.text},
    btnContainer: {paddingHorizontal: 10, paddingVertical: 5},
  });
