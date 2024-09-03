import { Keyboard, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import TabSwitcher from '@/components/TabSwitcher'
import { useState } from 'react'
import palette from '@/constants/palette'
import ChannelIcon from '@/assets/icons/ChannelIcon'

export default function VideoPage() {
  const [selectedTab, setSelectedTab] = useState('Details')
  const params = useLocalSearchParams()

  const videoId = params.id as string

  const videoTitle = `Video Title for ID ${videoId}`

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.container}>
        <View style={{ width: '100%' }}>
          <View style={{ width: '100%', height: 250, backgroundColor: 'red' }} />
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {videoTitle}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingHorizontal: 16,
              paddingVertical: 16,
            }}
          >
            <ChannelIcon />
            <Text style={{ fontFamily: 'PoppinsBold', fontSize: 14, marginLeft: 12 }}>Channel name</Text>
          </View>

          <TabSwitcher videoId={videoId} setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        </View>

        <View style={{ paddingHorizontal: 16 }}>
          <View>
            <Text style={{ color: 'white' }}>Stats</Text>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
  },
  title: {
    fontFamily: 'PoppinsBold',
    fontSize: 18,
    color: palette.primary,
    marginTop: 20,
    paddingHorizontal: 16,
  },
})
