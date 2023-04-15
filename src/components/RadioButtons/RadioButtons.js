/* eslint-disable prettier/prettier */
import { View } from "react-native";
import React, { useState } from "react";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";


const RadioButtons = ({value, setValue}) => {
  
  console.log(value);

  //! radio buttons
  var radio_props = [
    { label: "Gidiş", value: 0 },
    { label: "Gidiş-Dönüş", value: 1 },
  ];

  return (
    <View>
      <RadioForm
        radio_props={radio_props}
        initial={0}
        onPress={(value) => setValue(value)}
        buttonColor="gray"
        labelColor="gray"
        selectedButtonColor="#c44"
        selectedLabelColor="#c44"
        // labelHorizontal={false}
        formHorizontal
        style={{ margin: 10 }}
        labelStyle={{ fontSize: 20, fontWeight: "bold", marginRight: 10 }}
      />
    </View>
  );
};

export default RadioButtons;
