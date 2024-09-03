import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import { PrimaryButton } from './buttons/PrimaryButton'
import { HomeIcon } from '@/assets/icons/HomeIcon'

type Note = string
interface FormData {
  note: string
}

const TabSwitcher = ({
  videoId,
  selectedTab,
  setSelectedTab,
}: {
  videoId: string
  selectedTab: any
  setSelectedTab: any
}) => {
  const { control, handleSubmit, reset } = useForm<FormData>({ defaultValues: { note: '' } })
  const queryClient = useQueryClient()

  const params = useLocalSearchParams()
  console.log(params, 'tab switch')

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

  // Mutation to add a new note
  const mutation = useMutation<Note[], unknown, string>({
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
    mutation.mutate(data.note)
    reset() // Reset the form after submission
  }

  const renderContent = () => {
    if (isLoading) return <Text style={styles.contentText}>Loading...</Text>
    if (isError) return <Text style={styles.contentText}>Failed to load notes.</Text>

    switch (selectedTab) {
      case 'Details':
        return (
          <>
            <Text style={(styles.contentText, { fontFamily: 'PoppinsExtraBold', marginBottom: 8 })}>Destcription</Text>
            <Text style={(styles.contentText, { fontFamily: 'PoppinsMedium', fontSize: 12 })}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis semper purus a accumsan.
              Donec accumsan pulvinar metus, euismod lacinia libero congue non. Vivamus ut massa finibus, consequat dui
              commodo, semper magna. Donec nec justo consectetur lacus facilisis tristique eget quis nulla. Cras sodales
              lacinia nisi, in dictum elit commodo in.
            </Text>

            <Text style={(styles.contentText, { fontFamily: 'PoppinsExtraBold', marginVertical: 16 })}>Statistics</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <PrimaryButton
                text="25268952 views"
                icon={<HomeIcon color={'white'} />}
                fontFamily="PoppinsMedium"
                fontSize={10}
                onPress={() => console.log('ppp')}
                width="45%"
              />
              <PrimaryButton
                text="25268952 views"
                icon={<HomeIcon color={'white'} />}
                fontFamily="PoppinsMedium"
                fontSize={10}
                onPress={() => console.log('ppp')}
                width="50%"
              />
            </View>
          </>
        )
      case 'Notes':
        return (
          <ScrollView>
            <View>
              {notes?.map((note, index) => (
                <Text key={index} style={styles.noteText}>
                  {note}
                </Text>
              ))}
            </View>

            <View style={styles.noteForm}>
              <Controller
                control={control}
                name="note"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.noteInput}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Enter notes..."
                    placeholderTextColor="gray"
                    multiline
                  />
                )}
              />
              <Button title="Add Note" onPress={handleSubmit(onSubmit)} />
            </View>
          </ScrollView>
        )
      default:
        return null
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, selectedTab === 'Details' && styles.activeTab]}
            onPress={() => setSelectedTab('Details')}
          >
            <Text style={(styles.tabText, { fontFamily: 'PoppinsExtraBold' })}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, selectedTab === 'Notes' && styles.activeTab]}
            onPress={() => setSelectedTab('Notes')}
          >
            <Text style={(styles.tabText, { fontFamily: 'PoppinsExtraBold' })}>Notes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>{renderContent()}</View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 16,
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
    borderBottomColor: 'grey',
  },
  tabText: {
    fontSize: 12,
    color: 'grey',
  },
  contentContainer: {
    marginTop: 20,
    width: '100%',
  },
  contentText: {
    fontSize: 10,
    color: 'grey',
    marginBottom: 10,
  },
  noteText: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5,
    borderWidth: 2,
    padding: 12,
    borderRadius: 12,
    borderColor: 'lightgray',
    fontFamily: 'PoppinsRegular',
  },
  noteForm: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
  noteInput: {
    height: 100,
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 12,
    color: 'grey',
    width: '100%',
  },
})

export default TabSwitcher
