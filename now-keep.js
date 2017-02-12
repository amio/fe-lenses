// Keep now app alive for <hours>.

const ONE_HOUR = 1000 * 60 * 60

export default hours => {
  hours = parseInt(hours) || 1
  return setTimeout(() => {}, hours * ONE_HOUR)
}
