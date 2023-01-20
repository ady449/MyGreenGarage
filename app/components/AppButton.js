import React from 'react';
import {Text,TouchableOpacity} from 'react-native';
import styles from '../styles/styleAppButton'

const AppButton = ({ onPress, title, s}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
        styles.appButtonContainer, s
    ]}
  >
    <Text style={[styles.appButtonText]}>
      {title}
      
    </Text>
  </TouchableOpacity>
);
export default AppButton;