import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SeatsLayout from "@mindinventory/react-native-bus-seat-layout";
import { SleeperSeatIcon } from "../../../assets";
const SeatContainer = ({setBooked}) => {
  
  return (
    <View style={styles.container}>
      <SeatsLayout
        row={6}
        // driverPosition="left"
        maxSeatToSelect={5}
        //   isSleeperLayout={true}
        layout={{ columnOne: 2, columnTwo: 1 }}
        selectedSeats={[
        //   { seatNumber: 1, seatType: "booked" },
          { seatNumber: 11, seatType: "women" },
          { seatNumber: 17, seatType: "women" },
          { seatNumber: 43, seatType: "blocked" },
        ]}
        numberTextStyle={{ fontSize: 16, display: "none"}}
        seatImage={{ image: SleeperSeatIcon, tintColor: "#B2B2B2" }}
        getBookedSeats={(seats) => {
          console.log("getBookedSeats :: ", seats);
          setBooked(seats);
        }}
      />      
    </View>
  );
};

export default SeatContainer;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").width * 0.9,
    width: Dimensions.get("window").width * 0.9,
    transform: [{ rotate: "90deg" }, { rotateX: "180deg" }],
  },
});
