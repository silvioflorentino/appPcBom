import * as React from 'react';
import {View, Text, StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';


export default function Home(props){
return(
  <ScrollView>
  <View style={estilo.container}>
      <Text> Montagem de Computador</Text>
      <Text> Tudo que precisamos para montar um lindo e belo PC.</Text>
  <TouchableOpacity style={estilo.botao} onPress={()=>{props.navigation.navigate('Hardware')}}>
      <Text style={estilo.textobtn}> Hardware </Text>
  </TouchableOpacity>

  <TouchableOpacity style={estilo.botao} onPress={()=>{props.navigation.navigate('Software')}}>
      <Text style={estilo.textobtn}> Software </Text>
  </TouchableOpacity>

       
  </View>
  </ScrollView>
);
}

const estilo = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: '#FF4500',
  justifyContent:'center',
  textAlign: 'center'
},
botao:{
  margin:10,
  padding: 10,
  backgroundColor:'#add8e6',
  borderRadius:5,
}

})