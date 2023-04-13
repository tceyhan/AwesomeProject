import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";

const screenDimensions = Dimensions.get("window");

const DropDown = () => {
  const cities = ["İstanbul", "Ankara", "İzmir", "Bursa"];
  return (
    <View style={styles.container}>
      <SelectDropdown
        dropdownStyle={styles.dropdown}
        rowTextStyle={{ color: "white" }}
        buttonTextStyle={styles.btnText}
        buttonStyle={styles.btn}
        defaultButtonText="Şehir Seçiniz"
        data={cities}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    width:150,
  },
  dropdown: {
    backgroundColor: "#c88",
    width: 130,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "#c33",
    width: 130,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  btnText: { color: "white", fontSize: 16 },
});
