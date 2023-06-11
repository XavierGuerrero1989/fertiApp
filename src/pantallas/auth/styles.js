import { StyleSheet } from 'react-native';
import { theme } from '../../constantes';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '80%',
        backgroundColor: theme.colores.white,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
    },
    imagen: {
        height:65,
        width: 180,
        alignSelf: 'center',
        margin: 20,
    },
    title: {
        margin: 10,
        fontFamily: 'Comfortaa-Bold',
        fontSize: 20,
        alignSelf: 'center'
    },
    label: {
        marginLeft: 10,
        margin: 5,
        fontFamily: 'Comfortaa-Light',
    },
    input: {
        marginLeft: 10,
        fontFamily: 'Comfortaa-Light',
        margin: 5,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: theme.colores.oscuro
    },
    buttonContainer: {
        margin: 10,
    },
    buttonText:{
        margin: 10,
        fontFamily: 'Comfortaa-Bold',
        textDecorationLine: 'underline',
        fontSize: 15,
        alignSelf: 'center',
        color: theme.colores.oscuro
    },
    submitContainer: {
        margin: 10,
    },
    containerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    modalContainer: {
        width: "75%",
        minHeight: 110,
        justifyContent: "space-around",
        alignItems: "center",
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.colores.oscuro,
        backgroundColor: theme.colores.grey,
      },
      modalTitle: {
        fontSize: 16,
        color: theme.colores.white,
        fontFamily: 'Comfortaa-Bold',
        textAlign: "center",
      },
});