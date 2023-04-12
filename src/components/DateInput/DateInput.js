/* eslint-disable prettier/prettier */
import { View, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./DateInput.style";
import { Icon } from "@rneui/themed";
// import DatePicker from "../DataPicker/DatePicker";
import DateTimePicker from "@react-native-community/datetimepicker";
const DateInput = ({
  placeholder,
  onType, 
  iconName,
  value,
  isSecure,
  inputMode,
}) => {
  const [date, setDate] = useState(new Date());
   const [show, setShow] = useState(false);
  console.log(date);

  let yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  let formattedDate = dd + "/" + mm + "/" + yyyy;  

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

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
      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            onChange={onChange}
            display="spinner"
            positiveButton={{ label: "TAMAM", textColor: "green" }}
            negativeButton={{ label: "İPTAL", textColor: "red" }}
          />
        )}
      </View>
      <Icon
        name={iconName}
        size={35}
        color="lightgray"
        type="material-community"
        onPress={() => setShow(!show)}
      />
    </View>
  );
};

export default DateInput;
