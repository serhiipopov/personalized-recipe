import { StyleSheet, View } from 'react-native';
import { useLinkTo } from '@react-navigation/native';
import PressButton from '../UI/PressButton';

import { STRINGS } from '../../constants/strings';
import { Screen } from '../../constants/screen';

const HomeContainer = () => {
  const linkTo = useLinkTo();
  const onLintToByuList = () => linkTo(`/${Screen.BuyList}`);
  const onLintToMyMeals = () => linkTo(`/${Screen.MyMeals}`);

  return (
    <View style={styles.container}>
      <PressButton title={STRINGS.whatBuy} navigateHandler={onLintToByuList} />
      <PressButton title={STRINGS.myMeals} navigateHandler={onLintToMyMeals} />
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
  }
})
