import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage} from 'react-native';

export default function App() {
  //ESTADO DE LEITURA E ANOTAÇÃO E MODICADOR DE ANOTAÇÃO
  const [estado,setarEstado] = useState('leitura');
  const [anotacao,setarAnotacao] = useState('');    
  //LER AS ANOTAÇÕES SALVAS
  useEffect (() => {

    (async() => {
      try{
        const anotacaoLeitura = await AsyncStorage.getItem('anotacao');
        setarAnotacao(anotacaoLeitura);
      }catch(error){}

    })();

  },[])
  //SALVA A ANOTAÇÃO
  setData = async() => {
    try{
        await AsyncStorage.setItem('anotacao', anotacao); 
    }catch(error){

    }
  }
  //PÁGINA DE LEITURA DE ANOTAÇÃO
      if(estado == 'leitura'){
      return(
        <View style={{flex:1}}>
          <StatusBar hidden />
          <View style={styles.Header}><Text style={{textAlign:'center',color:'white',fontSize:18}}>Aplicativo Anotação</Text></View>
          
          <View style={{padding:20}}><Text style={styles.Anotacao}>{anotacao}</Text></View>

          <TouchableOpacity onPress={()=> setarEstado('atualizando')} style={styles.AddAnotacao}><Text style={styles.TextoAddAnotacao}>+</Text></TouchableOpacity>
        </View>
  //PÁGINA DE MODIFICAÇÃO DE ANOTAÇÃO     
      ) 
      }else if(estado == 'atualizando'){
        return(
        <View style={{flex:1}}>
          <StatusBar hidden />
          <View style={styles.Header}><Text style={{textAlign:'center',color:'white',fontSize:18}}>Aplicativo Anotação</Text></View>
          
          <TextInput autoFocus={true} style={styles.EditorText} onChangeText={(text)=> setarAnotacao(text)} multiline={true} numberOfLines={5} value={anotacao}></TextInput>

          <TouchableOpacity onPress={()=> setarEstado('leitura')} style={styles.SaveButton}><Text style={{textAlign:'center',color:'white'}}>Salvar</Text></TouchableOpacity>
        </View>
        );
      }

  }

  const styles = StyleSheet.create({
        Header:{
          width: '100%',
          padding: 15,
          backgroundColor: '#f11'
        },
        Anotacao:{
          fontSize:13,
          textAlign: 'justify'
        },
        AddAnotacao:{
          position:'absolute',
          right:20,
          bottom:20,
          width:50,
          height:50,
          backgroundColor:'#f11',
          borderRadius:25
        },
        TextoAddAnotacao:{
          color:'white',
          position:'relative',
          textAlign:'center',
          top: 3,
          fontSize:30
        },
        SaveButton:{
          position:'absolute',
          right:20,
          bottom:20,
          width:100,
          paddingTop:10,
          paddingBottom:10,
          backgroundColor:'#f11',
        },
        EditorText:{
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          height: 300,
          textAlignVertical: 'top',
        }
  });
