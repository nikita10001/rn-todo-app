export interface BasicColors {
  background: string;
  text: string;
  primary: string;
  transparent: string;
}

export const themes: {
  dark: BasicColors;
  light: BasicColors;
} = {
  dark: {
    background: '#333',
    text: '#fff',
    primary: '#02929A',
    transparent: 'transparent',
  },
  light: {
    background: '#fff',
    text: '#333',
    primary: '#02929A',
    transparent: 'transparent',
  },
};
