export const getFilteredVideos = ({ videos, keyword }: any) =>
  videos?.filter((video: any) => video.snippet.title.toLowerCase().includes(keyword.toLowerCase()))
