export interface IMeal {
  title: string;
  img: string;
  id: string;
}

export interface MealsState {
  meals: IMeal[];
  isLoading: boolean;
  error: string;
}
