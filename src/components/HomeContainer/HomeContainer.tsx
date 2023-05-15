import { StyleSheet, View } from 'react-native';
import { useLinkTo } from '@react-navigation/native';
import PressButton from '../UI/PressButton';

import { STRINGS } from '../../constants/strings';
import { Screen } from '../../constants/screen';
import { GlobalStyles } from '../../constants/styles';

const HomeContainer = () => {
  const linkTo = useLinkTo();
  const onLintToByuList = () => linkTo(`/${Screen.BuyList}`);
  const onLintToMyMeals = () => linkTo(`/${Screen.MyMeals}`);

  return (
    <View style={styles.container}>
      <PressButton
        title={STRINGS.whatBuy}
        pressHandler={onLintToByuList}
        style={styles.pressButton}
      />
      <PressButton
        title={STRINGS.myMeals}
        pressHandler={onLintToMyMeals}
        style={styles.pressButton}
      />
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
  pressButton: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray500,
    backgroundColor: GlobalStyles.colors.gray200,
    borderRadius: 18,
    height: 130,
    justifyContent: 'center',
    opacity: 0.6
  }
})
