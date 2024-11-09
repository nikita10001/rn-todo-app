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

interface NotesRowProps extends TodoItem {
  mode?: DisplayMode;
}

export const NotesRow: FC<NotesRowProps> = memo(
  ({mode = DisplayMode.CARDS, ...todo}) => {
    const {id, title, description} = todo;
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const handlePressRow = () => {
      navigation.navigate(ScreensEnum.TodoEditScreen, {todo});
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
      <Card isPressable style={[styles.row, modeStyles]}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text numberOfLines={1} w={FWeight.Medium}>
            {title}
          </Text>
          {description && <Text numberOfLines={2}>{description}</Text>}
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
