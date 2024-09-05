import { View, Text, StyleSheet } from 'react-native'
import palette from '@/constants/palette'
import ChannelIcon from '@/assets/icons/ChannelIcon'

export const ProfileHeader = () => (
  <View style={styles.profileHeader}>
    <ChannelIcon />
    <Text style={styles.profileName}>John Doe</Text>
  </View>
)

const styles = StyleSheet.create({
  profileHeader: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  profileName: {
    fontSize: 14,
    fontFamily: 'PoppinsExtraBold',
    color: palette.black,
  },
})
