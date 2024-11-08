import {NotFoundIcon} from 'assets';
import {FC} from 'react';
import {View} from 'react-native';
import {FSize, Text} from 'ui';

export const ЕmptyList: FC = ({}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <NotFoundIcon width={40} height={40} />
      <Text fs={FSize.S14}>Список пуст</Text>
    </View>
  );
};
