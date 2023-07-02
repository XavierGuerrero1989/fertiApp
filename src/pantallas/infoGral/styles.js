import { StyleSheet } from 'react-native';
import { theme } from '../../constantes';

export const styles = StyleSheet.create({

    Container: {
        flex: 1,
        alignSelf: 'center',
        
    },

   texto: {
    fontFamily: 'Comfortaa-Medium',
    fontSize: 15,
   },

   textoLink: {
    fontFamily: 'Comfortaa-Medium',
    fontSize: 15,
    color: theme.colores.primario
   },
});