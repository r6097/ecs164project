import * as React from "react";
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { image } = route.params;
  console.log("recieved", image)
  return (
    <View style={styles.container}>
      <Image source={{uri: image.uri}} style={styles.photo}/>
      <Button
        title="Retake Photo"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Payment"
        onPress={() => navigation.navigate('Payment')}
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
  photo: {
    width: "100%",
    height: "100%",
    flex: 4,
    borderRadius: 15,
  }
});