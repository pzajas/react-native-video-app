import axios from 'axios'
import { queryClient } from './queryClient'
import { API_KEY } from '@env'

export const fetchVideosData = async () => {
  const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'

  try {
    const response = await axios.get(YOUTUBE_API_URL, {
      params: {
        part: 'snippet',
        q: 'React, React Native, JavaScript, TypeScript',
        type: 'video',
        maxResults: 50,
        key: API_KEY,
      },
    })

    const videos = response.data.items
    queryClient.setQueryData(['videos'], videos)
    return videos
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data)
      console.error('Error status:', error.response.status)
      console.error('Error headers:', error.response.headers)
    } else if (error.request) {
      console.error('Error request:', error.request)
    } else {
      console.error('Error message:', error.message)
    }
    console.error('Error config:', error.config)
  }
}
