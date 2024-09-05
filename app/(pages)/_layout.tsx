import { Stack, useRouter } from 'expo-router'
import palette from '@/constants/palette'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import ArrowLeft from '@/assets/icons/ArrowLeft'

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
          headerShown: false,
          headerShadowVisible: false,
          headerLeft: ({ navigation }: any) => (
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
  backButtonText: {
    fontSize: 16,
    marginLeft: 5,
    color: palette.primary,
  },
})
