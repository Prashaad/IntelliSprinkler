import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

import { COLORS, FONT, SIZES, icons, images } from '../constants';
import { IntelliBarcodeScanner } from '../components';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const userData = {
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
        <View style={styles.formContainer}>
            <Text style={styles.screenTitle}>IntelliSprinkler | Login</Text>
        </View>

        <View style={styles.formContainer}>
            <View style={styles.formWrapper}>
            <TextInput
                style={styles.formInput}
                onChangeText={(email) => setEmail(email)}
                placeholder="Email / Username" 
            />
            </View>
        </View>

        <View style={styles.formContainer}>
            <View style={styles.formWrapper}>
            <TextInput
                style={styles.formInput}
                onChangeText={(password) => setDeviceDescription(password)}
                placeholder="Password" 
            />
            </View>
        </View>

        <View style={styles.formContainer}>
            <TouchableOpacity style={styles.applyBtn} onPress={handleAdd}>
            <Text style={styles.applyBtnText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    screenTitle:{fontSize: SIZES.xLarge},
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

export default Login