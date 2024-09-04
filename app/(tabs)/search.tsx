import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import { queryClient } from '@/api/queryClient'
import { useQuery } from '@tanstack/react-query'
import { getFormattedDate } from '@/utils/dates/getFormattedDate'
import { useRouter, useLocalSearchParams } from 'expo-router'
import palette from '@/constants/palette'
import { SearchInput } from '@/components/search/searchInput'

const { width: screenWidth } = Dimensions.get('window')

export default function Search() {
  const { title } = useLocalSearchParams()
  const [query, setQuery] = useState(title || '')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const { data: videos, isLoading } = useQuery({
    queryKey: ['videos'],
    queryFn: () => queryClient.getQueryData<any[]>(['videos']) || [],
    staleTime: Infinity,
  })

  useEffect(() => {
    if (query !== debouncedQuery) {
      setLoading(true)
    }
  }, [query])

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query)
      setLoading(false)
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [query])

  useEffect(() => {
    if (title) {
      setQuery(title)
      setLoading(true)
    }
  }, [title])

  const filteredVideos = debouncedQuery
    ? videos?.filter((video) => video.snippet.title.toLowerCase().includes(debouncedQuery.toLowerCase()))
    : []

  const handleSearchChange = (text: string) => {
    setQuery(text)
    if (text === '') {
      setDebouncedQuery('') // Ensure debouncedQuery is cleared if text is empty
    }
  }

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
        <SearchInput query={query} onChange={handleSearchChange} />
      </View>
      {isLoading || loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={palette.primary} />
          <Text style={styles.loadingText}>Filtering results...</Text>
        </View>
      ) : (
        <>
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
        </>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
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
