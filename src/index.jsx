import { useFonts } from 'expo-font';

import { View, ActivityIndicator } from 'react-native';

import { theme } from './constantes';
import { styles } from './styles';
import Welcome from './pantallas/welcome';
import { useState } from 'react';
import { RemedioNuevo } from './pantallas';




export default function App() {


  const [remediosViejos, setRemediosViejos] = useState(false);
  const [nuevoForm, setNuevoForm] = useState(false);

  const formSetter = (estado) => {
    setNuevoForm(estado);
  }

  const remedioSetter = (estado) => {
    setRemediosViejos(estado);
  }

  const Content = () => (nuevoForm ? <RemedioNuevo formSetter={formSetter} remedioSetter={remedioSetter}  /> : <Welcome formSetter={formSetter} remedioSetter={remedioSetter} />)
  

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
    <View style={styles.container}>
      <Content />
    </View>
  );
}
