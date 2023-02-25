import * as React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

import { Camera, CameraType } from 'expo-camera';

export default function HomeScreen({ navigation }) {
  const [type, setType] = React.useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = React.useRef(null);

  async function takePicture() {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        navigation.navigate('Details', {
          image: data
        })
      } catch(e) {
        console.log(e);
      }
    }
  }

  return (
    (!permission ? 
        <View style={styles.container}>
          <Text>Loading...</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
      : 
      (!permission.granted ?
        <View style={styles.container}>
          <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
        :
        <View style={styles.container}>
          <Camera style={styles.camera} type={type} ref={cameraRef}>
            <View style={styles.buttonContainer}>
              
              <Icon 
                name="camera"
                type="font-awesome"
                color="#ffffff"
                size={52}
                onPress={takePicture}
              />
            </View>
          </Camera>
        </View>
      )
    )
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: 40,
    backgroundColor: 'transparent',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});