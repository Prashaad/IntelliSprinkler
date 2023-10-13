import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

import { COLORS, FONT, SIZES, icons, images } from '../constants';
import { IntelliBarcodeScanner } from '../components';

const AddSprinkler = () => {
  const router = useRouter();
  const { deviceId, userId } = useGlobalSearchParams();
  const [deviceName, setDeviceName] = useState("");
  const [deviceDescription, setDeviceDescription] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const userData = {
      id: deviceId,
      name: deviceName,
      description: deviceDescription
    };
    axios.post("http://3.110.110.137/sprinkler/addsprinkler", userData).then((response) => {
      router.push(`../`);
    });
  };

  //alert(userDeviceId);

  return (
    <View>
      <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false, //Removing the border shadow
                    headerTitle: "Add Sprinkler"
                }}
            />

      <View style={styles.formContainer}>
        <View style={styles.formWrapper}>
          <TextInput
            style={styles.formInput}
            value={deviceId}
            onChange={() => {
              deviceId = "";
            }}
            placeholder="Device ID (Scan the QR)" 
          />
        </View>

        <TouchableOpacity style={styles.formBtn} onPress={() => router.push(`/read-qrcode`)}>
          <Image source={icons.scan} resizeMode="contain" style={styles.formBtnImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formWrapper}>
          <TextInput
            style={styles.formInput}
            onChangeText={(label) => setDeviceName(label)}
            placeholder="Label" 
          />
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formWrapper}>
          <TextInput
            style={styles.formInput}
            onChangeText={(description) => setDeviceDescription(description)}
            placeholder="Description" 
          />
        </View>
      </View>

      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.applyBtn} onPress={handleAdd}>
          <Text style={styles.applyBtnText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 40,
    marginLeft: SIZES.large,
    marginRight: SIZES.large
  },
  formWrapper: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.small,
    height: "100%",
  },
  formInput: {
    marginRight: SIZES.small,
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    placeholderTextColor: COLORS.gray,
    fontSize: SIZES.medium
  },
  formBtn: {
    width: 40,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.small,
  },
  formBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  applyBtn: {
    height: "100%",
    flex: 1,
    backgroundColor: COLORS.tertiary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.large,
    borderRadius: SIZES.medium,
  },
  applyBtnText: {
    flex: 1,
    paddingTop: SIZES.small,
    paddingBottom: SIZES.small,
    justifyContent: "center",
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});

export default AddSprinkler