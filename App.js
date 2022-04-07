import * as React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
          <Image style={estilo.headimg} source={require("./assets/captura_webcelular.png")}/>
      <ScrollView>
      <Image style={estilo.headimg} source={require("./assets/tenor(1).gif")}/>
            <Text style={estilo.destaque}> Destaque </Text>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
container:{
flex:1,
backgroundColor: '#FFFF'
},
destaque:{
  fontSize: 40,
marginBottom:20,
textAlign:'right'
}
});











