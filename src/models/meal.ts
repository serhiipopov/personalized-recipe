import { IMeal, Location } from '../types/meals';

export class Meal implements IMeal {
  id: string;
  name: string;
  pickedImage: string;
  pickedLocation: Location;

  constructor(name: string, pickedImage: string, pickedLocation: Location) {
    this.id = new Date().toString();
    this.name = name;
    this.pickedImage = pickedImage;
    this.pickedLocation = {
      lat: pickedLocation.lat,
      lng: pickedLocation.lng,
      address: pickedLocation.address
    };
  }
}
