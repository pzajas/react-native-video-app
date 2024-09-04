import { getFilteredVideos } from './getFilteredVideos'

interface Video {
  snippet: {
    title: string
  }
}

interface FilterVideosParams {
  videos: Video[]
  categories: Record<string, string>
}

export const filterVideos = ({ videos, categories }: FilterVideosParams) => {
  return Object.fromEntries(
    Object.entries(categories).map(([title, keyword]) => [
      title,
      keyword === 'react'
        ? getFilteredVideos({ videos, keyword }).filter(
            (video: Video) => !video.snippet.title.toLowerCase().includes('react native')
          )
        : getFilteredVideos({ videos, keyword }),
    ])
  )
}
