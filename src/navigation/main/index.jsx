import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RemedioList, RemedioNuevo, Welcome, CameraForm } from "../../pantallas";
import { theme } from "../../constantes";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

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
            <Stack.Screen
                name="RemedioList"
                component={RemedioList}
                options={({ navigation }) => ({
                    title: "Medicación Activa",
                    headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("CameraForm")}>
                        <Ionicons name="camera" size={25} color={theme.colores.white} />
                    </TouchableOpacity>
                    ),
                })}
            />
            
            <Stack.Screen name="CameraForm" component={CameraForm}
                options={({ route }) => ({
                    title: "Ingrese Nueva Imagen",
                }) }
            />
        </Stack.Navigator>
    );
};

export default MainNavigator