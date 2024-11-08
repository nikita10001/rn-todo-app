import {
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {Modal} from 'react-native';

interface ModalWrapperProps {
  visible: boolean;
  setVisible: (v: boolean) => void;
  children: JSX.Element;
  overlayOpacity?: number;
}

export const ModalWrapper: FC<ModalWrapperProps> = props => {
  const {visible, setVisible, children, overlayOpacity = 0.3} = props;
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <TouchableWithoutFeedback
        onPress={() => setVisible(false)}
        style={styles.wrapper}>
        <View
          style={{
            ...styles.overlay,
            backgroundColor: `rgba(0, 0,0,${overlayOpacity})`,
          }}>
          <Pressable onPress={e => e.preventDefault()}>{children}</Pressable>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
