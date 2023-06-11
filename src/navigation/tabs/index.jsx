import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigator from "../main";
import InfoGeneralNavigator from "../infoGral";
import { theme } from "../../constantes";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTab.Navigator
        initialRouteName="MainTab"
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
                fontFamily: "Comfortaa-SemiBold",
                fontSize: 12,
            },
            tabBarStyle: {
                backgroundColor: theme.colores.grey
            },
            tabBarActiveTintColor: theme.colores.oscuro,
            tabBarIconStyle: {
                fontSize: 24,
            }
        }}
        >
            <BottomTab.Screen name='MainTab' component={MainNavigator} 
                options={{
                    tabBarLabel: "Tratamiento",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name="home-outline" size={24}/>
                    ), 
                }}
            />
            
            <BottomTab.Screen name='InfoTab' component={InfoGeneralNavigator} 
                options={{
                    tabBarLabel: "Info Gral",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name="information-circle-outline" size={24}/>
                    ), 
                }}
            />
        </BottomTab.Navigator>
    );
};

export default TabNavigator