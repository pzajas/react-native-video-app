import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const TabSwitcher = () => {
  const [selectedTab, setSelectedTab] = useState('Details')

  const renderContent = () => {
    switch (selectedTab) {
      case 'Details':
        return <Text style={styles.contentText}>Here are the details of the video.</Text>
      case 'Notes':
        return <Text style={styles.contentText}>Here are some notes related to the video.</Text>
      default:
        return null
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Details' && styles.activeTab]}
          onPress={() => setSelectedTab('Details')}
        >
          <Text style={styles.tabText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Notes' && styles.activeTab]}
          onPress={() => setSelectedTab('Notes')}
        >
          <Text style={styles.tabText}>Notes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: 'white',
  },
  tabText: {
    fontSize: 16,
    color: 'white',
  },
  contentContainer: {
    marginTop: 20,
    width: '100%',
  },
  contentText: {
    fontSize: 16,
    color: 'white',
  },
})

export default TabSwitcher
