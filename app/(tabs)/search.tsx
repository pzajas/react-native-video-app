import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import { queryClient } from '@/api/queryClient'
import { useQuery } from '@tanstack/react-query'
import { TextInput } from 'react-native-paper'
import palette from '@/constants/palette'
import { Feather } from '@expo/vector-icons'

export default function Search() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const insets = useSafeAreaInsets()

  const { data: videos } = useQuery({
    queryKey: ['videos'],
    queryFn: () => queryClient.getQueryData<any[]>(['videos']) || [],
    staleTime: Infinity,
  })

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [query])

  // if (!videos || videos.length === 0) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>No videos available</Text>
  //     </View>
  //   )
  // }

  const filteredVideos = debouncedQuery
    ? videos?.filter((video) => video.snippet.title.toLowerCase().includes(debouncedQuery.toLowerCase()))
    : []

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.textContainer}>
        <Text numberOfLines={1}>{item.snippet.title}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Feather name="search" size={25} color={'gray'} style={styles.icon} />
          <TextInput
            placeholder="Search videos"
            placeholderTextColor={'gray'}
            style={styles.searchInput}
            onChangeText={setQuery}
            value={query}
            inputMode="text"
          />
        </View>
      </View>
      <Text>{filteredVideos?.length}</Text>
      {debouncedQuery ? (
        <FlatList data={filteredVideos} renderItem={renderItem} keyExtractor={(item) => item.id.videoId} />
      ) : (
        <View style={styles.emptyState}>
          <Text>Type something to search...</Text>
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: palette.white,
  },
  flatList: {
    paddingLeft: 15,
    marginTop: 10,
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
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingHorizontal: 16, // Example padding
//   },
// })
