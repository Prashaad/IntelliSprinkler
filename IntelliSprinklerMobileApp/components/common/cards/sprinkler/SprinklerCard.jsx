import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../../utils'

import styles from './sprinklercard.style'

const SprinklerCard = ({ sprinkler, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container}
    onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{uri: checkImageURL(sprinkler.icon) ? sprinkler.icon : "https://www.clipartmax.com/png/middle/98-984573_install-sprinkler-icon.png"}}
          resizeMode="contain"
          style={styles.logImage}
          />
      </TouchableOpacity>      

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {sprinkler.name}
        </Text>
        <Text style={styles.jobType} numberOfLines={1}>
          {sprinkler.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default SprinklerCard