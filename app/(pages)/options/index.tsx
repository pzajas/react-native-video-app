import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { ProfileHeader } from '@/screens/optionsScreen/profileHeader'
import { NotificationSetting } from '@/screens/optionsScreen/notificationSetting'
import { ReminderText } from '@/screens/optionsScreen/reminderText'
import palette from '@/constants/palette'

export default function Options() {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ProfileHeader />
      </View>
      <NotificationSetting isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      <ReminderText />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: palette.primary,
    width: '100%',
    paddingBottom: 48,
    paddingTop: 12,
  },
})
