import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigator from "../main";
import ProxAplicacionNavigator  from "../proximasAplicaciones";
import InfoGeneralNavigator from "../infoGral";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTab.Navigator
        initialRouteName="MainTab"
        screenOptions={{
            headerShown: false,
        }}
        >
            <BottomTab.Screen name='MainTab' component={MainNavigator} 
                options={{
                    tabBarLabel: "Tratamiento"
                }}
            />
            <BottomTab.Screen name='AlarmTab' component={ProxAplicacionNavigator}
                options={{
                    tabBarLabel: "Alarmas"
                }}
            />
            <BottomTab.Screen name='InfoTab' component={InfoGeneralNavigator} 
                options={{
                    tabBarLabel: "Info Gral"
                }}
            />
        </BottomTab.Navigator>
    );
};

export default TabNavigator