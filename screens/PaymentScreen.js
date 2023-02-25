import * as React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function PaymentScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>sadge</Text>
      <Button
        title="Take Another Photo"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Back to Details"
        onPress={() => navigation.navigate('Details')}
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