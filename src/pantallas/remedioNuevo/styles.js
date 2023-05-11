import { StyleSheet } from 'react-native';

import { theme } from '../../constantes';

export const styles = StyleSheet.create({
  
    formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    formTitle: {
        fontFamily: 'Comfortaa-Medium',
        fontSize: 22,
    },
    inputContainer: {

    },
    input: {
        height: 40,
        margin: 15,
        borderBottomWidth: 1,
        borderBottomColor: theme.colores.primario
    },
    formButton: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});






