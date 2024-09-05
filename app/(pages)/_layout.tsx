import { Stack, useRouter } from 'expo-router'
import { StyleSheet, TouchableOpacity } from 'react-native'
import ArrowLeft from '@/assets/icons/ArrowLeft'
import palette from '@/constants/palette'

export default function PagesLayout() {
  const router = useRouter()
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
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <ArrowLeft color={palette.primary} />
            </TouchableOpacity>
          ),
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

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 20,
  },
})
