import { ReactNode } from 'react'
import { Facebook, Instagram, MessageCircle, Twitch, Twitter, Youtube } from 'lucide-react'

export interface IProfileUser {
  name: string
  age: number
  level: number
  country: string
  countryFlag: string
  website: string
  avatar: string
  cover: string
  stats: {
    posts: number
    friends: string
    visits: string
  }
  about: {
    bio: string
    joined: string
    city: string
    country: string
    age: string
    web: string
  }
  personalInfo: {
    email: string
    birthday: string
    occupation: string
    status: string
    birthplace: string
    psId: string
    xbId: string
  }
  interests: {
    label: string
    value: string
  }[]
  jobs: {
    title: string
    period: string
    description: string
  }[]
  completion: {
    percentage: number
    questsCompleted: number
    questsTotal: number
    badgesUnlocked: number
    badgesTotal: number
  }
  moreStats: {
    label: string
    value: string
  }[]
}

export interface ISocialLink {
  id: string
  label: string
  href: string
  icon: ReactNode
  className: string
}

export const PROFILE_USER: IProfileUser = {
  name: 'Marina Valentine',
  age: 24,
  level: 24,
  country: 'USA',
  countryFlag: '🇺🇸',
  website: 'www.gamehuntress.com',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEZghB-stFaphAohNqDAhEaXOWQJ9XvHKJw&s',
  cover: 'https://odindesignthemes.com/vikinger-dark/img/banner/banner-bg.png',
  stats: {
    posts: 930,
    friends: '82',
    visits: '5.7K',
  },
  about: {
    bio: 'Hi! My name is Marina but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.',
    joined: 'March 26th, 2017',
    city: 'Los Angeles, California',
    country: 'United States',
    age: '32 Years',
    web: 'www.gamehuntress.com',
  },
  personalInfo: {
    email: 'ghuntress@yourmail.com',
    birthday: 'August 24th, 1987',
    occupation: 'Costume Designer',
    status: 'In a Relationship',
    birthplace: 'Long Island, New York United States',
    psId: 'da_GHuntress',
    xbId: 'GameHuntress89',
  },
  interests: [
    {
      label: 'Favourite TV Shows',
      value:
        'Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy, The Last Windbender, Game of Wars.',
    },
    {
      label: 'Favourite Music Bands / Artists',
      value: 'Iron Maid, DC/AC, Megablow, Kung Fighters, System of a Revenge, Rammstown.',
    },
    {
      label: 'Favourite Movies',
      value:
        'The Revengers Saga, The Scarred Wizard and the Fire Crown, Crime Squad, Metal Man, The Dark Rider, Watchers, The Impossible Heist.',
    },
    {
      label: 'Favourite Books',
      value:
        'The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.',
    },
    {
      label: 'Favourite Games',
      value: 'The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.',
    },
  ],
  jobs: [
    {
      title: 'Lead Costume Designer',
      period: '2015 - NOW',
      description:
        'Lead Costume Designer for the "Amazzo Costumes" agency. I\'m in charge of a ten person group, overseeing all the proyects and talking to potential clients. I also handle some face to face interviews for new candidates.',
    },
    {
      title: 'Costume Designer',
      period: '2013 - 2015',
      description:
        'Costume Designer for the "Jenny Taylors" agency. Was in charge of working side by side with the best designers in order to complete and perfect orders.',
    },
    {
      title: 'Designer Intern',
      period: '2012 - 2013',
      description:
        'Intern for the "Jenny Taylors" agency. Was in charge of the communication with the clients and day-to-day chores.',
    },
    {
      title: 'The Antique College of Design',
      period: '2007 - 2012',
      description:
        'Bachelor of Costume Design in the Antique College. It was a five years intensive career, plus a course about Cosplays. Average: A+',
    },
  ],
  completion: {
    percentage: 59,
    questsCompleted: 11,
    questsTotal: 30,
    badgesUnlocked: 22,
    badgesTotal: 46,
  },
  moreStats: [
    { label: 'Last Friend Added', value: '5 Days Ago' },
    { label: 'Last Post Update', value: '1 Day Ago' },
    { label: 'Most Commented Post', value: '56 Comments' },
    { label: 'Most Liked Post', value: '904 Likes' },
  ],
}

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: '#',
    icon: <Facebook size={16} strokeWidth={2.5} />,
    className: 'bg-[#3b5998]',
  },
  {
    id: 'twitter',
    label: 'Twitter',
    href: '#',
    icon: <Twitter size={16} strokeWidth={2.5} />,
    className: 'bg-[#1da1f2]',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: '#',
    icon: <Instagram size={16} strokeWidth={2.5} />,
    className: 'bg-[#e1306c]',
  },
  {
    id: 'twitch',
    label: 'Twitch',
    href: '#',
    icon: <Twitch size={16} strokeWidth={2.5} />,
    className: 'bg-[#6441a5]',
  },
  {
    id: 'youtube',
    label: 'Youtube',
    href: '#',
    icon: <Youtube size={16} strokeWidth={2.5} />,
    className: 'bg-[#ff0000]',
  },
  {
    id: 'discord',
    label: 'Discord',
    href: '#',
    icon: <MessageCircle size={16} strokeWidth={2.5} />,
    className: 'bg-[#7289da]',
  },
]
