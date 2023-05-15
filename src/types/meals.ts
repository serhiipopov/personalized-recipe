export interface IMeal {
  name: string;
  id: string;
  pickedImage: string | undefined;
  pickedLocation: Location;
}

export interface MealsState {
  meal: IMeal;
  meals: IMeal[];
  isLoading: boolean;
  error: string;
}

export interface Location {
  lat?: number;
  lng?: number;
  address?: string;
}
