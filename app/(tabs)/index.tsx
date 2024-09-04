import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OptionsIcon } from '@/assets/icons/OptionsIcon'
import Feather from 'react-native-vector-icons/Feather'
import palette from '@/constants/palette'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'expo-router'
import { queryClient } from '@/api/queryClient'

const { width: screenWidth } = Dimensions.get('window')

const formatDate = (dateString: string) => {
  const date = new Date(dateString)

  // Extract month, day, and year
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' }
  return date.toLocaleDateString(undefined, options)
}

const API_KEY = 'AIzaSyCWAMHzv5iEshbOSUGoDCfGMU_T6CkzqEY'
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'

// const fetchVideos = async () => {
//   console.log('feczing...')

//   try {
//     const response = await axios.get(YOUTUBE_API_URL, {
//       params: {
//         part: 'snippet',
//         q: 'React, React Native, JavaScript, TypeScript',
//         type: 'video',
//         maxResults: 100,
//         key: API_KEY,
//       },
//     })
//     return response.data.items
//   } catch (error) {
//     console.error('Error fetching videos:', error)
//     throw error
//   }
// }

export default function VideoListScreen() {
  const [query, setQuery] = React.useState('')
  const router = useRouter()

  // const {
  //   data: videos = [],
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ['videos'],
  //   queryFn: fetchVideos,
  // })

  const { data: videos, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['videos'],
    queryFn: () => queryClient.getQueryData<any[]>(['videos']) || [],
    staleTime: Infinity,
  })

  // if (isLoading) {
  //   return <Text style={{ color: 'white' }}>Loading...</Text>
  // }

  // if (error) {
  //   return <Text style={{ color: 'white' }}>Error loading videos</Text>
  // }

  // Filter the videos based on the topic
  const javascriptVideos = videos?.filter((video) => video.snippet.title.toLowerCase().includes('javascript'))
  const typescriptVideos = videos?.filter((video) => video.snippet.title.toLowerCase().includes('typescript'))
  const reactVideos = videos?.filter(
    (video) =>
      video.snippet.title.toLowerCase().includes('react') && !video.snippet.title.toLowerCase().includes('react native')
  )
  const reactNativeVideos = videos?.filter((video) => video.snippet.title.toLowerCase().includes('react native'))

  const renderItem = ({ item }: any) => {
    const formattedPublishTime = formatDate(item.snippet.publishedAt)

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
          <Text style={styles.videoTitle} numberOfLines={1}>
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

        <View style={{ marginBottom: 13 }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>React Native</Text>
            <Text style={{ textDecorationLine: 'underline', color: palette.primary }}>Show More</Text>
          </View>
          <FlatList
            data={reactNativeVideos}
            renderItem={renderItem}
            keyExtractor={(item) => item?.id?.videoId}
            style={styles.flatList}
            horizontal
            contentContainerStyle={{ gap: 10 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ marginBottom: 13, borderTopWidth: 2, borderTopColor: palette.primary }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>React</Text>
            <Text style={{ textDecorationLine: 'underline', color: palette.primary }}>Show More</Text>
          </View>
          <FlatList
            data={reactVideos}
            renderItem={renderItem}
            keyExtractor={(item) => item?.id?.videoId}
            style={styles.flatList}
            horizontal
            contentContainerStyle={{ gap: 10 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ marginBottom: 13, borderTopWidth: 2, borderTopColor: palette.primary }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>TypeScript</Text>
            <Text style={{ textDecorationLine: 'underline', color: palette.primary }}>Show More</Text>
          </View>
          <FlatList
            data={typescriptVideos}
            renderItem={renderItem}
            keyExtractor={(item) => item?.id?.videoId}
            style={styles.flatList}
            horizontal
            contentContainerStyle={{ gap: 10 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ marginBottom: 13, borderTopWidth: 2, borderTopColor: palette.primary }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>JavaScript</Text>
            <Text style={{ textDecorationLine: 'underline', color: palette.primary }}>Show More</Text>
          </View>
          <FlatList
            data={javascriptVideos}
            renderItem={renderItem}
            keyExtractor={(item) => item?.id?.videoId}
            style={styles.flatList}
            horizontal
            contentContainerStyle={{ gap: 10 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
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
    width: screenWidth * 0.5, // Adjusted width to fit smaller thumbnails
    marginRight: 10,
  },
  thumbnail: {
    width: '100%',
    height: screenWidth * 0.3, // Adjusted height to make images smaller
    borderRadius: 10,
  },
  videoTitle: {
    marginTop: 5,
    fontSize: 16,
    color: palette.black,
  },
  textContainer: {
    marginTop: 5,
  },
  publishTime: {
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
  },
})
