import { View, Text, StyleSheet, Switch } from 'react-native'
import palette from '@/constants/palette'
import NotificationIcon from '@/assets/icons/NotificationIcon'
import ClockIcon from '@/assets/icons/ClockIcon'

export const NotificationSetting = ({ isEnabled, toggleSwitch }: any) => (
  <View style={styles.notificationContainer}>
    <View style={styles.notificationRow}>
      <NotificationIcon />
      <Text style={styles.notificationText}>Learning reminders</Text>
    </View>
    <View style={styles.reportContainer}>
      <Text style={styles.reportText}>Report everyday at:</Text>
      <View style={styles.timeContainer}>
        <ClockIcon />
        <Text style={styles.timeText}>12:00</Text>
      </View>
      <Switch
        trackColor={{ false: palette.grey, true: palette.primary }}
        thumbColor={isEnabled ? palette.white : palette.black}
        ios_backgroundColor={palette.grey}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  </View>
)

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'column',
    paddingHorizontal: 30,
    justifyContent: 'center',
    marginTop: 15,
  },
  notificationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginLeft: -8,
  },
  notificationText: {
    fontSize: 14,
    fontFamily: 'PoppinsRegular',
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
  timeText: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
  },
  reminderText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 10,
    marginTop: 18,
  },
})
