import { StyleSheet } from 'react-native';
import { theme } from '../../constantes';

export const styles = StyleSheet.create({

   container: {
    flex:1,
    overflow: 'scroll',
   },

    ListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
    addButton: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    deleteCTN: {
        alignSelf: 'flex-end',
    },

    ItemImage: {
        width: 200,
        height: 200,
        borderRadius: 5,
    },

    subTitulo: {
        alignSelf: 'center',
        fontFamily: 'Comfortaa-Bold',
        fontSize: 15,
    }
});

