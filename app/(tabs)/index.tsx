import { StyleSheet, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useQuery } from '@tanstack/react-query'
import { VideosSlider } from '@/components/sliders/videoSlider'
import { fetchVideosData } from '@/api/fetchVideos'
import { SearchInput } from '@/components/search/searchInput'
import { VideoItem } from '@/components/sliders/videoItem'
import { videoCategories } from '@/utils/configs/videoCategories'
import { filterVideos } from '@/utils/arrays/filterVideos'
import palette from '@/constants/palette'

export default function VideoListScreen() {
  const { data: videos } = useQuery({
    queryKey: ['videos'],
    queryFn: fetchVideosData,
    staleTime: Infinity,
  })

  const filteredVideos = filterVideos({ videos, categories: videoCategories })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.searchContainer}>
          <SearchInput />
        </View>
        <>
          {Object.entries(filteredVideos).map(([title, data]) => (
            <VideosSlider key={title} data={data} renderItem={VideoItem} title={title} />
          ))}
        </>
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
})
