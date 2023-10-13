import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const IntelliBarcodeScanner = () => {
    const [hasCameraPermission, setHasCameraPermission] = useState(false);
    const [scanData, setScanData] = useState();

    useEffect(() => {
        (async() => {
        const {status} = await BarCodeScanner.requestPermissionsAsync();
        setHasCameraPermission == true;
        })();
    }, []);

    const handleBarcodeScanned = ({type, data}) => {
        setScanData(data);
        console.log(`Type: ${type}`);
        console.log(`Data: ${data}`);
    }

    if(!hasCameraPermission){
        return (
        <View>
            <Text>Please grant camera permission!</Text>
        </View>
        )
    }

    return(
        <View>
            <BarcodeScanner onBarCodeScanned={scanData ? undefined : handleBarcodeScanned} />
        </View>
    )
}

export default IntelliBarcodeScanner;