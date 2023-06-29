import { StyleSheet } from 'react-native';

import { theme } from '../../constantes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    height: 200,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.colores.primario,
    borderWidth: 2,
  },
  buttonCtn: {
    margin: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  
});
