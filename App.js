import * as React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
      <Image style={estilo.headimg} source={require("./assets/captura_webcelular.png")}/>
    <ScrollView>
      <Image style={estilo.gifheader} source={require("./assets/tenor(1).gif")}/>
      <Text style={estilo.destaque}> Destaques </Text>
      <Text style={estilo.bodytext}>       Novidades     Mobile TV & AV       Elétrodomestico          </Text>
      <Image style={estilo.body} source={require("./assets/SSG_SIA_Banner_Destaque_MO.png")}/>
      <Image style={estilo.moreimg} source={require("./assets/captelaitems")}/>
      <Text style={estilo.mobile}> Mobile </Text>
      <Text style={estilo.bodytext}>    Galaxy S22|S22+     Galaxy A53 5G       Galaxy Tab S8          </Text>
      <Image style={estilo.s22img} source={require("./assets/s22.png")}/>
      <Text style={estilo.s22t}> Galaxy S22|S22+ </Text>
      <Text style={estilo.s22c}> Compre agora ➚ </Text>
      <Text style={estilo.s22s}> Saiba mais</Text>
      <Image style={estilo.tv} source={require("./assets/tv.png")}/>



</ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
container:{
flex:1,
backgroundColor: '#FFFF'
},
headimg:{
marginTop:16,
textAlign:'center'
},
gifheader:{
},
body:{
height:350,
width:400,
alignItems: 'center',
},
bodytext:{
marginTop:5,
marginBottom:19,
fontSize:15,
alignItems: 'center',
fontWeight:"bold",
},
destaque:{
fontSize: 30,
textAlign:'center',
marginTop:30,
marginBottom:30,
fontWeight:"bold",
},
moreimg:{
marginLeft:30,
alignItems: 'center',
width:333,
height:425,
},
mobile:{
fontSize: 30,
textAlign:'center',
marginTop:110,
marginBottom:30,
fontWeight:"bold",
},
s22img:{
marginLeft:30,
marginTop:30,
marginBottom:10,
alignItems:'center',
},
s22t:{
fontSize: 30,
textAlign:'center',
fontWeight:"bold",
marginBottom:0,
},
s22c:{
fontSize: 20,
textAlign:'center',
fontWeight:"bold",
marginBottom:0,
},
s22s:{
fontSize: 15,
textAlign:'center',
marginBottom:0,
},
tv:{
marginLeft:30,
marginTop:30,
marginBottom:10,
alignItems:'center',
height:470,
width:300,
},
});






