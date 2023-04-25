import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import IconButton from '../UI/IconButton';

import BuyListScreen from '../../screens/BuyListScreen';
import RecipeDetailScreen from '../../screens/RecipeDetailScreen';
import LoginScreen from '../../screens/LoginScreen';
import SignupScreen from '../../screens/SignupScreen';
import MyMealsScreen from '../../screens/MyMealsScreen';
import AddMeal from '../MyMeals/AddMeal';

import { RootStackParamList } from '../../types/route';
import { Screen as ScreenEnum } from '../../constants/screen';
import { GlobalStyles } from '../../constants/styles';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ScreenEnum.Home}>
          <Stack.Screen
            name={ScreenEnum.BottomTabsOverview}
            options={{ headerShown: false }}
            component={Tabs}
          />
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: GlobalStyles.colors.teal400 },
              headerTintColor: GlobalStyles.colors.gray50,
              presentation: 'modal'
            }}
            name={ScreenEnum.BuyList}
            component={BuyListScreen}
          />
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: GlobalStyles.colors.gray50 },
              headerTintColor: GlobalStyles.colors.gray900,
              presentation: 'modal',
              headerShown: false,
              title: ScreenEnum.RecipeDetails,
            }}
            name={ScreenEnum.RecipeDetails}
            component={RecipeDetailScreen}
          />
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: GlobalStyles.colors.teal400 },
              headerTintColor: GlobalStyles.colors.gray50,
            }}
            name={ScreenEnum.Login}
            component={LoginScreen}
          />
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: GlobalStyles.colors.teal400 },
              headerTintColor: GlobalStyles.colors.gray50,
            }}
            name={ScreenEnum.Signup}
            component={SignupScreen}
          />
          <Stack.Screen
            options={({ navigation }) => ({
              headerStyle: { backgroundColor: GlobalStyles.colors.teal400 },
              headerTintColor: GlobalStyles.colors.gray50,
              headerRight: () => (
                <IconButton
                  name='add'
                  size={32}
                  color={GlobalStyles.colors.gray50}
                  onPress={() => navigation.navigate(ScreenEnum.AddMeal)}
                />
              )
            })}
            name={ScreenEnum.MyMeals}
            component={MyMealsScreen}
          />
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: GlobalStyles.colors.teal400 },
              headerTintColor: GlobalStyles.colors.gray50,
            }}
            name={ScreenEnum.AddMeal}
            component={AddMeal}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default AppNavigation;
