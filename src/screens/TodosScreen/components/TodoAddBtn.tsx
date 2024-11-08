import {AddIcon} from 'assets';
import {windowHeight, windowWidth} from 'constants/screen';
import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from 'style';
import {Button} from 'ui';

interface TodoAddBtnProps {
  onPress?: () => void;
}

export const TodoAddBtn: FC<TodoAddBtnProps> = ({onPress}) => {
  return (
    <Button
      onPress={onPress}
      style={styles.btn}
      iconRight={<AddIcon fill={COLORS.white} />}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 50,
    width: 50,
    height: 50,
    position: 'absolute',
    zIndex: 999,
    bottom: windowHeight * 0.04,
    right: windowWidth * 0.06,
  },
});
