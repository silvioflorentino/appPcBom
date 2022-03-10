import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

const Separador = () => <View style={estilo.separador} />;

export default function Hardware() {
  return (
    <View style={estilo.container}>
      <Text> Software para Computador</Text>
      <FlatList
        data={softArray}
        keyExtractor={(item) => {item.uid.toString()}}
        renderItem={({item}) => (
          <View>
            <View>
              <Image
                resizeMode={'contain'}
                style={estilo.img}
                source={item.img}
              />
            </View>
            <View style={estilo}>
              <Text>{item.titulo} </Text>
              <Text> {item.descricao} </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    
  },
  separador: {
    marginVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#fff',
  },
  img: {
    width: largura,
    height: largura
  },
});

const softArray = [
  {
    uid: 1,
    titulo: 'Sistema Operacional',
    descricao: 'O software que controla toda o hardware.',
    img: require('../assets/hdd.png'),
  },
  {
    uid: 2,
    titulo: 'Word',
    descricao:
      'Serve para escrever e editar de Textos',
    img: require('../assets/fonte.png'),
  },
  {
    uid: 3,
    titulo: 'Excel',
    descricao:
      'Manipulação de planilhas de dados e resultados de cálculos diverso de médio e grande complexibilidade.',
    img: require('../assets/gpu.png'),
  },
  {
    uid: 4,
    titulo: 'Access',
    descricao:
      'Um programa de gerenciamento de banco de dados',
    img: require('../assets/placamae.png'),
  },
  {
    uid: 5,
    titulo: 'Visual Code',
    descricao:
      'Serve para criar e editar códigos em diversas linguagens de programação.',
    img: require('../assets/ram.png'),
  },
];
