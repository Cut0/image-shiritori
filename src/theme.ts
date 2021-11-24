import { extendTheme } from '@chakra-ui/react';
export const theme = extendTheme({
  colors: {
    primary: '#CE4F18',
    secondary: '#7E232A',
    whiteBackground: '#D5CFAF',
    background: '#C5B47E',
    success: '#7DBE5B',
    danger: '#FF4C5B',
    warning: '#F4D667',
    text: {
      main: '#444444',
      sub: '#666666',
      inverse: '#FFFFFF',
    },
  },
  textStyles: {
    hero: {
      fontSize: '52px',
      fontWeight: 'bold',
    },
    display1: {
      fontSize: '45px',
      fontWeight: 'bold',
    },
    display2: {
      fontSize: '34px',
      fontWeight: 'bold',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    subheading: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    bold: {
      fontSize: '14px',
      fontWeight: 'bold',
    },
    body: {
      fontSize: '14px',
    },
    caption: {
      fontSize: '14px',
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});
