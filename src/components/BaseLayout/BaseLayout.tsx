import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
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
    paddingHorizontal: 16,
    paddingVertical: 8,
  }
})
