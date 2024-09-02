import { Text, StyleSheet, View } from 'react-native'

export const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.whiteText}>By continuing you agree with {'\n'} </Text>
        <Text style={styles.underline}>Terms and Conditions</Text>
        <Text style={styles.whiteText}> and </Text>
        <Text style={styles.underline}>Privacy Policy</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  whiteText: {
    color: 'white',
  },
  underline: {
    textDecorationLine: 'underline',
  },
})
