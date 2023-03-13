import { FC } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Strings } from '../../constants/strings';


const HomeContainer: FC = () => {
  return (
    <View style={styles.container}>
      <View  style={styles.wrapperPress}>
        <Pressable hitSlop={8}>
        <Text style={styles.textPress}>{Strings.whatBuy}</Text>
        </Pressable>
      </View>
     <View  style={styles.wrapperPress}>
       <Pressable
         onPress={() => {
         }}
       >
       <Text style={styles.textPress}>2</Text>
       </Pressable>
     </View>

    </View>
  );
};

export default HomeContainer;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 100,
  },
  wrapperPress: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 8,
    height: 130,
    justifyContent: 'center'
  },
  textPress: {
    textAlign: 'center'
  }
})

