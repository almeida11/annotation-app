import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return(
    <View style={styles.view}>
      <Text style={styles.text}>Bloco de Notas</Text>
    </View>
  )
}
const styles = StyleSheet.create({

  view:{
    backgroundColor: '#f11',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
  },
  text:{
    fontSize: 20
  }
});
export default Header;
