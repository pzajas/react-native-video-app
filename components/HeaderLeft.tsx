import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import palette from '@/constants/palette'

const HeaderLeft = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
      <Feather name="arrow-left" size={24} color={palette.white} />
      <Text style={styles.text}>Go Back</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  text: {
    color: palette.white,
    fontSize: 16,
    marginLeft: 5,
  },
})

export default HeaderLeft
