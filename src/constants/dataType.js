// @flow

export type postType = {
  createtime: string,
  photoUrl?: string,
  userId: string,
  addressPost: string,
  react: number,
  comment: Array<{
    createtime: string,
    userId: string,
    content: number,
  }>,
  height: number,
  album?: string,
};

export type userType = {
  createtime: string,
  userName: string,
  phone: string,
  photoUrl?: string,
  address?: string,
  currentLocation: {
    latitude: number,
    longitude: number,
  },
  followed: Array<string>,
  following: Array<string>,
  status: {
    enable: boolean,
    lastRequest: string,
  },
  storeId?: string,
};
