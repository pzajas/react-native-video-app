import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import palette from '@/constants/palette'

export const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={palette.primary} />
      <Text style={styles.text}>Filtering results...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: palette.primary,
    marginTop: 10,
    fontFamily: 'PoppinsRegular',
  },
})
