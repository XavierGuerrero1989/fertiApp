import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProximasAplicaciones } from "../../pantallas";
import { theme } from "../../constantes";

const Stack = createNativeStackNavigator();

const ProxAplicacionNavigator  = () => {
    return (
        <Stack.Navigator initialRouteName="Alarmas"
        screenOptions={{
            headerStyle: {
                backgroundColor: theme.colores.primario
            },
            headerTintColor: theme.colores.oscuro,
            headerTitleStyle: {
                fontFamily: "Comfortaa-Bold",
                color: "white",
            },
        }}
        >
            <Stack.Screen name="Alarmas" component={ProximasAplicaciones}
                options={({ route }) => ({
                    title: "Alarmas",
                }) }
            />
            
        </Stack.Navigator>
    );
};

export default ProxAplicacionNavigator 