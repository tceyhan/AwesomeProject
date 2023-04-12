import { View, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./Input.style";
import { Icon } from "@rneui/themed";

const Input = ({
  placeholder,
  onType,
  value,
  iconName,
  isSecure,
  inputMode,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
        inputMode={inputMode}
      />
      <Icon
        name={iconName}
        size={35}
        color="lightgray"
        type="material-community"
      />
    </View>
  );
};

export default Input;
