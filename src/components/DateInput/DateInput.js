/* eslint-disable prettier/prettier */
import { View, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./DateInput.style";
import { Icon } from "@rneui/themed";
import DatePicker from "../DataPicker/DatePicker";

const DateInput = ({
  placeholder,
  onType,
  value,
  iconName,
  isSecure,
  inputType,  
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
        inputType={inputType}
      />
      <DatePicker />
      <Icon
        name={iconName}
        size={35}
        color="lightgray"
        type="material-community"
      />
    </View>
  );
};

export default DateInput;
