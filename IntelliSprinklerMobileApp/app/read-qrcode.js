import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Stack, useRouter } from 'expo-router';

const QrcodeReader = ({navigation}) =>  {
    const router = useRouter();

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Please grant camera permission!</Text>;
  }

  return(
    <View style={styles.container}>
    <Stack.Screen 
            options={{
                headerShadowVisible: false, //Removing the border shadow
                headerTitle: "Scan Device QR"
            }}
        />

      <Camera
        onBarCodeScanned={(...args) => {
          const data = args[0].data;
          result = JSON.stringify(data);
          result = result.replace(/['"]+/g, '')
          router.push(`/add-sprinkler?deviceId=${result}`);
        }}
        barCodeScannerSettings={{
          barCodeTypes: ['qr'],
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default QrcodeReader;