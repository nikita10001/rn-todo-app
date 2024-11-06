import {Layout} from 'components';
import {FC} from 'react';
import {StyleSheet} from 'react-native';
import {MainScreenProps} from 'navigation';
import {COLORS} from 'style';

export const MainScreen: FC<MainScreenProps> = ({navigation}) => {
  return <Layout isPadding isVertPd></Layout>;
};

const styles = StyleSheet.create({});
