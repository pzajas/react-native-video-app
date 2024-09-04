import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import { queryClient } from '@/api/queryClient'
import { useQuery } from '@tanstack/react-query'
import palette from '@/constants/palette'
import { Feather } from '@expo/vector-icons'
import { getFormattedDate } from '@/utils/dates/getFormattedDate'
import { useRouter } from 'expo-router'

const { width: screenWidth } = Dimensions.get('window')
export default function Search() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const router = useRouter()
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

  const filteredVideos = debouncedQuery
    ? videos?.filter((video) => video.snippet.title.toLowerCase().includes(debouncedQuery.toLowerCase()))
    : []

  const renderItem = ({ item }: any) => {
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

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 16 }}>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Feather name="search" size={20} color={palette.primary} />
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
      <Text>
        {debouncedQuery && (
          <Text
            style={{
              fontSize: 10,
              color: palette.primary,
              fontFamily: 'PoppinsRegular',
            }}
          >
            {filteredVideos?.length} results found for: "
            <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 10, color: palette.primary }}>{query}</Text>"
          </Text>
        )}
      </Text>
      {debouncedQuery ? (
        <FlatList
          data={filteredVideos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.videoId}
          showsVerticalScrollIndicator={false}
        />
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
    marginTop: 10,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.white,
    borderWidth: 2,
    borderColor: palette.primary,
    borderRadius: 16,
    paddingHorizontal: 10,
    flex: 1,
  },
  channelTitle: {
    fontSize: 12,
    fontFamily: 'PoppinsSemiBold',
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: palette.black,
    fontFamily: 'PoppinsRegular',
    textAlignVertical: 'center',
    backgroundColor: palette.white,
    marginLeft: 14,
    fontSize: 16,
    marginTop: 2,
  },
  flatList: {
    paddingLeft: 15,
    marginTop: 10,
  },
  videoTitle: {
    fontSize: 16,
    color: palette.black,
  },
  textContainer: {
    marginBottom: 24,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textColumn: {
    flex: 1,
  },
  publishTime: {
    fontSize: 10,
    fontFamily: 'PoppinsRegular',
    color: 'gray',
    marginTop: 12,
    textAlign: 'right',
    paddingLeft: 10,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: '100%',
    height: screenWidth * 0.5,
    borderRadius: 10,
  },
})
