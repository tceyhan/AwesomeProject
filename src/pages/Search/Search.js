import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./Search.style";
import RadioButtons from "../../components/RadioButtons/RadioButtons";
import DropDown from "../../components/DropDown/DropDown";
import Button from "../../components/Button/Button";
import DateInput from "../../components/DateInput/DateInput";

const Search = ({ navigation }) => {
  const [selectDeparture, setSelectDeparture] = useState("İstanbul");
  const [selectArrival, setSelectArrival] = useState("Ankara");
  const [value, setValue] = useState(0);
  const [departure, setDeparture] = useState(new Date());
  const [arrival, setArrival] = useState(new Date());

  const newArrival = arrival?.toLocaleString("tr-TR", { timeZone: "Turkey" });
  const newDeparture = departure?.toLocaleString("tr-TR", { timeZone: "Turkey" });

  // let yyyy = departure.getFullYear();
  // let mm = departure.getMonth() + 1; // Months start at 0!
  // let dd = departure.getDate();

  // if (dd < 10) dd = "0" + dd;
  // if (mm < 10) mm = "0" + mm;

  // let formattedDeparture = dd + "/" + mm + "/" + yyyy;
  // let yyyy2 = arrival.getFullYear();
  // let mm2 = arrival.getMonth() + 1; // Months start at 0!
  // let dd2 = arrival.getDate();

  // if (dd2 < 10) dd = "0" + dd;
  // if (mm2 < 10) mm = "0" + mm;

  // let formattedArrival = dd2 + "/" + mm2+ "/" + yyyy2;

  const handleSearch = () => {
    navigation.navigate("selectTourPage", {newArrival, newDeparture});
  };
  return (
    <View style={styles.container}>
      {/* <Text>{newDeparture}</Text>
      <Text>{newArrival}</Text>
      <Text>
        {selectDeparture} {selectArrival}
      </Text> */}
      <View style={styles.radioBtn}>
        <RadioButtons value={value} setValue={setValue} />
      </View>
      <View style={styles.dropdownContainer}>
        <Text style={styles.text}>Nereden</Text>
        <DropDown setSelectCity={setSelectDeparture} />
      </View>
      <View style={styles.dropdownContainer}>
        <Text style={styles.text}>Nereye</Text>
        <DropDown setSelectCity={setSelectArrival} />
      </View>
      <View style={styles.dateContainer}>
        <View style={styles.dateSubContainer}>
          <Text style={styles.textDate}>Gidiş Tarihi</Text>
          <DateInput
            iconName="calendar-month-outline"
            iconColor="gray"
            setTarih={setDeparture}
          />
        </View>
        <View
          style={value === 1 ? styles.dateSubContainer : styles.dateDisabled}
          pointerEvents={value === 0 ? "none" : null}
        >
          <Text style={styles.textDate}>Dönüş Tarihi</Text>
          <DateInput
            iconName="calendar-month-outline"
            iconColor="gray"
            setTarih={setArrival}
          />
        </View>
      </View>
      <Button
        style={styles.searchBtn}
        text="Ara"
        IconName="magnify"
        IconColor="white"
        onPress={handleSearch}
      />
    </View>
  );
};

export default Search;
