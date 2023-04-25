import { Screen } from '../constants/screen';
import { NavigationProp, RouteProp } from '@react-navigation/native';

export type ScreenNames = [
  Screen.Home,
  Screen.Recipe,
  Screen.BuyList,
  Screen.Settings,
  Screen.BottomTabsOverview,
  Screen.RecipeDetails
]

export type RootStackParamList = {
  Home: undefined;
  Recipe: undefined;
  BuyList: undefined;
  Settings: undefined;
  Login: undefined;
  Signup: undefined;
  BottomTabsOverview: undefined;
  MyMeals: undefined;
  AddMeal: undefined;
  RecipeDetails: { uri: string }
};

export type RecipeDetailsScreenRouteProp = RouteProp<RootStackParamList, Screen.RecipeDetails>;

export type StackNavigation = NavigationProp<RootStackParamList>;



