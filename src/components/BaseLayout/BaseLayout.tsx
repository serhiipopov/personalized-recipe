import { StyleProp, StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

interface BaseLayoutProps {
  children: React.ReactNode;
  style?: StyleProp<any>;
}

const BaseLayout = ({ style, children }: BaseLayoutProps) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

export default BaseLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.gray50,
    paddingHorizontal: 22,
  }
})
