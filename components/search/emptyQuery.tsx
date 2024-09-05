import { StyleSheet, Text, View } from 'react-native'

export const EmptyQuery = () => {
  return (
    <View style={styles.emptyState}>
      <Text>Type something to search...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
