import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
    container: {
        flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    },
    bienvenidaContainer: {
        justifyContent: 'center',
       alignItems: 'center',
       
    },
    bienvenidaTitulo: {
        fontFamily:'Comfortaa-Bold',
        fontSize: 20,
        marginBottom: 10,
    },
    bienvenidaTexto: {
        fontFamily:'Comfortaa-Bold',
        fontSize: 15,
        marginBottom: 10,
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imagen: {
        height:65,
        width: 180,
    }
});

