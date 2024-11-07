import {FC, memo, useState} from 'react';
import {StyleSheet, TextStyle, View} from 'react-native';
import {TodoItem} from 'types';
import {Card, FWeight, Text} from 'ui';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {COLORS} from 'style';
import {DeleteIcon} from 'assets';
import {windowWidth} from 'constants/screen';
import {SwipeableItem} from 'components/SwipeableItem';

interface TodoRowProps extends Partial<TodoItem> {}

export const TodoRow: FC<TodoRowProps> = memo(
  ({title, description, completed}) => {
    const [isChecked, setIsChecked] = useState(false);

    const checkedTextStyle: TextStyle = {
      textDecorationLine: isChecked ? 'line-through' : undefined,
    };

    return (
      <SwipeableItem>
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
            onPress={setIsChecked}
          />
          <View
            style={{
              opacity: isChecked ? 0.6 : 1,
              width: windowWidth - 65,
            }}>
            <Text style={checkedTextStyle} numberOfLines={1} w={FWeight.Medium}>
              {title}
            </Text>
            <Text style={checkedTextStyle}>{description}</Text>
          </View>
        </Card>
      </SwipeableItem>
    );
  },
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black200,
  },
});
