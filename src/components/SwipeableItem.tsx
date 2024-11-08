import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC, useRef} from 'react';
import {Swipeable} from 'react-native-gesture-handler';
import {COLORS} from 'style';
import {DeleteIcon} from 'assets';
import {useModal} from 'context';
import {PressableRipple} from 'ui';

interface SwipeableItemProps {
  children?: JSX.Element;
  onDelete?: () => void;
}

export const SwipeableItem: FC<SwipeableItemProps> = ({children, onDelete}) => {
  const swipeableRef = useRef<Swipeable>(null);

  const {showModal} = useModal();

  const handleDelete = () => {
    const close = () => swipeableRef.current?.close();
    const onConfirm = () => {
      onDelete?.();
      close();
    };
    showModal({
      title: 'Удаление задачи',
      text: 'Вы действительно хотите удалить задачу?',
      confirmText: 'Удалить',
      onConfirm,
      onCancel: close,
    });
  };

  const renderRightActions = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [-60, 0],
      outputRange: [0, 60],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={[styles.rightAction, {transform: [{translateX: trans}]}]}>
        <PressableRipple style={styles.deleteButton} onPress={handleDelete}>
          <DeleteIcon />
        </PressableRipple>
      </Animated.View>
    );
  };

  return (
    <Swipeable
      ref={swipeableRef}
      renderRightActions={renderRightActions}
      rightThreshold={40}
      overshootRight={false}>
      {children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  rightAction: {
    width: 60,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    overflow: 'hidden',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    backgroundColor: COLORS.redRgba,
  },
});
