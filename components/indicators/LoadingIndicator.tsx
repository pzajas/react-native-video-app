import { StyleSheet, Text, ActivityIndicator, View } from 'react-native'
import palette from '@/constants/palette'

export const LoadingIndicator = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={palette.primary} />
      <Text style={styles.loadingText}>Filtering results...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: palette.primary,
    marginTop: 10,
    fontFamily: 'PoppinsRegular',
  },
})
