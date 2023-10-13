import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router'; 

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const Welcome = ({userId, displayName}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hi {displayName}</Text>
        <Text style={styles.welcomeMessage}>Welcome to IntelliSprinkler</Text>
      </View>
    </View>
  )
}

export default Welcome