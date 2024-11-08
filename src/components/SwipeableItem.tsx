import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC, useRef} from 'react';
import {Swipeable} from 'react-native-gesture-handler';
import {COLORS} from 'style';
import {DeleteIcon} from 'assets';
import {useModal} from 'context';

interface SwipeableItemProps {
  children?: JSX.Element;
  onDelete?: () => void;
}

export const SwipeableItem: FC<SwipeableItemProps> = ({children, onDelete}) => {
  const swipeableRef = useRef<Swipeable>(null);

  const {showModal} = useModal();

  const handleDelete = () => {
    const onConfirm = () => {
      onDelete?.();
      swipeableRef.current?.close();
    };
    showModal({
      title: 'Удаление задачи',
      text: 'Вы действительно хотите удалить задачу?',
      confirmText: 'Удалить',
      onConfirm,
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
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <DeleteIcon />
        </TouchableOpacity>
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
    alignItems: 'flex-end',
  },
  deleteButton: {
    width: 60,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.redRgba,
  },
});
