import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { ThemeProvider } from '@react-navigation/native'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useColorScheme } from '@/components/useColorScheme'
import { Stack } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { QueryClient } from '@tanstack/react-query'
import palette from '@/constants/palette'
import { StyleSheet } from 'react-native'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import AsyncStorage from '@react-native-async-storage/async-storage'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    PoetsenOne: require('../assets/fonts/PoetsenOne-Regular.ttf'),
    SigmarOne: require('../assets/fonts/SigmarOne-Regular.ttf'),
    PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    ...FontAwesome.font,
  })

  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}
const queryClient = new QueryClient()
function RootLayoutNav() {
  const colorScheme = useColorScheme()
  const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
  })

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <PersistQueryClientProvider client={queryClient} persistOptions={{ persister: asyncStoragePersister }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(pages)" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </PersistQueryClientProvider>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.background,
  },
})
