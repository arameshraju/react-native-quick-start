import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


export default function Chapter01({navigation}) {
  return (
    <View style={styles.container}>
      <text>Flex box Example</text>
        <View style={styles.topBox} >
          <View style={styles.topLeft} >
           <text>Left 1</text>
        </View>
        <View style={styles.topRight} >
           <text>Righ 1</text>
        </View>
        </View>
        <View style={styles.bottomBox} >
          <text>This Bottom box with Flex:1</text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBox:{
    flex:3,
    flexDirection: 'row',
    backgroundColor:'#9880FF'
  },
  bottomBox:{
    flex:1,
    backgroundColor:'#FF8873'
  },
  topLeft:{
    flex:1,
    backgroundColor:'#FFF5A6'
  },  
  topRight:{
    flex:2,
    backgroundColor:'#FF9D8C'
  }


});
