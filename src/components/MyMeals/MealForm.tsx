import { StyleSheet, TextInput, View } from 'react-native';
import { useInput } from '../../hooks/useInput';
import { GlobalStyles } from '../../constants/styles';

const MealForm = () => {
  const { value, onChange } = useInput('');

  return (
   <View style={styles.container}>
     <TextInput
       style={styles.input}
       value={value}
       onChangeText={onChange}
       placeholder='Add my meal'
       maxLength={25}
     />
   </View>
  )
}

export default MealForm;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '20%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray300,
    paddingHorizontal: 10,
    height: 50,
    fontSize: 18,
  }
})
