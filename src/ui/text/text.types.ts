import {TextStyle} from 'react-native';

export enum FWeight {
  Regular = 'Inter-Regular',
  Medium = 'Inter-Medium',
  SemiBold = 'Inter-SemiBold',
  Bold = 'Inter-Bold',
}
export enum FSize {
  S38 = 33,
  S30 = 30,
  S28 = 28,
  S24 = 24,
  S20 = 20,
  S18 = 18,
  S17 = 17,
  S16 = 16,
  S15 = 15,
  S14 = 14,
  S13 = 13,
  S12 = 12,
  S11 = 11,
  S10 = 10,
}

export interface TextProps {
  children: any;
  style?: TextStyle;
  w?: FWeight;
  fs?: FSize;
  color?: string;
  numberOfLines?: number;
  align?: 'auto' | 'center' | 'right' | 'left';
  mb?: number;
  onPress?: () => void;
}
