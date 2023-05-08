import { useFonts } from 'expo-font';
import { useState } from 'react';
import { View } from 'react-native';

import { Header } from './components';
import { Game, StartGame } from './screens/index';
import { styles } from './styles';
import { theme } from './constants';




export default function App() {

  

  const [loaded] = useFonts({
    'Comfortaa': require('../assets/fonts/Comfortaa-Regular.ttf'),
    'Comfortaa-Light': require('../assets/fonts/Comfortaa-Light.ttf'),
    'Comfortaa-Medium': require('../assets/fonts/Comfortaa-Medium.ttf'),
    'Comfortaa-SemiBold': require('../assets/fonts/Comfortaa-SemiBold.ttf'),
    'Comfortaa-Bold': require('../assets/fonts/Comfortaa-Bold.ttf'),
  });

  


  return (
    <View style={styles.container}>
      <Text>hello</Text>
    </View>
  );
}
