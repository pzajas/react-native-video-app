import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import ChannelIcon from '@/assets/icons/ChannelIcon'
import VideoPlayer from '@/components/player/VideoPlayer'
import TabSwitcher from '@/components/TabSwitcher'
import palette from '@/constants/palette'

export default function VideoPage() {
  const [videoUrl, setVideoUrl] = useState('')
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [selectedTab, setSelectedTab] = useState('Details')
  const params = useLocalSearchParams()

  const videoId = params.id as string
  const videoTitle = params.title

  if (videoUrl === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading or no video URL available...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{ width: '100%' }}>
          <VideoPlayer currentTime={currentTime} setCurrentTime={setCurrentTime} />
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {videoTitle}
          </Text>

          <View style={styles.channelContainer}>
            <ChannelIcon />
            <Text style={styles.channelTitle}>{params.channelTitle}</Text>
          </View>

          <TabSwitcher
            videoId={videoId}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
            currentTime={currentTime}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 18,
    color: palette.primary,
    marginTop: 20,
    paddingHorizontal: 16,
  },
  channelContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  channelTitle: {
    fontFamily: 'PoppinsBold',
    fontSize: 14,
    marginLeft: 12,
  },
})
