export interface BasicColors {
  background: string;
  text: string;
  primary: string;
  transparent: string;
  active: string;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
}

export const themes: {
  dark: BasicColors;
  light: BasicColors;
} = {
  dark: {
    background: '#1A1B1F',
    active: '#f8d3e1',
    text: '#fff',

    primary: '#02929A',
    transparent: 'transparent',

    content1: 'rgba(255, 255, 255, 0.1)',
    content2: 'rgba(232, 232, 232, 0.6)',
    content3: 'rgba(255, 255, 255, 0.5)',
    content4: 'rgba(246, 246, 246, 1)',
  },
  light: {
    background: '#fff',
    active: '#f8d3e1',

    text: '#333',

    primary: '#02929A',
    transparent: 'transparent',

    content1: 'rgba(26, 27, 31, .72)',
    content2: 'rgba(26, 27, 31, .5)',
    content3: 'rgba(209, 209, 209, .3)',
    content4: 'rgba(246, 246, 246, 1)',
  },
};
