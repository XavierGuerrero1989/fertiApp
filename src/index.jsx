import { useFonts } from 'expo-font';

import { View, ActivityIndicator } from 'react-native';

import { theme } from './constantes';
import { styles } from './styles';
import Welcome from './pantallas/welcome';
import { useState } from 'react';
import { RemedioNuevo } from './pantallas';
import Navigation from './navigation';
import { Provider } from 'react-redux';
import store from './store/index';
import { init } from './db';

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed.");
    console.log(err);
  });


export default function App() {


  const [loaded] = useFonts({
    'Comfortaa': require('../assets/fonts/Comfortaa-Regular.ttf'),
    'Comfortaa-Light': require('../assets/fonts/Comfortaa-Light.ttf'),
    'Comfortaa-Medium': require('../assets/fonts/Comfortaa-Medium.ttf'),
    'Comfortaa-SemiBold': require('../assets/fonts/Comfortaa-SemiBold.ttf'),
    'Comfortaa-Bold': require('../assets/fonts/Comfortaa-Bold.ttf'),
  });

  if(!loaded) {
    return <ActivityIndicator size='large' color={theme.colores.oscuro} />;
  }
  
  return (
    <Provider store={store}>
      <Navigation />
    </Provider> 
  );
}

