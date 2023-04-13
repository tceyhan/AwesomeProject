import React from "react";
import { View, Text } from "react-native";
import styles from "./Search.style";
import RadioButtons from "../../components/RadioButtons/RadioButtons";
import DropDown from "../../components/DropDown/DropDown";
import Button from "../../components/Button/Button";

const Search = () => {
  return (
    <View style={styles.container}>
      <RadioButtons />
      <View style={styles.dropdownContainer}>
        <Text style={styles.text}>Nereden</Text>
        <DropDown />
      </View>
      <View style={styles.dropdownContainer}>
      <Text style={styles.text}>Nereye</Text>
        <DropDown />        
      </View>
      <Button text="Ara" IconName="magnify" IconColor="white" />
    </View>
  );
};

export default Search;
