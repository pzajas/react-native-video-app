import axios from 'axios'

const API_KEY = 'AIzaSyCWAMHzv5iEshbOSUGoDCfGMU_T6CkzqEY'
const getVideoDetails = async (videoId) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
      params: {
        part: 'snippet',
        id: videoId,
        key: API_KEY,
      },
    })

    const video = response.data.items[0]
    if (video) {
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`
      return videoUrl
    } else {
      throw new Error('Video not found')
    }
  } catch (error) {
    console.error('Error fetching video details:', error)
    throw error
  }
}

export default getVideoDetails
