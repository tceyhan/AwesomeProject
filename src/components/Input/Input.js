/* eslint-disable prettier/prettier */
import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.style';
import { Icon } from '@rneui/themed';

const Input = ({placeholder, onType, value, iconName, isSecure, inputType}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} onChangeText={onType} value={value} secureTextEntry={isSecure} inputType={inputType}/>
      <Icon name={iconName} size={35} color="lightgray" type= "material-community"/>
    </View>
  );
};

export default Input;
