type dataType = {
  user: {
    userId: {
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
    },
  },
  post: {
    postId: {
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
      album?: string,
    },
  },
  pet: {
    petName: {
      petId: {
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
        diary: Array<{
          createtime: string,
          treatment: string,
          photoUrl: string,
        }>,
      },
    },
  },
};

export default dataType;
