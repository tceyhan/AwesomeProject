import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";

const SelectTourCard = ({ item, handleDetail }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleDetail(item.id)}>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.logoUrl
          }}
        />
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.hour}</Text>
        <Text style={styles.text}>{item.emptySeat}</Text>
        <Text style={styles.text}>{item.price} TL</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SelectTourCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#dedede",
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 30,
  },
  text: {
    justifyContent: "center",
    margin: 5,
  },
});
