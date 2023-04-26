import {
  StyleSheet,
  View,
  Text,
  StyleProp
} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

interface NotificationProps {
  notification: string;
  style?: StyleProp<any>;
}

const Notification = ({ notification, style }: NotificationProps) => {
  return (
   <View>
     <Text style={[styles.title, style]}>{notification}</Text>
   </View>
  )
}

export default Notification;

export const styles = StyleSheet.create({
  title: {
    color: GlobalStyles.colors.gray500,
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 20,
    textTransform: 'uppercase',
    letterSpacing: 0.6
  }
})
