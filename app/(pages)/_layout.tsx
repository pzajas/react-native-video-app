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
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="video/[id]"
        options={{
          title: 'Video',
          headerStyle: { backgroundColor: palette.primary },
          headerTintColor: palette.white,
          headerShown: true,
        }}
      />
    </Stack>
  )
}
