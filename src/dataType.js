export type DataStructure = {
  user: {
    userId: {
      createtime: number,
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
    },
  },
  post: {
    postId: {
      createtime: number,
      photoUrl?: string,
      userId: string,
      addressPost: string,
      react: number,
      comment: Array<{
        createtime: string,
        userId: string,
        content: number,
      }>,
      album?: string,
    },
  },
  pet: {
    petName: {
      petId: {
        createtime: number,
        petName: string,
        photoUrl: string,
        age?: string,
        birthDay?: number,
        gender: string,
        species: string,
        hairColor: string,
        microship: string,
        album: {
          albumName: {
            createtime: number,
            postId: Array<string>,
          },
        },
        diary: Array<{
          createtime: number,
          treatment: string,
          photoUrl: string,
        }>,
      },
    },
  },
};

export type User = {
  createtime: number,
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

export type Post = {
  key: string,
  createtime: number,
  photoUrl?: string,
  userId: string,
  addressPost: string,
  react: number,
  comment: Array<{
    createtime: string,
    userId: string,
    content: number,
  }>,
  album?: string,
};

export type Diary = {
  createtime: number,
  treatment: string,
  photoUrl: string,
};

export type Pet = {
  key: string,
  createtime: string,
  petName: string,
  photoUrl: string,
  age?: string,
  birthDay?: number,
  gender: string,
  species: string,
  hairColor: string,
  microship: string,
  album: {
    albumName: {
      createtime: string,
      postId: Array<string>,
    },
  },
  diary: Array<Diary>,
};
