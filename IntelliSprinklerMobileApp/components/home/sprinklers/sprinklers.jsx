import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './sprinklers.style';
import { COLORS } from '../../../constants';
import SprinklerCard from '../../common/cards/sprinkler/SprinklerCard';
import useFetch from '../../../hook/useFetch';

const Sprinklers = () => {
  const router = useRouter();
  // const isLoading = false;
  // const error = false;

  const { data, isLoading, error } = useFetch('GetAllSprinklers');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Sprinklers</Text>
        <TouchableOpacity onPress={() => router.push(`/add-sprinkler?userId=1`)}><Text style={styles.headerBtn}>+ Add Sprinkler</Text></TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong!</Text>
        ) : (
          data?.map((sprinkler) => (
            <SprinklerCard 
              sprinkler= {sprinkler}
              key={`sprinkler-${sprinkler?.id}`}
              handleNavigate={() => router.push(`/${sprinkler.id}}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Sprinklers