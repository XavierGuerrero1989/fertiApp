import { StyleSheet } from 'react-native';
import { theme } from '../../constantes';

export const styles = StyleSheet.create({

    ListContainer: {
        justifyContent: 'flex-start',
        marginHorizontal: 15,
    },

    ItemTitle: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 22,
        color: theme.colores.oscuro,
        
    },
    ItemMedicamento: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 15,
    },
    ItemDosis: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 15,
    },
    ItemDate: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 15,
    },
    ItemTime: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: 15,
    },
   
});

