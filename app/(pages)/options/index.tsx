import { useState } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import palette from '@/constants/palette'
import ChannelIcon from '@/assets/icons/ChannelIcon'
import NotificationIcon from '@/assets/icons/NotificationIcon'
import ClockIcon from '@/assets/icons/ClockIcon'

export default function Options() {
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: palette.primary,
            width: '100%',
            paddingBottom: 48,
            paddingTop: 12,
          }}
        >
          <View style={styles.profileContainer}>
            <ChannelIcon />
            <Text style={styles.profileName}>John Doe</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'column', paddingHorizontal: 30, justifyContent: 'center', marginTop: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginLeft: -8 }}>
            <NotificationIcon />
            <Text style={{ fontSize: 14, fontFamily: 'PoppinsRegular' }}>Learning reminders</Text>
          </View>

          <View style={styles.reportContainer}>
            <Text style={styles.reportText}>Report everyday at:</Text>

            <View style={styles.timeContainer}>
              <ClockIcon />
              <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 12 }}>12:00</Text>
            </View>

            <Switch
              trackColor={{ false: palette.grey, true: palette.primary }}
              thumbColor={isEnabled ? palette.white : palette.black}
              ios_backgroundColor={palette.grey}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 10, marginTop: 18 }}>
            You will receive friendly reminder to remember to study
          </Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: palette.primary,
    borderRadius: 10,
    position: 'absolute',
    top: 50,
    left: 20,
  },
  goBackText: {
    color: palette.white,
    fontSize: 16,
    marginLeft: 10,
  },
  profileContainer: {
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
  optionsText: {
    fontSize: 24,
    color: palette.black,
    marginTop: 20,
  },
  reportContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  reportText: {
    fontSize: 12,
    fontFamily: 'PoppinsRegular',
    color: palette.black,
  },
  timeContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
})
