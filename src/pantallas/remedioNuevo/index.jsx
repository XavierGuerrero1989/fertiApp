import { TouchableWithoutFeedback, View, Text, Button, TextInput } from "react-native"
import { styles } from './styles';
import { theme } from "../../constantes/theme";
import { Card } from "../../componentes"

const RemedioNuevo = ({ remedioSetter, formSetter }) => {



    const onPressBack = () => {
        formSetter(false)
        remedioSetter(false)
    }


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Ingrese los datos del medicamento.</Text>
                <Card style={styles.inputContainer}>
                    <TextInput
                        placeholder="Medicamento"
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        blurOnSubmit
                        // value={}
                    />
                    <TextInput
                        placeholder="Fecha de inicio"
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        blurOnSubmit
                        // value={}
                    />
                    <TextInput
                        placeholder="Hora de inicio"
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        blurOnSubmit
                        // value={}
                    />
                    <View style={styles.formButton}>
                        <Button 
                        title="Back" onPress={onPressBack} 
                        color={theme.colores.oscuro} />
                        <Button 
                        title="Reset" onPress={() => {}} 
                        color={theme.colores.primario} />
                        <Button 
                        title="Confirm" 
                        onPress={() => {}} 
                        color={theme.colores.oscuro}  
                       />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default RemedioNuevo;