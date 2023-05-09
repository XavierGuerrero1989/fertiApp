import { TouchableWithoutFeedback, View, Text, Button } from "react-native"
import { styles } from './styles';
import { theme } from "../../constantes/theme";
import { Card } from "../../componentes"
import { useState } from "react";

const Welcome = ({ remedioSetter, formSetter }) => {

   

    const onPressVigente = () => {
        remedioSetter(true)
        formSetter(false)
    }

    const onPressNuevo = () => {
        formSetter(true)
        remedioSetter(false)
    }

    return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>  
        <Card style={styles.bienvenidaContainer}>
          <Text style={styles.bienvenidaTitulo}>Bienvenida!</Text>
          <Text style={styles.bienvenidaTexto}>A continuacion podras ingresar a tus medicamentos vigentes o ingresar un nuevo tratamiento.</Text>
          <View style={styles.contenedorBotones}>
          <Button 
            title="Vigentes" onPress={onPressVigente} 
            color={theme.colores.claro} />
            <Button 
            title="Nuevo Medicamento" 
            onPress={onPressNuevo} 
            color={theme.colores.oscuro}
            />
          </View>  
        </Card>
      </View>
    </TouchableWithoutFeedback>
    );



};

export default Welcome; 