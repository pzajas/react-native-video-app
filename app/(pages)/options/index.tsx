import { useState } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import palette from '@/constants/palette'
import ChannelIcon from '@/assets/icons/ChannelIcon'

export default function Options() {
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <ChannelIcon />
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      <Text style={styles.optionsText}>Options Screen</Text>

      <View style={styles.reportContainer}>
        <Text style={styles.reportText}>Report every day at 12:00</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.white,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 24,
    color: palette.black,
  },
  optionsText: {
    fontSize: 24,
    color: palette.black,
    marginTop: 20,
  },
  reportContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: 40,
  },
  reportText: {
    fontSize: 18,
    color: palette.black,
  },
})
