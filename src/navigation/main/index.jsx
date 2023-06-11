import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RemedioList, RemedioNuevo, Welcome } from "../../pantallas";
import { theme } from "../../constantes";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="RemedioList"
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
            <Stack.Screen name="Welcome" component={Welcome}
                options={({ route }) => ({
                    title: "Bienvenida",
                }) }
            />
            <Stack.Screen name="RemedioNuevo" component={RemedioNuevo}
                options={({ route }) => ({
                    title: "Inicio Nuevo Tratamiento",
                }) }
            />
            <Stack.Screen name="RemedioList" component={RemedioList}
                options={({ route }) => ({
                    title: "Medicación Activa",
                }) }
            />
        </Stack.Navigator>
    );
};

export default MainNavigator