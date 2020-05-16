import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


export default function Home({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Chapter-1"
            onPress={() => navigation.navigate('Chapter01')}
          />
          <Button
            title="Go to Chapter-2"
            onPress={() => navigation.navigate('Chapter02')}
          />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
