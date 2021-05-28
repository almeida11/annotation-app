import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';

const Body = () => {

const [estado, setarEstado] = useState('leitura');
const [anotacao, setarAnotacao] = useState('Mskdjksadddbshbksabkasjdbaksdjbadkasbdakjdbasjdbak');

    if(estado == 'leitura'){
      return(
        <View>
          <View style={{padding: 20}}><Text style={styles.text}>{anotacao}</Text></View>
        </View>
      )
    }else if(estado == 'atualizando'){
      return(
        <View>
          <View style={{padding: 20}}><Text style={styles.text}>{anotacao}</Text></View>
        </View>
        
      );
  }
}

const styles = StyleSheet.create({
  text:{
    textAlign: 'center',
    fontSize: 16
  }
});

export default Body;