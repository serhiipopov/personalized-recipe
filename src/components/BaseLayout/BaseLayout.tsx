import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

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
    justifyContent: 'center',
    alignItems: 'center'
  }
})
