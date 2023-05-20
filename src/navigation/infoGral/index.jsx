import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProximasAplicaciones, RemedioList, RemedioNuevo, Welcome, InfoGeneral } from "../../pantallas";
import { theme } from "../../constantes";

const Stack = createNativeStackNavigator();

const InfoGeneralNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="ResumenInfo"
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
            <Stack.Screen name="ResumenInfo" component={InfoGeneral}
                options={({ route }) => ({
                    title: "Resumen de información",
                }) }
            />
            
        </Stack.Navigator>
    );
};

export default InfoGeneralNavigator 