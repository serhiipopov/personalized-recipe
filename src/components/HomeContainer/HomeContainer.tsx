import { FC } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useLinkTo } from '@react-navigation/native';

import { Strings } from '../../constants/strings';
import { GlobalStyles } from '../../constants/styles';
import { Screen } from '../../constants/screen';

const HomeContainer: FC = () => {
  const linkTo = useLinkTo();

  const onLintToByuList = () => linkTo(`/${Screen.BuyList}`);

  return (
    <View style={styles.container}>
      <View style={styles.wrapperPress}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? GlobalStyles.colors.gray300
                : GlobalStyles.colors.gray200,
            },
            styles.wrapperCustom,
          ]}
          onPress={onLintToByuList}
        >
        <Text style={styles.textPress}>{Strings.whatBuy}</Text>
        </Pressable>
      </View>
     <View style={styles.wrapperPress}>
       <Pressable
         style={({pressed}) => [
           {
             backgroundColor: pressed
               ? GlobalStyles.colors.gray300
               : GlobalStyles.colors.gray200,
           },
           styles.wrapperCustom,
         ]}
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
  },
  textPress: {
    textAlign: 'center'
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 8,
    height: 130,
    justifyContent: 'center',
  },
})

