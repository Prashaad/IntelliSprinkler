import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router'; 

import { COLORS, icons, images, SIZES } from '../constants';
import { Sprinklers, ScreenHeaderBtn, Welcome } from '../components';

const router = useRouter();
router.push(`/home`);