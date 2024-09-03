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

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <Stack>
            <Stack.Screen name="(pages)/index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </PaperProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
