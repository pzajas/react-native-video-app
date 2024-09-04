import { StyleSheet, Text, TextInput, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OptionsIcon } from '@/assets/icons/OptionsIcon'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import { getFormattedDate } from '@/utils/dates/getFormattedDate'
import { useState } from 'react'
import { VideosSlider } from '@/components/sliders/videoSlider'
import { fetchVideosData } from '@/api/fetchVideos'
import Feather from 'react-native-vector-icons/Feather'
import palette from '@/constants/palette'

const { width: screenWidth } = Dimensions.get('window')

export default function VideoListScreen() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const { data: videos } = useQuery({
    queryKey: ['videos'],
    queryFn: fetchVideosData,
    staleTime: Infinity,
  })

  const javascriptVideos = videos?.filter((video) => video.snippet.title.toLowerCase().includes('javascript'))
  const typescriptVideos = videos?.filter((video) => video.snippet.title.toLowerCase().includes('typescript'))
  const reactVideos = videos?.filter(
    (video) =>
      video.snippet.title.toLowerCase().includes('react') && !video.snippet.title.toLowerCase().includes('react native')
  )
  const reactNativeVideos = videos?.filter((video) => video.snippet.title.toLowerCase().includes('react native'))

  const renderItem = ({ item }: any) => {
    const formattedPublishTime = getFormattedDate(item.snippet.publishedAt)

    return (
      <TouchableOpacity
        style={styles.videoContainer}
        onPress={() => {
          router.push({
            pathname: `/video/${item.id.videoId}`,
            params: item.snippet,
          })
        }}
      >
        <Image source={{ uri: item.snippet.thumbnails.high.url }} style={styles.thumbnail} />
        <View style={styles.textContainer}>
          <Text style={styles.videoTitle} numberOfLines={2}>
            {item.snippet.title}
          </Text>
          <Text style={styles.publishTime}>{formattedPublishTime}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <Feather name="search" size={25} color={'gray'} style={styles.icon} />
            <TextInput
              placeholder="Search videos"
              placeholderTextColor={'gray'}
              style={styles.searchInput}
              onChangeText={(text) => setQuery(text)}
              value={query}
              inputMode="text"
            />
          </View>
          <TouchableOpacity onPress={() => router.push('/options')}>
            <OptionsIcon />
          </TouchableOpacity>
        </View>
        <VideosSlider data={reactNativeVideos} renderItem={renderItem} title={'React Native'} />
        <VideosSlider data={reactVideos} renderItem={renderItem} title={'React'} />
        <VideosSlider data={typescriptVideos} renderItem={renderItem} title={'Typescript'} />
        <VideosSlider data={javascriptVideos} renderItem={renderItem} title={'Javascript'} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.white,
    borderWidth: 2,
    borderColor: palette.primary,
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: palette.black,
    fontFamily: 'PoppinsRegular',
    textAlignVertical: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 15,
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'PoppinsSemiBold',
    color: palette.primary,
  },
  flatList: {
    paddingLeft: 15,
    marginTop: 10,
  },
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
