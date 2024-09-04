import { View, StyleSheet, Text } from 'react-native'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MainScreenIcon } from '@/assets/icons/MainScreenIcon'
import { Footer } from '@/screens/mainScreen/Fotter'
import { Header } from '@/screens/mainScreen/Header'
import { PrimaryButton } from '@/components/buttons/PrimaryButton'
import palette from '@/constants/palette'
import { fetchVideosData } from '@/api/fetchVideos'
import { useEffect } from 'react'

export default function WelcomeScreen() {
  useEffect(() => {
    fetchVideosData()
  }, [])

  const router = useRouter()

  const handleNavigateHome = () => {
    router.replace('/(tabs)')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MainScreenIcon style={styles.icon} />
      <View style={styles.infoContainer}>
        <Text style={styles.welcomeText}>Welcome to the best YouTube app base learning application</Text>

        <PrimaryButton
          width="100%"
          text="Log in as a guest"
          fontFamily="PoppinsMedium"
          fontSize={16}
          onPress={handleNavigateHome}
        />

        <Footer />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.dark.background,
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  icon: {
    marginTop: 20,
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  welcomeText: {
    fontFamily: 'PoppinsSemiBold',
    color: palette.white,
    textAlign: 'left',
    marginBottom: 32,
    fontSize: 22,
  },
})
