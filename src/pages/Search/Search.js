import { View, Text } from 'react-native'
import React from 'react'

import styles from "./Search.style";
import RadioButtons from '../../components/RadioButtons/RadioButtons';

const Search = () => {
  return (
    <View style={styles.container}>
      <RadioButtons />    
    </View>
  )
}

export default Search