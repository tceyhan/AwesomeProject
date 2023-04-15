import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./Search.style";
import RadioButtons from "../../components/RadioButtons/RadioButtons";
import DropDown from "../../components/DropDown/DropDown";
import Button from "../../components/Button/Button";
import DateInput from "../../components/DateInput/DateInput";

const Search = () => {
  const [departure, setDeparture] = useState(new Date());
  const [arrival, setArrival] = useState();
 console.log(departure);
 console.log(arrival);
  return (
    <View style={styles.container}>
      <Text>{departure?.toLocaleString('en-GB', { timeZone: 'UTC' })}</Text>
      <Text>{arrival?.toLocaleString('tr-TR', { timeZone: 'UTC' })}</Text>
      <View style={styles.radioBtn}>
        <RadioButtons />
      </View>
      <View style={styles.dropdownContainer}>
        <Text style={styles.text}>Nereden</Text>
        <DropDown />
      </View>
      <View style={styles.dropdownContainer}>
        <Text style={styles.text}>Nereye</Text>
        <DropDown />
      </View>
      <View style={styles.dateContainer}>
        <View style={styles.dateSubContainer}>
          <Text style={styles.textDate}>Gidiş Tarihi</Text>
          <DateInput iconName="calendar-month-outline" iconColor="gray" setTarih={setDeparture} />
        </View>
        <View style={styles.dateSubContainer}>
          <Text style={styles.textDate}>Dönüş Tarihi</Text>
          <DateInput iconName="calendar-month-outline" iconColor="gray" setTarih={setArrival} />
        </View>
      </View>
      <Button
        style={styles.searchBtn}
        text="Ara"
        IconName="magnify"
        IconColor="white"
      />
    </View>
  );
};

export default Search;
