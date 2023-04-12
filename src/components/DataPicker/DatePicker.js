import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = () => {
  const [date, setDate] = useState(new Date ());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  console.log(date);

  let yyyy =date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();
  
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  
  const formattedToday = dd + '/' + mm + '/' + yyyy;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <TouchableOpacity onPress={() => setShow(!show)}>
      {/* <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />  */}
      <Text>{formattedToday}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
          display="spinner"
          positiveButton={{label: 'TAMAM', textColor: 'green'}}
          // neutralButton={{label: 'İPTAL', textColor: 'grey'}}
          negativeButton={{label: 'İPTAL', textColor: 'red'}}
        />
       )}  
    </TouchableOpacity>
  );
};
export default DatePicker