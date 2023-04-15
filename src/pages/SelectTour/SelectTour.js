import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import SelectTourCard from "../../components/SelectTourCard/SelectTourCard";
import styles from "./SelectTour.style";

const SelectTour = ({navigation}) => {
  const tourList = [
    {
      id:1,
      logoUrl: "https://play-lh.googleusercontent.com/0CeB0M1y0B28S95PgYJsKEOgWkQ_FoWi9cwvBVUD3wvB1wfw8xX48a8ZWr9hDojpE3k",
      name: "Pamukkale",
      hour: "21:00",
      emptySeat: 5,
      price: 100,
    },
    {
      id:2,
      logoUrl: "https://play-lh.googleusercontent.com/0CeB0M1y0B28S95PgYJsKEOgWkQ_FoWi9cwvBVUD3wvB1wfw8xX48a8ZWr9hDojpE3k",
      name: "Pamukkale",
      hour: "21:00",
      emptySeat: 5,
      price: 100,
    },
    {
      id:3,
      logoUrl: "https://play-lh.googleusercontent.com/0CeB0M1y0B28S95PgYJsKEOgWkQ_FoWi9cwvBVUD3wvB1wfw8xX48a8ZWr9hDojpE3k",
      name: "Pamukkale",
      hour: "21:00",
      emptySeat: 5,
      price: 100,
    },
    {
      id:4,
      logoUrl: "https://play-lh.googleusercontent.com/0CeB0M1y0B28S95PgYJsKEOgWkQ_FoWi9cwvBVUD3wvB1wfw8xX48a8ZWr9hDojpE3k",
      name: "Pamukkale",
      hour: "21:00",
      emptySeat: 5,
      price: 100,
    },
    {
      id:5,
      logoUrl: "https://play-lh.googleusercontent.com/0CeB0M1y0B28S95PgYJsKEOgWkQ_FoWi9cwvBVUD3wvB1wfw8xX48a8ZWr9hDojpE3k",
      name: "Pamukkale",
      hour: "21:00",
      emptySeat: 5,
      price: 100,
    },
  ];
  const handleDetail = (id) => {
    navigation.navigate('Detail', {id});
  };


  const renderFirm = ({item}) => <SelectTourCard item={item}  handleDetail={() =>handleDetail(item.id)}/>;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={[styles.text, styles.logo]}>Logo</Text>       
        <Text style={styles.text}>Firma</Text>
        <Text style={styles.text}>Saat</Text>
        <Text style={[styles.text, styles.textSeat]}>Boş Koltuk</Text>
        <Text style={styles.text}>Fiyat</Text>
      </View>      
      <FlatList 
        data={tourList}
        renderItem={renderFirm}
        style={styles.list}
      />     
    </View>
  );
};

export default SelectTour;
