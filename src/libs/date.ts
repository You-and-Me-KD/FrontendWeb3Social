import moment from 'moment'

export const dateFromNow = (date: number) => {
  return moment(date).fromNow()
}
