import { FlatList, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect, useCallback } from 'react'
import { queryClient } from '@/api/queryClient'
import { useQuery } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import { SearchInput, SearchedItem, DataLoading, EmptyQuery } from '@/components/search'
import { SearchResultsText } from '@/components/search/searchResultText'
import debounce from 'lodash/debounce'
import palette from '@/constants/palette'

export default function Search() {
  const { title } = useLocalSearchParams()
  const [query, setQuery] = useState(title || '')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [loading, setLoading] = useState(false)

  const { data: videos, isLoading } = useQuery({
    queryKey: ['videos'],
    queryFn: () => queryClient.getQueryData<any[]>(['videos']) || [],
    staleTime: Infinity,
  })

  const debounceSearch = useCallback(
    debounce((query) => {
      setDebouncedQuery(query)
      setLoading(false)
    }, 500),
    []
  )

  useEffect(() => {
    if (query !== debouncedQuery) {
      setLoading(true)
      debounceSearch(query)
    }
  }, [query, debouncedQuery, debounceSearch])

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
      setDebouncedQuery('')
    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: palette.white, flex: 1, paddingHorizontal: 16 }}>
      <View style={styles.searchContainer}>
        <SearchInput query={query} onChange={handleSearchChange} />
      </View>
      {isLoading || loading ? (
        <DataLoading />
      ) : (
        <>
          <SearchResultsText query={query} filteredVideos={filteredVideos} />
          {debouncedQuery && (
            <FlatList
              data={filteredVideos}
              renderItem={({ item }) => <SearchedItem item={item} />}
              keyExtractor={(item) => item.id.videoId}
              showsVerticalScrollIndicator={false}
            />
          )}
          {!query && !loading && <EmptyQuery />}
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
})
