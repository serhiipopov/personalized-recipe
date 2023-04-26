import { PermissionResponse, PermissionStatus } from 'expo-image-picker';
import { Alert } from 'react-native';
import { STRINGS } from '../constants/strings';

export const verifyPermission = async (
  permissionInformation: PermissionResponse | null,
  requestPermission: () => Promise<PermissionResponse>,
  textAlert: string
  ): Promise<boolean> => {
  if (permissionInformation?.status === PermissionStatus.UNDETERMINED) {
    const permissionResponse = await requestPermission();

    return permissionResponse.granted;
  }

  if (permissionInformation?.status === PermissionStatus.DENIED) {
    Alert.alert(STRINGS.insufficientPermissions, textAlert)
    return false;
  }

  return true;
};
