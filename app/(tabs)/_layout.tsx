import { Tabs } from 'expo-router'
import { HomeIcon } from '@/assets/icons/HomeIcon'
import { SearchIcon } from '@/assets/icons/SearchIcon'
import palette from '@/constants/palette'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: palette.white,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: palette.background,
          paddingBottom: 5,
          height: 72,
        },
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        },
        tabBarIconStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
          fontFamily: 'PoppinsRegular',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
        }}
      />
    </Tabs>
  )
}
