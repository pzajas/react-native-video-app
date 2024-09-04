export const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' }
  return date.toLocaleDateString(undefined, options)
}
