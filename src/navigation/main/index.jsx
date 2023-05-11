import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RemedioList, RemedioNuevo, Welcome } from "../../pantallas";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="RemedioNuevo" component={RemedioNuevo}/>
            <Stack.Screen name="RemedioList" component={RemedioList}/>
        </Stack.Navigator>
    );
};

export default MainNavigator