import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useRouter } from 'expo-router'
import { getFormattedDate } from '@/utils/dates/getFormattedDate'
import palette from '@/constants/palette'

const { width: screenWidth } = Dimensions.get('window')

interface VideoItemProps {
  item: any
}

export const SearchedItem = ({ item }: VideoItemProps) => {
  const router = useRouter()

  return (
    <View style={styles.textContainer}>
      <TouchableOpacity
        onPress={() => {
          router.push({
            pathname: `/video/${item.id.videoId}`,
            params: item.snippet,
          })
        }}
      >
        <Image source={{ uri: item.snippet.thumbnails.high.url }} style={styles.thumbnail} />
      </TouchableOpacity>
      <View style={styles.textColumn}>
        <Text numberOfLines={1} style={styles.channelTitle}>
          {item.snippet.channelTitle}
        </Text>
        <Text numberOfLines={2} style={styles.videoTitle}>
          {item.snippet.title}
        </Text>
        <Text style={styles.publishTime}>{getFormattedDate(item.snippet.publishedAt)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 24,
  },
  textColumn: {
    flex: 1,
  },
  thumbnail: {
    width: '100%',
    height: screenWidth * 0.5,
    borderRadius: 10,
  },
  channelTitle: {
    fontSize: 12,
    fontFamily: 'PoppinsSemiBold',
    paddingVertical: 12,
  },
  videoTitle: {
    fontSize: 16,
    color: palette.black,
  },
  publishTime: {
    fontSize: 10,
    fontFamily: 'PoppinsRegular',
    color: 'gray',
    marginTop: 12,
    textAlign: 'right',
    paddingLeft: 10,
  },
})
