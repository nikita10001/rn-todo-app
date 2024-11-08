import {FC, memo, useCallback, useState} from 'react';
import {StyleSheet, TextStyle, View} from 'react-native';
import {TodoItem} from 'types';
import {Card, FWeight, PressableRipple, Text} from 'ui';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {COLORS} from 'style';
import {windowWidth} from 'constants/screen';
import {SwipeableItem} from 'components';
import {ScreensEnum, useNavigation} from 'navigation';
import {useAppDispatch} from 'hooks';
import {deleteTodo, toggleTodo} from 'store';

interface TodoRowProps extends TodoItem {}

export const TodoRow: FC<TodoRowProps> = memo(todo => {
  const {id, completed, title, description} = todo;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const [isChecked, setIsChecked] = useState(completed);

  const handlePressRow = () => {
    navigation.navigate(ScreensEnum.TodoEditScreen, {todo});
  };
  const handleToggleCheck = useCallback(
    (checked: boolean) => {
      setIsChecked(checked);
      dispatch(toggleTodo(id));
    },
    [id],
  );

  const handleDelete = useCallback(() => {
    dispatch(deleteTodo(id));
  }, [id]);

  const checkedTextStyle: TextStyle = {
    textDecorationLine: isChecked ? 'line-through' : undefined,
  };

  return (
    <SwipeableItem onDelete={handleDelete}>
      <PressableRipple onPress={handlePressRow}>
        <Card style={styles.row}>
          <BouncyCheckbox
            size={22}
            fillColor={COLORS.primary}
            isChecked={completed}
            iconStyle={{
              borderRadius: 5,
            }}
            innerIconStyle={{
              borderRadius: 5,
            }}
            onPress={handleToggleCheck}
          />
          <View
            style={{
              opacity: isChecked ? 0.6 : 1,
              width: windowWidth - 65,
            }}>
            <Text style={checkedTextStyle} numberOfLines={1} w={FWeight.Medium}>
              {title}
            </Text>
            {description && (
              <Text numberOfLines={2} style={checkedTextStyle}>
                {description}
              </Text>
            )}
          </View>
        </Card>
      </PressableRipple>
    </SwipeableItem>
  );
});

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black200,
  },
});
