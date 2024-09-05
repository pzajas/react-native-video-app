import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import palette from '@/constants/palette'

export const VideosSlider = ({ data, title, renderItem }: any) => {
  const router = useRouter()

  const handlePress = (item: any) => {
    router.push({
      pathname: `/video/${item.id.videoId}`,
      params: item.snippet,
    })
  }

  return (
    <View style={(styles.componentContrainer, { borderTopWidth: title === 'React Native' ? 0 : 2 })}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text
          style={styles.subText}
          onPress={() => {
            router.push({
              pathname: '/(tabs)/search',
              params: { title },
            })
          }}
        >
          Show More
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => renderItem({ item, onPress: handlePress })}
        keyExtractor={(item) => item?.id?.videoId}
        style={styles.flatList}
        horizontal
        contentContainerStyle={{ gap: 10 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  componentContrainer: {
    marginBottom: 13,
    borderTopWidth: 2,
    borderTopColor: palette.primary,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 15,
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'PoppinsSemiBold',
    color: palette.primary,
  },
  subText: {
    textDecorationLine: 'underline',
    color: palette.primary,
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
  },
  flatList: {
    paddingLeft: 15,
    marginTop: 10,
  },
})
