import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';


export default function App() {

const [estado, setarEstado] = useState('leitura');
const [anotacao, setarAnotacao] = useState('Mskdjksadddbshbksabkasjdbaksdjbadkasbdakjdbasjdbak');
  if(estado == 'leitura'){
    return (

      <View>
        <StatusBar hidden />
        <View style={styles.view}><Text style={styles.text}>Bloco de Notas</Text></View>
      
        <View style={{padding: 20}}><Text style={styles.text}>{anotacao}</Text></View>
        <View><TouchableOpacity onPress ={() => setarEstado ('atualizando')} style = {styles.button}><Text style={styles.buttontxt}>+</Text></TouchableOpacity></View>
      </View>
      )
      }else if(estado == 'atualizando'){
        return(
          <View>
            <View style={{padding: 20}}><Text style={styles.text}>{anotacao}</Text></View>
            <View><TouchableOpacity onPress ={() => setarEstado('leitura')}><Text>Salvar</Text></TouchableOpacity></View>
          </View>
          
        );
    }
}
const styles = StyleSheet.create({
  
  view:{
    backgroundColor: '#f11',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
  },
  text:{
    textAlign: 'center',
    fontSize: 20
  },
  button:{
    width: 50,
    height: 50,
    backgroundColor: '#f11',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 25,
    bottom: -525,
    borderRadius: 25
  },
  buttontxt: {
    fontSize: 30,
    top: -1
  }
});
