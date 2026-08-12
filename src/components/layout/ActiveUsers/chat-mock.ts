import { IActiveUserProps } from './mock'

export interface IChatMessage {
  id: number
  senderId: 'me' | 'them'
  content: string
  time: number
}

const MINUTE = 60 * 1000
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

export const getChatMessages = (user: IActiveUserProps): IChatMessage[] => {
  const now = Date.now()
  const yesterday = now - DAY
  const today = now - 3 * HOUR
  const firstName = user.name.split(' ')[0]

  return [
    { id: 1, senderId: 'them', content: user.message, time: yesterday },
    { id: 2, senderId: 'me', content: `Hey ${firstName}!`, time: today },
    {
      id: 3,
      senderId: 'me',
      content: "You're right, it's been a really long time! Great to hear from you",
      time: today,
    },
    { id: 4, senderId: 'them', content: 'Yeah! Way too long!', time: today + 5 * MINUTE },
    { id: 5, senderId: 'them', content: 'That reminds me, I wanted to ask you something', time: today + 5 * MINUTE },
    { id: 6, senderId: 'them', content: 'Are you free this weekend?', time: today + 5 * MINUTE },
  ]
}
