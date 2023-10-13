import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router'; 

import { COLORS, icons, images, SIZES } from '../constants';
import { Sprinklers, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();
    const [userId, setUserId] = useState(1);
    const [displayName, setDisplayName] = useState('Prashaad');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false, //Removing the border shadow
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle: ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Welcome userId={userId} displayName={displayName} />
                    <Sprinklers />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home;