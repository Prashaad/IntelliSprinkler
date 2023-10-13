import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View , Switch} from 'react-native';
import { COLORS, FONT, SIZES } from "../constants";
import { Stack, useRouter } from 'expo-router';

const SprinklerDetails = () => {

  const [state, setState] = useState(false);

  const toggleSwitch = value => {
    setState({ switchValue: value });
  };


  return (
    <View>
      <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false, //Removing the border shadow
                    headerTitle: "Open Sprinkler"
                }}
            />
      
      <View style={styles.formContainer}>
        <View style={styles.formWrapper}>
          <TextInput
            style={styles.formInput}
            onChange={() => {}}
            placeholder="Duration in Minutes"
          />
        </View>

        <View style={styles.formSwitch}>
        <Switch
            style={{ height:25 }}
            onValueChange={toggleSwitch}
            value={state.switchValue}
          />
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.formWrapper}>
          <TextInput
            style={styles.formInput}
            onChange={() => {}}
            placeholder="Duration in Minutes"
          />
        </View>

        <View style={styles.formSwitch}>
        <Switch
            style={{ height:25 }}
            onValueChange={toggleSwitch}
            value={state.switchValue}
          />
        </View>
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
    placeholderTextColor: COLORS.gray
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
  formSwitch: {
    width: 80,
    height: "100%",
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.small,
    backgroundColor: COLORS.tertiary,
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


export default SprinklerDetails