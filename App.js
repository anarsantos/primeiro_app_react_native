import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Alert } from 'react-native';
import { css } from './assets/css/Css';
import Page from './node_modules/views/Page';

export default function App() {
  const [product,setProduct]=useState('bola');
  const [quantity,setQuantity]=useState(0);

  useEffect(()=>{
    if(quantity > 0) {
      Alert.alert("Novo produto adicionado.");
    }
  });

  /*Spread*/
  const props={
    empresa: 'Webdesign em Foco',
    name: 'Thiago',
    produto: product,
    quantidade: quantity
  };

  return (
    <View style={css.container}>
      <Text>{product}</Text>      
      <Page {...props} />
      <Button title='Adicionar produtos' onPress={()=>setQuantity(quantity + 1)} />
      {/*<Page empresa='Webdesign' name='Thiago'/>*/}
      {/*<Page empresa='Programação'/>
      <Page empresa='Devs'/>
  <StatusBar style="auto" />*/}
    </View>
  );
}


