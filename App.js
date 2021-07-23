import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TextAlignments } from 'react-native';

export default function App() {

const [estado,setarEstado] = useState('leitura');
const [anotacao,setarAnotacao] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim posuere mollis. Aliqua ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim posuere mollis. Aliquamm odio justo, auctor at dapibus laoreet, dignissim id nisi. Nullam tempor fringilla purus, sed porttitor ipsum lobortis id. Suspendisse commodo fringilla varius. Nulla cursus felis sit amet nibh maximus, quis tempor velit dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce et libero fermentum, rutrum tortor nec, pulvinar mauris. Praesent leo mauris, egestas nec enim iaculis, lacinia auctor ante. Sed dictum scelerisque tincidunt.');    


    if(estado == 'leitura'){
    return(
      <View style={{flex:1}}>
        <StatusBar hidden />
        <View style={styles.Header}><Text style={{textAlign:'center',color:'white',fontSize:18}}>Aplicativo Anotação</Text></View>
        
        <View style={{padding:20}}><Text style={styles.Anotacao}>{anotacao}</Text></View>

        <TouchableOpacity onPress={()=> setarEstado('atualizando')} style={styles.AddAnotacao}><Text style={styles.TextoAddAnotacao}>+</Text></TouchableOpacity>
      </View>
      
    )
    }else if(estado == 'atualizando'){
      return(
      <View style={{flex:1}}>
        <StatusBar hidden />
        <View style={styles.Header}><Text style={{textAlign:'center',color:'white',fontSize:18}}>Aplicativo Anotação</Text></View>
        
        <TextInput style={styles.EditorText} onChangeText={(text)=> setarAnotacao(text)} multiline={true} numberOfLines={5} value={anotacao}></TextInput>

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
