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
      <Text style={estilo.titulo}> Peças de Computador</Text>
      <FlatList
        data={pecasArray}
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
            <View>
              <Text style={estilo.titulo2}>{item.titulo} </Text>
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
    height:200

  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
  },
  titulo2:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

const pecasArray = [
  {
    uid: 1,
    titulo: 'Disco de armazenamento',
    descricao: 'HD server para guardar dados permanemtemente, mecanicamente.',
    img: require('../assets/hdd.png'),
  },
  {
    uid: 2,
    titulo: 'Fonte de energia',
    descricao:
      'Esse é o grande responsável por fazer com que a energia que vem da rede elétrica seja convertida e distribuída da forma correta para as partes do seu PC.',
    img: require('../assets/fonte.png'),
  },
  {
    uid: 3,
    titulo: 'Placa de Vídeo',
    descricao:
      'Um componente (parte) de um computador que envia sinais deste para a tela, de forma que possam ser apresentadas imagens ao utilizador.',
    img: require('../assets/gpu.png'),
  },
  {
    uid: 4,
    titulo: 'Placa Mãe',
    descricao:
      'É a parte do computador responsável por conectar e interligar todos os componentes',
    img: require('../assets/placamae.png'),
  },
  {
    uid: 5,
    titulo: 'Memória Ram',
    descricao:
      'É um espaço temporário de informações do sistema operacional e de aplicativos em uso.',
    img: require('../assets/ram.png'),
  },
  {
    uid: 6,
    titulo: 'SSD',
    descricao:
      ' O SSD também é mais resistente que os HDs comuns devido à ausência de partes mecânicas. Ele é mais rápido.',
    img: require('../assets/ssd.png'),
  },
  {
    uid: 7,
    titulo: 'Gabinete',
    descricao:
      'O gabinete do computador serve principalmente como uma forma de montar fisicamente as peças do pc.',
    img: require('../assets/gabinete.png'),
  },
];
