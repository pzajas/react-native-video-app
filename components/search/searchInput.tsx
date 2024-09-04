import { StyleSheet, TextInput, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import palette from '@/constants/palette'

export const SearchInput = ({ query, onChange }: any) => (
  <View style={styles.inputContainer}>
    <Feather name="search" size={25} color={'gray'} style={styles.icon} />
    <TextInput
      placeholder="Search videos"
      placeholderTextColor={'gray'}
      style={styles.searchInput}
      onChangeText={onChange}
      value={query}
      inputMode="text"
    />
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.white,
    borderWidth: 2,
    borderColor: palette.primary,
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: palette.black,
    fontFamily: 'PoppinsRegular',
    textAlignVertical: 'center',
  },
})
