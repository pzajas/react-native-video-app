import { FlatList, StyleSheet, Text, TextInput, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OptionsIcon } from '@/assets/icons/OptionsIcon'
import Feather from 'react-native-vector-icons/Feather'
import palette from '@/constants/palette'
import { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import axios from 'axios'

const { width: screenWidth } = Dimensions.get('window')
const mockVideos = [
  {
    id: { videoId: '1' },
    snippet: {
      title: 'Introduction to React Native',
      thumbnails: { high: { url: 'https://example.com/react-native-image1.jpg' } },
    },
  },
  {
    id: { videoId: '2' },
    snippet: {
      title: 'React Native Basics',
      thumbnails: { high: { url: 'https://example.com/react-native-image2.jpg' } },
    },
  },
  {
    id: { videoId: '3' },
    snippet: {
      title: 'Building Your First React Native App',
      thumbnails: { high: { url: 'https://example.com/react-native-image3.jpg' } },
    },
  },
  {
    id: { videoId: '4' },
    snippet: {
      title: 'React Native Navigation Tutorial',
      thumbnails: { high: { url: 'https://example.com/react-native-image4.jpg' } },
    },
  },
  {
    id: { videoId: '5' },
    snippet: {
      title: 'Styling in React Native',
      thumbnails: { high: { url: 'https://example.com/react-native-image5.jpg' } },
    },
  },
  {
    id: { videoId: '6' },
    snippet: {
      title: 'State Management in React Native',
      thumbnails: { high: { url: 'https://example.com/react-native-image6.jpg' } },
    },
  },
  {
    id: { videoId: '7' },
    snippet: {
      title: 'React Native with TypeScript',
      thumbnails: { high: { url: 'https://example.com/react-native-image7.jpg' } },
    },
  },
  {
    id: { videoId: '8' },
    snippet: {
      title: 'React Native Debugging Techniques',
      thumbnails: { high: { url: 'https://example.com/react-native-image8.jpg' } },
    },
  },
  {
    id: { videoId: '9' },
    snippet: {
      title: 'Handling User Input in React Native',
      thumbnails: { high: { url: 'https://example.com/react-native-image9.jpg' } },
    },
  },
  {
    id: { videoId: '10' },
    snippet: {
      title: 'Networking in React Native',
      thumbnails: { high: { url: 'https://example.com/react-native-image10.jpg' } },
    },
  },
  {
    id: { videoId: '11' },
    snippet: {
      title: 'React Native Animations',
      thumbnails: { high: { url: 'https://example.com/react-native-image11.jpg' } },
    },
  },
  {
    id: { videoId: '12' },
    snippet: {
      title: 'React Native Performance Optimization',
      thumbnails: { high: { url: 'https://example.com/react-native-image12.jpg' } },
    },
  },
  {
    id: { videoId: '13' },
    snippet: {
      title: 'Advanced React Native Patterns',
      thumbnails: { high: { url: 'https://example.com/react-native-image13.jpg' } },
    },
  },
  {
    id: { videoId: '14' },
    snippet: {
      title: 'React Native Testing',
      thumbnails: { high: { url: 'https://example.com/react-native-image14.jpg' } },
    },
  },
  {
    id: { videoId: '15' },
    snippet: {
      title: 'React Native CLI vs Expo',
      thumbnails: { high: { url: 'https://example.com/react-native-image15.jpg' } },
    },
  },
  {
    id: { videoId: '16' },
    snippet: {
      title: 'Building a React Native App from Scratchfrom Scratchfrom Scratchfrom Scratch',
      thumbnails: { high: { url: 'https://example.com/react-native-image16.jpg' } },
    },
  },
  {
    id: { videoId: '17' },
    snippet: {
      title: 'React Native with Firebase Firebase Firebase Firebase Firebase Firebase Firebase',
      thumbnails: { high: { url: 'https://example.com/react-native-image17.jpg' } },
    },
  },
  {
    id: { videoId: '18' },
    snippet: {
      title: 'Using Hooks in React Native',
      thumbnails: { high: { url: 'https://example.com/react-native-image18.jpg' } },
    },
  },
  {
    id: { videoId: '19' },
    snippet: {
      title: 'React Native for iOS Development',
      thumbnails: { high: { url: 'https://example.com/react-native-image19.jpg' } },
    },
  },
  {
    id: { videoId: '20' },
    snippet: {
      title: 'React Native for Android Development',
      thumbnails: { high: { url: 'https://example.com/react-native-image20.jpg' } },
    },
  },
]

export default function HomeScreen() {
  const [query, setQuery] = useState('react native')
  const router = useRouter()

  // const [reactVideos, setReactVideos] = useState([])
  // const [reactNativeVideos, setReactNativeVideos] = useState([])
  // const [javascriptVideos, setJavascriptVideos] = useState([])
  // const [typescriptVideos, setTypescriptVideos] = useState([])

  // useEffect(() => {
  //   fetchVideos()
  // }, [])
  // const API_KEY = 'AIzaSyCWAMHzv5iEshbOSUGoDCfGMU_T6CkzqEY'
  // const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'
  // const fetchVideos = async () => {
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

  //     console.log(response.data)

  //     const reactVideos = []
  //     const reactNativeVideos = []
  //     const javascriptVideos = []
  //     const typescriptVideos = []

  //     response.data.items.forEach((item) => {
  //       const title = item.snippet.title.toLowerCase()
  //       const description = item.snippet.description.toLowerCase()

  //       console.log(item.snippet.publishedAt)

  //       if (title.includes('react') && !title.includes('react native')) {
  //         reactVideos.push(item)
  //       }
  //       if (title.includes('react native')) {
  //         reactNativeVideos.push(item)
  //       }
  //       if (title.includes('javascript')) {
  //         javascriptVideos.push(item)
  //       }
  //       if (title.includes('typescript')) {
  //         typescriptVideos.push(item)
  //       }
  //     })

  //     setReactVideos(reactVideos)
  //     setReactNativeVideos(reactNativeVideos)
  //     setJavascriptVideos(javascriptVideos)
  //     setTypescriptVideos(typescriptVideos)
  //   } catch (error) {
  //     console.error('Error fetching videos:', error)
  //   }
  // }

  const handleNavigate = (videoId: string) => {
    router.push(`/video/${videoId}`)
  }

  // Use mock data
  const videos = mockVideos.filter((video) => video.snippet.title.toLowerCase().includes(query.toLowerCase()))

  const renderItem = ({ item }) => {
    const maxLength = 40
    const displayTitle =
      item.snippet.title.length > maxLength ? item.snippet.title.substring(0, maxLength) + '...' : item.snippet.title

    return (
      <View style={styles.itemContainer}>
        {item.snippet.thumbnails.high ? (
          <TouchableOpacity onPress={() => handleNavigate(item.snippet.title)}>
            <View style={[styles.placeholderThumbnail, { width: screenWidth * 0.4 }]} />
          </TouchableOpacity>
        ) : (
          <Image
            source={{ uri: item.snippet.thumbnails.high.url }}
            style={[styles.thumbnail, { width: screenWidth * 0.4 }]}
          />
        )}
        <Text style={styles.title}>{displayTitle}</Text>
        <Text style={{ fontSize: 12 }}>Date</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Feather name="search" size={20} color={'gray'} style={styles.icon} />
          <TextInput
            placeholder="Search videos"
            placeholderTextColor={'gray'}
            style={styles.searchInput}
            onChangeText={(text) => setQuery(text)}
            value={query}
          />
        </View>
        <OptionsIcon />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>React Native</Text>
        <Text style={{ textDecorationLine: 'underline', color: '#2B2D42' }}>Show More</Text>
      </View>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id?.videoId}
        style={styles.flatList}
        horizontal
        contentContainerStyle={{ gap: 10 }}
      />
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id?.videoId}
        style={styles.flatList}
        horizontal
        contentContainerStyle={{ gap: 10 }}
      />
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id?.videoId}
        style={styles.flatList}
        horizontal
        contentContainerStyle={{ gap: 10 }}
      />
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id?.videoId}
        style={styles.flatList}
        horizontal
        contentContainerStyle={{ gap: 10 }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: palette.white,
    paddingHorizontal: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.white,
    paddingHorizontal: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'red',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
    paddingLeft: 40,
    marginRight: 20,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: palette.black,
  },
  flatList: {
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
    width: screenWidth * 0.4,
  },
  thumbnail: {
    height: 90,
    borderRadius: 8,
    marginRight: 10,
  },
  placeholderThumbnail: {
    height: 90,
    width: screenWidth * 0.6,
    backgroundColor: 'gray',
    borderRadius: 8,
    marginRight: 10,
  },
  title: {
    fontSize: 12,
    color: palette.black,
    textAlign: 'left',
    marginTop: 5,
  },
})
