import { DefaultTheme } from '@react-navigation/native';
import {StyleSheet} from 'react-native';

//rnss
export default StyleSheet.create({
    dark: false,
//   ...DefaultTheme,
  colors: {
    // ...DefaultTheme.colors,
    primary: 'rgba(53, 167, 156, 1)',//buton din navdrawer
    background: 'rgba(222, 242, 241, 1)',
    card: 'rgba(43, 122, 120, 1)',
    notification: 'rgba(222, 242, 241, 1)',
    border: 'rgb(199, 199, 204)',
    text: 'rgb(28, 28, 30)',
  },
});
