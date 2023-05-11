import { TouchableWithoutFeedback, View, Text, Button, Image } from "react-native"
import { styles } from './styles';
import { theme } from "../../constantes/theme";
import { Card } from "../../componentes"
import { useState } from "react";

const Welcome = ({ navigation }) => {

    return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>  
        <Image style={styles.imagen} source={require('../../../assets/logo.png')} />
        <Card style={styles.bienvenidaContainer}>
          <Text style={styles.bienvenidaTitulo}>Bienvenida!</Text>
          <Text style={styles.bienvenidaTexto}>A continuacion podras ingresar a tus medicamentos vigentes o ingresar un nuevo tratamiento. (AQUI VA UN LOG IN)</Text>
          <View style={styles.contenedorBotones}>
            <Button 
              title="Vigentes" onPress={() => navigation.navigate('RemedioList')} 
              color={theme.colores.claro} />
              <Button 
              title="Nuevo Medicamento" 
              onPress={() => navigation.navigate('RemedioNuevo')} 
              color={theme.colores.oscuro}
              />
          </View>  
        </Card>
      </View>
    </TouchableWithoutFeedback>
    );



};

export default Welcome; 