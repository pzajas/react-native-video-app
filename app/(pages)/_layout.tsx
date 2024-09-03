import { Stack } from 'expo-router'
import palette from '@/constants/palette'

export default function PagesLayout() {
  return (
    <Stack screenOptions={{ headerTintColor: 'red', headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen
        name="options/index"
        options={{
          title: 'Settings',
          headerStyle: { backgroundColor: palette.white },
          headerTintColor: palette.primary,
        }}
      />
      <Stack.Screen
        name="video/index"
        options={{
          title: 'Video',
          headerStyle: { backgroundColor: palette.primary },
          headerTintColor: palette.white,
        }}
      />
    </Stack>
  )
}
