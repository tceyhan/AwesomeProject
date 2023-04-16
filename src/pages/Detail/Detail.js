import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import SeatContainer from "../../components/SeatContainer/SeatContainer";
import Button from "../../components/Button/Button";
import { Icon } from "@rneui/themed";


const Detail = ({ route }) => {
  const [booked, setBooked] = useState([]);
  // const [values, setValues] = useState({idNumber:"",sex:"",seatNo:""})
  const [idNumber, setIdNumber] = useState("");
  const [sex, setSex] = useState("");
  const [seatNo, setSeatNo] = useState("");
  
  const [totalPassenger,  setTotalPassenger] = useState([{idNumber, sex, seatNo}])

  const { item, newArrival, newDeparture } = route.params;
  // console.log(item, newArrival, newDeparture);

  const totalPrice = item.price * booked.length;

function setNo (seatNo) {
  setSeatNo(seatNo);
};

  const handleRegister = (totalPassenger)=> {    
      // navigation.navigate("Login", {totalPassenger});
      console.log(totalPassenger);   
  };

 

  return (
    <View style={styles.container}>
      <View style={styles.firmContainer}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{newDeparture}</Text>
        <Text style={styles.text}>{item.hour}</Text>
        <Text style={styles.text}>{item.emptySeat}</Text>
        <Text style={styles.text}>{item.price} TL</Text>
      </View>
      <View style={styles.bus}>
        <SeatContainer setBooked={setBooked} />
      </View>
      {booked.map((item, index) => {
        return (
          <View style={styles.book}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="TC Kimlik No"
                onChangeText={() => setIdNumber}                
                value={idNumber}
                maxLength={11}
              />
              <Icon
                name="id-card"
                size={30}
                color="black"
                type="material-community"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Cinsiyet"
                onChangeText={setSex}                
                value={sex}
              />
              <Icon
                name="gender-male-female"
                size={30}
                color="black"
                type="material-community"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.input}>{item.seatNo}</Text>
              <Icon
                name="sofa-single-outline"
                size={30}
                color="black"
                type="material-community"
              />
            </View>
          </View>
        );
      })}
      {booked.length > 0 && (
        <View style={styles.buyBtn}>
          <Button
            text={`${totalPrice} TL\nSatın Al`}
            IconName="arrow-right-bold-outline"
            IconColor="white"
            onPress={handleRegister}
          />
        </View>
      )}
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  firmContainer: {
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
  bus: {},
  book: {
    flexDirection: "row",
  },
  inputContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  input: {
    fontSize: 16,
    color: "rebeccapurple",
  },
  buyBtn: {
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
});
