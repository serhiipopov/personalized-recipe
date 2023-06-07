import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { logOutAsync } from '../../store/auth/slice';

import HomeScreen from '../../screens/HomeScreen';
import RecipeScreen from '../../screens/RecipeScreen';
import SettingsScreen from '../../screens/SettingsScreen';

import { RootStackParamList } from '../../types/route';
import { Screen as ScreenEnum } from '../../constants/screen';
import { GlobalStyles } from '../../constants/styles';

const Tab = createBottomTabNavigator();

const Tabs = ({ userId }: { userId: string }) => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector(state => state.authReducer);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const logOutHandler = () => {
    dispatch(logOutAsync());
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.teal500 },
        headerTintColor: GlobalStyles.colors.cyan100,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.teal500 },
        tabBarActiveTintColor: GlobalStyles.colors.teal900,
        tabBarInactiveTintColor: GlobalStyles.colors.cyan100,
        headerRight: () => (
          <>
            {userId? (
                <Pressable style={{ marginRight: 30 }} onPress={logOutHandler}>
                  <Ionicons name='exit-outline' color={GlobalStyles.colors.gray50} size={26} />
                </Pressable>
              )
              : (
                <Pressable style={{ marginRight: 30 }} onPress={() => navigation.navigate(ScreenEnum.Login)}>
                  <Ionicons name='person-outline' color={GlobalStyles.colors.gray50} size={26} />
                </Pressable>
              )
            }
          </>
        )
      }}
    >
      <Tab.Screen
        name={ScreenEnum.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) =>
            <Ionicons name='home-outline' color={color} size={size} />
        }}
      />
      <Tab.Screen
        name={ScreenEnum.Recipe}
        component={RecipeScreen}
        options={{
          tabBarIcon: ({ color, size }) =>
            <Ionicons name='reader-outline' color={color} size={size} />
        }}
      />
      {isAuthenticated && (
        <Tab.Screen
          name={ScreenEnum.Settings}
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) =>
              <Ionicons name='settings-outline' color={color} size={size} />
          }}
        />
      )}
    </Tab.Navigator>
  )
}

export default Tabs;
