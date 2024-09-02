import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'
import palette from '@/constants/palette'

interface IPrimaryButton {
  width: number | string
  text: string
  fontFamily: string
  fontSize: number
  icon?: React.ReactNode
  onPress: () => void
}

export const PrimaryButton = ({ width, text, fontFamily, fontSize, icon, onPress }: IPrimaryButton) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed, { width } as ViewStyle]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={[styles.text, { fontFamily, fontSize }]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: palette.primary,
  },
  buttonPressed: {
    backgroundColor: '#1F1F2E',
  },
  iconContainer: {
    marginRight: 8,
  },
  text: {
    color: 'white',
    fontFamily: 'PoppinsRegular',
  },
})
