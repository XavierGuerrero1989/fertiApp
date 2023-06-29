import { StyleSheet } from 'react-native';
import { theme } from '../../constantes';

export const styles = StyleSheet.create({

    inputContainer: {
        margin: 30,
        
    },
    formMiniTitle: {
        alignSelf: 'center',
        fontFamily: 'Comfortaa-Bold',
        fontSize: 20,
        color: theme.colores.oscuro,
    },
    input: {
        alignSelf: 'center',
        borderBottomColor: theme.colores.oscuro,
        borderBottomWidth: 1,
        margin: 5,
        height: 50,
    },
    formButton: {
        margin: 20,
        justifyContent: 'space-around',
        flexDirection: 'row',
    }

});

