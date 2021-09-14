type calculateDateCategoryReturnType =
  | 'today'
  | 'yesterday'
  | 'tomorrow'
  | 'later'
  | 'past'

export const calculateDateCategory = (
  date: string,
): calculateDateCategoryReturnType => {
  const today = new Date(date)
  const todayDate = today.getDate()
  const diffDays = new Date().getDate() - todayDate
  const diffMonths = new Date().getMonth() - today.getMonth()
  const diffYears = new Date().getFullYear() - today.getFullYear()

  if (diffYears === 0 && diffDays === 0 && diffMonths === 0) {
    return 'today'
  } else if (diffYears === 0 && diffDays === 1) {
    return 'yesterday'
  } else if (diffYears === 0 && diffDays === -1) {
    return 'tomorrow'
  } else if (diffYears === 0 && diffDays < -1) {
    return 'later'
  } else {
    return 'past'
  }
}
