import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./screens/ProfileScreen";
import TodayScreen from "./screens/TodayScreen";
import HabitsScreen from "./screens/HabitsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AccentColorContext } from "./App";
import { NavigationContainer } from "@react-navigation/native";
import AddHabitScreen from "./screens/AddHabitScreen";

const Tab = createBottomTabNavigator();

const navigationTheme = {
  colors: {
    primary: "white",
    background: "black",
    card: "black",
    text: "white",
    border: "white",
  },
};

function AppNavigator() {
  const { accentColor } = React.useContext(AccentColorContext);
  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Today") {
              iconName = focused ? "calendar" : "calendar";
            } else if (route.name === "Habits") {
              iconName = focused ? "list" : "list";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: accentColor,
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            display: "flex",
            padding: 10,
            backgroundColor: "black",
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            width: "100%",
          },
        })}
      >
        <Tab.Screen name="Today" component={TodayScreen} />
        <Tab.Screen name="Habits" component={HabitsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen
          name="AddHabit"
          component={AddHabitScreen}
          options={{ tabBarButton: () => null, tabBarVisible: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
