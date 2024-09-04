// // components/SearchBar.js
// import React from 'react'
// import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
// import Feather from 'react-native-vector-icons/Feather'
// import palette from '@/constants/palette'

// const SearchBar = ({ query, onQueryChange }) => {
//   return (
//     <SafeAreaView style={{ backgroundColor: 'white' }}>
//       <View>
//         <Feather name="search" size={25} color={'gray'} style={styles.icon} />
//         <TextInput
//           placeholder="Search videos"
//           placeholderTextColor={'gray'}
//           onChangeText={onQueryChange}
//           value={query}
//           inputMode="text"
//         />
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     marginTop: 10,
//     marginBottom: 5,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: palette.white,
//     borderWidth: 2,
//     borderColor: palette.primary,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     flex: 1,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     color: palette.black,
//     fontFamily: 'PoppinsRegular',
//     textAlignVertical: 'center',
//   },
// })

// export default SearchBar
