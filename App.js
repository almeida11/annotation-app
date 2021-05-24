import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';


export default function App() {

  const [estado, setarEstado] = useState('Leitura');
  const [anotacao, setarAnotacao] = useState('Minha Anotação');

  return (
    <View>
      <StatusBar hidden />
      <Header></Header>
      <Body></Body>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    
  },
});
