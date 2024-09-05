import { Text, StyleSheet } from 'react-native'

export const ReminderText = () => (
  <Text style={styles.reminderText}>You will receive friendly reminder to remember to study</Text>
)

const styles = StyleSheet.create({
  reminderText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 10,
    marginTop: 18,
    paddingLeft: 30,
  },
})
