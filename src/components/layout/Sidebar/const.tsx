import {
  BadgeIcon,
  EventIcon,
  ForumIcon,
  GroupIcon,
  MarketplaceIcon,
  MemberIcon,
  NewfeedIcon,
  OverviewIcon,
  QuestIcon,
  StreamIcon,
} from '@/assets'

export const sidebarItems = [
  {
    icon: <NewfeedIcon />,
    label: 'common.newsfeed',
    href: '/new-feed',
  },
  {
    icon: <OverviewIcon />,
    label: 'common.overview',
    href: '/overview',
  },
  {
    icon: <GroupIcon />,
    label: 'common.group',
    href: '/group',
  },
  {
    icon: <MemberIcon />,
    label: 'common.member',
    href: '/member',
  },
  {
    icon: <BadgeIcon />,
    label: 'common.badge',
    href: '/badge',
  },
  {
    icon: <QuestIcon />,
    label: 'common.quest',
    href: '/quest',
  },
  {
    icon: <StreamIcon />,
    label: 'common.stream',
    href: '/stream',
  },
  {
    icon: <EventIcon />,
    label: 'common.event',
    href: '/event',
  },
  {
    icon: <ForumIcon />,
    label: 'common.forum',
    href: '/forum',
  },
  {
    icon: <MarketplaceIcon />,
    label: 'common.marketplace',
    href: '/marketplace',
  },
]
