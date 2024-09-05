import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { getFormattedDate } from '@/utils/dates/getFormattedDate'
import palette from '@/constants/palette'
import { useRouter } from 'expo-router'

const { width: screenWidth } = Dimensions.get('window')

export const VideoItem = ({ item, onPress }: any) => {
  const formattedPublishTime = getFormattedDate(item.snippet.publishedAt)

  return (
    <TouchableOpacity style={styles.videoContainer} onPress={() => onPress(item)}>
      <Image source={{ uri: item.snippet.thumbnails.high.url }} style={styles.thumbnail} />
      <View style={styles.textContainer}>
        <Text style={styles.videoTitle} numberOfLines={1}>
          {item.snippet.title}
        </Text>
        <Text style={styles.publishTime}>{formattedPublishTime}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  videoContainer: {
    width: screenWidth * 0.45,
    marginRight: 10,
  },
  thumbnail: {
    width: '100%',
    height: screenWidth * 0.28,
    borderRadius: 10,
  },
  videoTitle: {
    marginTop: 5,
    fontSize: 12,
    color: palette.primary,
    fontFamily: 'PoppinsSemiBold',
  },
  textContainer: {
    marginTop: 5,
    marginBottom: 16,
  },
  publishTime: {
    fontSize: 10,
    fontFamily: 'PoppinsRegular',
    color: palette.grey,
    alignSelf: 'flex-end',
  },
})
