import Video from 'react-native-video'
import { View, StyleSheet } from 'react-native'
import { useState } from 'react'

const VideoPlayer = ({ setCurrentTime }: any) => {
  const handleProgress = (data) => {
    const minutes = Math.floor(data.currentTime / 60)
    const seconds = Math.floor(data.currentTime % 60)
    setCurrentTime(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
  }

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        style={styles.video}
        controls={true}
        resizeMode="cover"
        onProgress={handleProgress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 300,
  },
})

export default VideoPlayer
