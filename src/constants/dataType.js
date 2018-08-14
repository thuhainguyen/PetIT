// @flow

export type post = {
  key: string,
  height: number,
  avatar: string,
  react: number,
  userId: string,
  url: string,
  comment: Array<Object>,
};

export type user = {
  userName: string,
  avatar: string,
  phoneNumber: string,
};
