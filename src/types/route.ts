import { Screen } from '../constants/screen';
import { NavigationProp, RouteProp } from '@react-navigation/native';

export type AddMealRouteParams = {
  pickedLat: number;
  pickedLng: number;
};

export type RootStackParamList = {
  Home: undefined;
  Recipe: undefined;
  BuyList: undefined;
  Settings: undefined;
  Login: undefined;
  Signup: undefined;
  BottomTabsOverview: undefined;
  MyMeals: undefined;
  AddMeal: AddMealRouteParams;
  Map: undefined;
  RecipeDetails: { uri: string }
};

export type RecipeDetailsScreenRouteProp = RouteProp<RootStackParamList, Screen.RecipeDetails>;

export type StackNavigation = NavigationProp<RootStackParamList>;



