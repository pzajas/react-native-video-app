// app/_layout.js
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { ThemeProvider } from '@react-navigation/native'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { useColorScheme } from '@/components/useColorScheme'
import { Stack } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { PaperProvider } from 'react-native-paper'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Options from './(pages)/options'
import palette from '@/constants/palette'
import { TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CardStyleInterpolators } from '@react-navigation/stack'

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
    backgroundColor: palette.background, // Set your preferred background color
  },
})
