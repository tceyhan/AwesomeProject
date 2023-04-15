import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    // justifyContent: "center",
    alignItems: "center",
    // marginBottom:20,
    // backgroundColor: 'gray',
  },
  radioBtn: {    
  },
  dropdownContainer: {    
    marginHorizontal:10,
    flexDirection: "row",
    margin:5
  },
  text:{
    backgroundColor: "#c99",
    color: 'white',
    fontSize:18,
    fontWeight: 'bold',
    width: 130,
    borderRadius: 5,
    marginHorizontal: 10,
    textAlign: "center",
    textAlignVertical:"center"   
  },
  dateContainer: {   
    flexDirection: "row",
    margin:5
  },
  dateSubContainer:{
    marginHorizontal: 10,    
    backgroundColor: "#c99",
    opacity:1,    
  },
  dateDisabled:{
    marginHorizontal: 10,    
    backgroundColor: "#c99",
    opacity: 0.6,    
  },
  textDate:{
    backgroundColor: "#c99",
    color: 'white',
    fontSize:18,
    fontWeight: 'bold',
    width: 130,
    borderRadius: 5,
    marginHorizontal: 10,
    padding:10,
    textAlign: "center",
    textAlignVertical:"center"   
  },
  searchBtn:{
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
});
