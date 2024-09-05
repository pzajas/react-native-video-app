import { Text, StyleSheet } from 'react-native'
import palette from '@/constants/palette'

interface ResultsTextProps {
  query: any
  filteredVideos: any
}

export const SearchResultsText = ({ query, filteredVideos }: ResultsTextProps) => {
  if (!query) return null

  return (
    <Text style={styles.container}>
      {filteredVideos.length} results found for: "<Text style={styles.queryText}>{query}</Text>"
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    fontSize: 10,
    color: palette.primary,
    fontFamily: 'PoppinsRegular',
  },
  queryText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 10,
    color: palette.primary,
  },
})
