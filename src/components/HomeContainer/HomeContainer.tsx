import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useLinkTo } from '@react-navigation/native';

import { STRINGS } from '../../constants/strings';
import { GlobalStyles } from '../../constants/styles';
import { Screen } from '../../constants/screen';
import {storageService} from '../../utils/storageService';
import {useEffect} from 'react';

const pressStyles = (pressed: boolean) => {
  return (
    [
      {
        backgroundColor: pressed
          ? GlobalStyles.colors.gray300
          : GlobalStyles.colors.gray200,
      },
      styles.wrapperCustom,
    ]
  )
}

const HomeContainer = () => {
  const linkTo = useLinkTo();
  const onLintToByuList = () => linkTo(`/${Screen.BuyList}`);

  return (
    <View style={styles.container}>
      <View style={styles.wrapperPress}>
        <Pressable
          style={({ pressed }) => pressStyles(pressed)}
          onPress={onLintToByuList}
        >
        <Text style={styles.textPress}>{STRINGS.whatBuy}</Text>
        </Pressable>
      </View>
     <View style={styles.wrapperPress}>
       <Pressable
         style={({ pressed }) => pressStyles(pressed)}
       >
       <Text style={styles.textPress}>2</Text>
       </Pressable>
     </View>
    </View>
  )
}

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
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  wrapperCustom: {
    borderRadius: 18,
    height: 130,
    justifyContent: 'center',
    opacity: 0.6
  },
})

