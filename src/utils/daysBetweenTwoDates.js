export const daysBetweenTwoDates = (seconds) =>
{
  const dateTodayInSecs = new Date().getTime()
  
  const TotalDays = (dateTodayInSecs-seconds*1000)/(1000 * 3600 * 24);
  
  if (TotalDays<1) {
    return 'Today'
  }
  
  if (TotalDays<=4) {
    return Math.ceil(TotalDays)+`${TotalDays==1?' day':' days'} ago`
  }
  
  return new Date(seconds*1000).toDateString()
}

