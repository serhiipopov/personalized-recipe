import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../../screens/HomeScreen';
import RecipeScreen from '../../screens/RecipeScreen';
import BuyListScreen from '../../screens/BuyListScreen';

import { Screen as ScreenEnum } from '../../constants/screen';
import { GlobalStyles } from '../../constants/styles';
import SettingsScreen from '../../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabsOverview = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: GlobalStyles.colors.teal500},
          headerTintColor: GlobalStyles.colors.cyan100,
          tabBarStyle: {backgroundColor: GlobalStyles.colors.teal500},
          tabBarActiveTintColor: GlobalStyles.colors.teal900,
          tabBarInactiveTintColor: GlobalStyles.colors.cyan100,
        }}
      >
        <Tab.Screen
          name={ScreenEnum.Home}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='home-outline' color={color} size={size} />
          }}
        />
        <Tab.Screen
          name={ScreenEnum.Recipe}
          component={RecipeScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='reader-outline' color={color} size={size} />
          }}
        />
        <Tab.Screen
          name={ScreenEnum.BuyList}
          component={BuyListScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='create-outline' color={color} size={size} />
          }}
        />
        <Tab.Screen
          name={ScreenEnum.Settings}
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='settings-outline' color={color} size={size} />
          }}
        />
      </Tab.Navigator>
    </>
  )
}

const Tabs: FC = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenEnum.Home}>
      <Stack.Screen name='BottomTabsOverview' options={{ headerShown: false }} component={BottomTabsOverview} />
    </Stack.Navigator>
  )
}

export default Tabs;
