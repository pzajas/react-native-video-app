import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'
import { OptionsIcon } from '@/assets/icons/OptionsIcon'
import Feather from 'react-native-vector-icons/Feather'
import palette from '@/constants/palette'

export const SearchInput = ({ query, onChange }: any) => {
  const route = useRoute()
  const router = useRouter()
  const currentRoute = route?.name

  return (
    <View style={[styles.searchContainer, { paddingHorizontal: currentRoute === 'index' ? 5 : 0 }]}>
      <View style={styles.inputContainer}>
        <Feather name="search" size={25} color={palette.grey} style={styles.icon} />
        <TextInput
          placeholder="Search videos"
          placeholderTextColor={'gray'}
          style={styles.searchInput}
          onChangeText={onChange}
          value={query}
          inputMode="text"
        />
      </View>
      {currentRoute === 'index' && (
        <TouchableOpacity onPress={() => router.push('/options')}>
          <OptionsIcon />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
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
