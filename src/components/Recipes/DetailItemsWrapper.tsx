import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

interface DetailItemProps {
  label?: string;
  details?: string[];
}

const DetailItemsWrapper = ({
  details,
  label,
  }: DetailItemProps) => {
  return (
    <View style={styles.details}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.ingredients}>
        {details?.map((detail, index) => (
          <View key={index}>
            <Text style={styles.list}>{detail}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default DetailItemsWrapper;

const styles = StyleSheet.create({
  details: {
    paddingVertical: 6,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.3,
    marginBottom: 8,
  },
  ingredients: {
    gap: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray300,
    padding: 16,
  },
  list: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.3,
    color: GlobalStyles.colors.gray500,
  }
})
