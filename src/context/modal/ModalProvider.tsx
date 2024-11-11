import React, {useState, FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {ModalWrapper} from 'components';
import {ModalContext, ModalParams} from './ModalContext';
import {Button, ButtonType, FSize, FWeight, Text} from 'ui';
import {COLORS} from 'style';

interface ModalProviderProps {
  children: JSX.Element;
}

export const ModalProvider: FC<ModalProviderProps> = ({children}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalParams, setModalParams] = useState<ModalParams | undefined>();

  const showModal = (params: ModalParams) => {
    setModalParams(params);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setModalParams(undefined);
  };

  return (
    <ModalContext.Provider value={{showModal, hideModal}}>
      {children}
      <ModalWrapper setVisible={hideModal} visible={modalVisible}>
        <View style={styles.modalContent}>
          {modalParams?.title && (
            <Text w={FWeight.SemiBold} fs={FSize.S17} mb={1}>
              {modalParams.title}
            </Text>
          )}
          {modalParams?.text && (
            <Text align="center" w={FWeight.Regular} fs={FSize.S14} mb={18}>
              {modalParams.text}
            </Text>
          )}
          <View style={{flexDirection: 'row', gap: 5}}>
            <Button
              type={ButtonType.OUTLINE}
              style={{
                flex: 1,
                height: 33,
                paddingHorizontal: 0,
                borderWidth: 1,
              }}
              textStyle={{fontSize: FSize.S14, fontFamily: FWeight.Regular}}
              onPress={() => {
                hideModal();
                modalParams?.onCancel && modalParams.onCancel();
              }}>
              {'Отмена'}
            </Button>
            <Button
              style={{
                flex: 1,
                height: 33,
                paddingHorizontal: 0,
              }}
              textStyle={{fontSize: FSize.S14, fontFamily: FWeight.Regular}}
              onPress={() => {
                hideModal();
                modalParams?.onConfirm && modalParams.onConfirm();
              }}>
              {modalParams?.confirmText || 'Подтвердить'}
            </Button>
          </View>
        </View>
      </ModalWrapper>
    </ModalContext.Provider>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: COLORS.white,
    elevation: 2,
    padding: 16,
    borderRadius: 15,
    width: '75%',
    alignItems: 'center',
  },
});
