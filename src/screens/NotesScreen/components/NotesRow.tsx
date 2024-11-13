import {FC, memo, useCallback, useState} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {TodoItem} from 'types';
import {Card, FWeight, PressableRipple, Text} from 'ui';
import {COLORS} from 'style';
import {windowWidth} from 'constants/screen';
import {SwipeableItem} from 'components';
import {ScreensEnum, useNavigation} from 'navigation';
import {useAppDispatch} from 'hooks';
import {deleteTodo} from 'store';
import {DisplayMode} from '../NotesScreen';
import {useTheme} from 'context';

interface NotesRowProps extends TodoItem {
  mode?: DisplayMode;
}

export const NotesRow: FC<NotesRowProps> = memo(
  ({mode = DisplayMode.CARDS, ...note}) => {
    const {colors} = useTheme();

    const {id, title, description} = note;

    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const handlePressRow = () => {
      navigation.navigate(ScreensEnum.NotesEditScreen, {note});
    };

    const handleDelete = useCallback(() => {
      dispatch(deleteTodo(id));
    }, [id]);

    const modeStyles =
      mode === DisplayMode.CARDS
        ? {
            minHeight: 140,
            maxHeight: 140,
          }
        : {};

    return (
      <Card
        ripple={false}
        isPressable
        onPress={handlePressRow}
        style={[
          styles.row,
          {
            backgroundColor: colors.noteBackground,
          },
          modeStyles,
        ]}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text color={colors.noteText} numberOfLines={1} w={FWeight.Medium}>
            {title}
          </Text>
          {description && (
            <Text color={colors.noteText} numberOfLines={2}>
              {description}
            </Text>
          )}
        </View>
      </Card>
    );
  },
);

const styles = StyleSheet.create({
  row: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
