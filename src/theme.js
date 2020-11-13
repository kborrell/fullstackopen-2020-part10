import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    headerBg: '#24292e',
    appBg: '#e1e4e8'
  },
  fontSizes: {
    body: 14,
    subheading: 19,
    heading: 20
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'System',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;