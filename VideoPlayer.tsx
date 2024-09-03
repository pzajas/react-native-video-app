import Video from 'react-native-video'
import { View, StyleSheet } from 'react-native'

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require('./assets/videos/broadchurch.mp4')}
        style={styles.video}
        controls={true}
        resizeMode="cover"
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
