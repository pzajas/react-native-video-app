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
        maxResults: 100,
        key: API_KEY,
      },
    })

    const videos = response.data.items

    queryClient.setQueryData(['videos'], videos)
  } catch (error) {
    console.error('Error fetching videos data:', error)
    console.error('Error fetching videos data:', error)
  }
}
