import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { PrimaryButton } from '@/components/buttons/PrimaryButton'
import { HomeIcon } from '@/assets/icons/HomeIcon'
import TabSwitcher from '@/components/TabSwitcher'

export default function VideoPage() {
  const params = useLocalSearchParams()
  const videoId = params.id as string

  const videoTitle = `Video Title for ID ${videoId}`

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: 300, backgroundColor: 'red' }} />
      <Text style={styles.title}>{videoTitle}</Text>

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}>Avatar</Text>
        <Text style={styles.title}>Channel name</Text>
      </View>

      <TabSwitcher />

      <View>
        <Text style={{ color: 'white' }}>Stats</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <PrimaryButton
            text="views"
            icon={<HomeIcon color={'white'} />}
            fontFamily="PoppinsMedium"
            fontSize={14}
            onPress={() => console.log('ppp')}
            width="45%"
          />
          <PrimaryButton
            text="views"
            icon={<HomeIcon color={'white'} />}
            fontFamily="PoppinsMedium"
            fontSize={14}
            onPress={() => console.log('ppp')}
            width="50%"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
})
