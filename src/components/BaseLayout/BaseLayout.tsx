import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default BaseLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.gray50,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 22,
  }
})
