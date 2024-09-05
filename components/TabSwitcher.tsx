import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Alert, ScrollView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import { PrimaryButton } from './buttons/PrimaryButton'
import LikesIcon from '@/assets/icons/LikesIcon'
import ViewsIcon from '@/assets/icons/ViewsIcon'
import palette from '@/constants/palette'

type Note = { text: string; time: string }
interface FormData {
  note: string
}

const TabSwitcher = ({
  videoId,
  selectedTab,
  setSelectedTab,
  currentTime,
}: {
  videoId: string
  selectedTab: any
  setSelectedTab: any
  currentTime: string
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { note: '' },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })
  const queryClient = useQueryClient()
  const params = useLocalSearchParams()

  const NOTES_KEY = `video_notes_${videoId}`

  const {
    data: notes,
    refetch,
    isLoading,
    isError,
  } = useQuery<Note[]>({
    queryKey: [NOTES_KEY],
    queryFn: async () => {
      const savedNotes = await AsyncStorage.getItem(NOTES_KEY)
      return savedNotes ? JSON.parse(savedNotes) : []
    },
  })

  const mutation = useMutation<Note[], unknown, Note>({
    mutationFn: async (newNote) => {
      const updatedNotes = [...(notes || []), newNote]
      await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(updatedNotes))
      return updatedNotes
    },
    onSuccess: (data) => {
      queryClient.setQueryData([NOTES_KEY], data)
      refetch()
    },
    onError: () => {
      Alert.alert('Error', 'Failed to save the note')
    },
  })

  const onSubmit = (data: FormData) => {
    const noteWithTime = { text: data.note, time: currentTime }
    mutation.mutate(noteWithTime)
    reset()
  }

  const renderContent = () => {
    if (isLoading) return <Text style={styles.contentText}>Loading...</Text>
    if (isError) return <Text style={styles.contentText}>Failed to load notes.</Text>

    switch (selectedTab) {
      case 'Details':
        return (
          <>
            <Text style={[styles.contentText, { fontFamily: 'PoppinsExtraBold', marginBottom: 8 }]}>Description</Text>
            <Text style={[styles.contentText, { fontFamily: 'PoppinsMedium', fontSize: 12 }]}>
              {params?.description?.length > 0 ? params?.description : 'No description yet...'}
            </Text>

            <Text style={[styles.contentText, { fontFamily: 'PoppinsExtraBold', marginVertical: 16 }]}>Statistics</Text>

            <View style={styles.statsContainer}>
              <PrimaryButton
                text={'234243 views'}
                icon={<ViewsIcon color={palette.white} />}
                fontFamily="PoppinsMedium"
                fontSize={10}
                width="45%"
              />
              <PrimaryButton
                text="25268952 likes"
                icon={<LikesIcon color={palette.white} />}
                fontFamily="PoppinsMedium"
                fontSize={10}
                width="50%"
              />
            </View>
          </>
        )
      case 'Notes':
        return (
          <ScrollView style={styles.notesScrollView}>
            <View>
              {notes?.map((note, index) => (
                <View key={index} style={styles.noteContainer}>
                  <Text style={styles.noteText}>{note.text}</Text>
                  <Text style={styles.noteTime}> ({note.time})</Text>
                </View>
              ))}
            </View>

            <View style={styles.noteForm}>
              <Controller
                control={control}
                name="note"
                rules={{ required: 'Note cannot be empty' }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <>
                    <TextInput
                      style={styles.noteInput}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="Enter notes..."
                      placeholderTextColor="gray"
                      multiline
                      textAlignVertical="top"
                    />
                    {errors.note && <Text style={styles.errorText}>{errors.note.message}</Text>}
                  </>
                )}
              />
              <PrimaryButton
                text="Add Note"
                onPress={handleSubmit(onSubmit)}
                fontFamily="PoppinsSemiBold"
                fontSize={14}
                width="100%"
              />
            </View>
          </ScrollView>
        )
      default:
        return null
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Details' && styles.activeTab]}
          onPress={() => setSelectedTab('Details')}
        >
          <Text style={[styles.tabText, { fontFamily: 'PoppinsExtraBold' }]}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Notes' && styles.activeTab]}
          onPress={() => setSelectedTab('Notes')}
        >
          <Text style={[styles.tabText, { fontFamily: 'PoppinsExtraBold' }]}>Notes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>{renderContent()}</View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 8,
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
    borderBottomColor: palette.primary,
  },
  tabText: {
    fontSize: 12,
    color: palette.primary,
  },
  contentContainer: {
    marginTop: 20,
  },
  contentText: {
    fontSize: 10,
    color: palette.primary,
    marginBottom: 10,
  },
  notesScrollView: {
    flexGrow: 1,
  },
  noteContainer: {
    marginBottom: 10,
    borderWidth: 2,
    padding: 12,
    borderRadius: 12,
    borderColor: 'lightgray',
  },
  noteText: {
    fontSize: 12,
    color: 'gray',
    fontFamily: 'PoppinsRegular',
  },
  noteTime: {
    fontSize: 10,
    color: 'darkgrey',
  },
  noteForm: {
    marginTop: 10,
  },
  noteInput: {
    height: 100,
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingTop: 12,
    color: palette.grey,
    width: '100%',
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
})

export default TabSwitcher
