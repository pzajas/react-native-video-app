import { View, Text, StyleSheet } from 'react-native'
import palette from '@/constants/palette'

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTextPrimary}>Youtube</Text>
      <View style={styles.learnContainer}>
        <Text style={styles.headerTextSecondary}>Learn</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  headerTextPrimary: {
    color: palette.white,
    fontFamily: 'PoetsenOne',
    fontSize: 64,
    lineHeight: 76.8,
    textAlign: 'center',
  },
  learnContainer: {
    position: 'absolute',
    right: 20,
    bottom: -40,
    marginTop: 10,
  },
  headerTextSecondary: {
    color: palette.primary,
    fontFamily: 'SigmarOne',
    fontSize: 32,
    lineHeight: 52.42,
    textAlign: 'center',
  },
})
