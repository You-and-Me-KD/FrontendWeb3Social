export interface ILoginResponse {
  id: string
  createdAt: string
  updatedAt: string
  deletedAt: string
  firstName: string
  lastName: string
  username: string
  email: string
  phoneNumber: string
  language: string
  address: string
  hashedPassword: string
  description: string
  tagLine: string
  publicEmail: string
  publicWebsite: string
  birthDate: string
  major: string
  martialStatus: string
  birthPlace: string
  psId: string
  xbId: string
  level: number
  exp: number
  followerCount: number
  followingCount: number
  postCount: number
  commentCount: number
  visitCount: number
  reactCount: number
  shareCount: number
  isGetLastestNews: boolean
  isNotifyComment: boolean
  isGetNewByMail: boolean
  isNotifyGroup: boolean
  isNotifyTag: boolean
  isNotifyFriendRequest: boolean
  isNotifyEvent: boolean
  isNotifyMarket: boolean
  streamDescription: string
  avatarId: string
  bannerId: string
  countryId: string
  cityId: string
  isVerify: boolean
}
export interface ILoginRequest {
  email: string
  password: string
  remember?: boolean
}

export interface IRegisterResponse {
  message: string
}
export interface IRegisterRequest {
  username: string
  email: string
  password: string
  isGetNewByMail?: boolean
}

export interface IGetMeResponse {
  id: string
  createdAt: string
  updatedAt: string
  deletedAt: string
  firstName: string
  lastName: string
  username: string
  email: string
  phoneNumber: string
  language: string
  address: string
  hashedPassword: string
  description: string
  tagLine: string
  publicEmail: string
  publicWebsite: string
  birthDate: string
  major: string
  martialStatus: string
  birthPlace: string
  psId: string
  xbId: string
  level: number
  exp: number
  followerCount: number
  followingCount: number
  postCount: number
  commentCount: number
  visitCount: number
  reactCount: number
  shareCount: number
  isGetLastestNews: boolean
  isNotifyComment: boolean
  isGetNewByMail: boolean
  isNotifyGroup: boolean
  isNotifyTag: boolean
  isNotifyFriendRequest: boolean
  isNotifyEvent: boolean
  isNotifyMarket: boolean
  streamDescription: string
  avatarId: string
  bannerId: string
  countryId: string
  cityId: string
  isVerify: boolean
}

export interface IVerifyTokenRequest {
  token: string
}

export interface IResendRequest {
  email: string
}

export interface IForgotPasswordRequest {
  email: string
}

export interface IResetPasswordRequest {
  token: string
  newPassword: string
}
