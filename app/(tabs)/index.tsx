import { StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OptionsIcon } from '@/assets/icons/OptionsIcon'
import Feather from 'react-native-vector-icons/Feather'
import palette from '@/constants/palette'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Feather name="search" size={20} color={'gray'} style={styles.icon} />
          <TextInput placeholder="Search videos" placeholderTextColor={'gray'} style={styles.searchInput} />
        </View>
        <OptionsIcon />
      </View>

      <Text>FLATLISTS</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: palette.white,
    paddingHorizontal: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.white,
    paddingHorizontal: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'red',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
    paddingLeft: 40,
    marginRight: 20,
  },
  cogIcon: {
    marginLeft: 10,
  },
})
