import axios from 'axios'

const API_KEY = 'AIzaSyCWAMHzv5iEshbOSUGoDCfGMU_T6CkzqEY'
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/videos'

export const fetchVideos = async (query) => {
  try {
    const response = await axios.get(YOUTUBE_API_URL, {
      params: {
        part: 'snippet, statistics',
        q: query,
        type: 'video',
        maxResults: 100,
        key: API_KEY,
      },
    })

    return response.data.items
  } catch (error) {
    console.error('Error fetching videos:', error)
    return []
  }
}
