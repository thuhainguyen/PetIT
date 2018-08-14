import * as random from '../../utilities/random';

const dataRender = {
  post: [
    {
      url:
        'http://spice4life.co.za/wp-content/uploads/2015/08/WFRRERGF33232.png',
      height: random.randomHeight(),
      userId: '1', // sau này dùng để truy vấn avatar
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/27971714_1599014010205646_285317708007152089_n.jpg?_nc_cat=0&oh=e4c367f4c99fc757cb80a98efce42603&oe=5BFD4658',
      comment: [
        {
          userId: '1',
          content: 1,
        },
        {
          userId: '1',
          content: 3,
        },
        {
          userId: '2',
          content: 2,
        },
      ],
      timestamp: 15555555,
      react: 20,
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJs5V2-sLKAu0Wku5-qlXWj5gQKfu1cELJX9vlfFVZyRYmJXsU',
      height: random.randomHeight(),
      userId: '1',
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/27971714_1599014010205646_285317708007152089_n.jpg?_nc_cat=0&oh=e4c367f4c99fc757cb80a98efce42603&oe=5BFD4658',
      react: 30,
      timestamp: 15555555,
      comment: [],
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJERW6CA7yt54wDliPrrcmcCtOrEUG80XAFb6qMidqhKEXNxCF',
      height: random.randomHeight(),
      userId: '2',
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/36863457_1347281165405719_4452561375645925376_n.jpg?_nc_cat=0&oh=14c3b5db3f6929ae8d117c1d49b4b673&oe=5C022B2A',
      react: 20,
      comment: [],
      timestamp: 15555555,
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZDEqcK3WAmmNZXSFATMlGJbCF5NPio5R7DcTGqWVdyRlykFg',
      height: random.randomHeight(),
      userId: '1',
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/27971714_1599014010205646_285317708007152089_n.jpg?_nc_cat=0&oh=e4c367f4c99fc757cb80a98efce42603&oe=5BFD4658',
      react: 20,
      comment: [],
      timestamp: 15555555,
    },
    {
      url:
        'https://qph.fs.quoracdn.net/main-qimg-ca2e210ba678548f1f1147fb25c8e406-c',
      height: random.randomHeight(),
      userId: '2',
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/36863457_1347281165405719_4452561375645925376_n.jpg?_nc_cat=0&oh=14c3b5db3f6929ae8d117c1d49b4b673&oe=5C022B2A',
      react: 50,
      comment: [],
      timestamp: 15555555,
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8k7XYAHPJxGTw3BAD05umYO2GUSBf-BCyI4ZswCzO2d4O6XVPQ',
      height: random.randomHeight(),
      userId: '2',
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/36863457_1347281165405719_4452561375645925376_n.jpg?_nc_cat=0&oh=14c3b5db3f6929ae8d117c1d49b4b673&oe=5C022B2A',
      react: 50,
      comment: [],
      timestamp: 15555555,
    },
    {
      url:
        'https://previews.123rf.com/images/wedmoscow/wedmoscow1502/wedmoscow150200073/37200247-beautiful-dog-sitting-down-isolated-over-a-white-background.jpg',
      height: random.randomHeight(),
      userId: '3',
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/38507167_1180872435401627_1655620329654976512_n.jpg?_nc_cat=0&oh=43a06efeaa27d0b99c2f95867fc678cf&oe=5BFCF1B5',
      react: 60,
      comment: [],
      timestamp: 15555555,
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqn1PYLgYanrF8eXPqC3BqOIQkuwMhTHWWY-ojqReKV-V2whOWmg',
      height: random.randomHeight(),
      userId: '3',
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/38507167_1180872435401627_1655620329654976512_n.jpg?_nc_cat=0&oh=43a06efeaa27d0b99c2f95867fc678cf&oe=5BFCF1B5',
      react: 170,
      comment: [],
      timestamp: 15555555,
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDy4EyYAx0lqtJbseAc1TOWGKuexjexngGJaTvf3eqvcSlMDc',
      height: random.randomHeight(),
      userId: '2',
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/36863457_1347281165405719_4452561375645925376_n.jpg?_nc_cat=0&oh=14c3b5db3f6929ae8d117c1d49b4b673&oe=5C022B2A',
      react: 100,
      comment: [],
      timestamp: 15555555,
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGtEEDglqVPjrCN2eCeleGEmPDfqMopAN210AVMCwE-R-Lgc5Fg',
      height: random.randomHeight(),
      userId: '1',
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/27971714_1599014010205646_285317708007152089_n.jpg?_nc_cat=0&oh=e4c367f4c99fc757cb80a98efce42603&oe=5BFD4658',
      react: 10,
      comment: [],
      timestamp: 15555555,
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGtEEDglqVPjrCN2eCeleGEmPDfqMopAN210AVMCwE-R-Lgc5Fg',
      height: random.randomHeight(),
      userId: '3',
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/38507167_1180872435401627_1655620329654976512_n.jpg?_nc_cat=0&oh=43a06efeaa27d0b99c2f95867fc678cf&oe=5BFCF1B5',
      react: 20,
      comment: [],
      timestamp: 15555555,
    },
    {
      url:
        'http://2.bp.blogspot.com/-HA1NGylMSRw/T_pezKKtMuI/AAAAAAAAESM/97G7ehzUYgU/s1600/Beautiful+dog+hd+Wallpapers_2.jpg',
      height: random.randomHeight(),
      userId: '1',
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/27971714_1599014010205646_285317708007152089_n.jpg?_nc_cat=0&oh=e4c367f4c99fc757cb80a98efce42603&oe=5BFD4658',
      react: 1000,
      comment: [],
      timestamp: 15555555,
    },
  ],
  user: {
    1: {
      userName: 'Chiến Mạnh Vũ',
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/27971714_1599014010205646_285317708007152089_n.jpg?_nc_cat=0&oh=e4c367f4c99fc757cb80a98efce42603&oe=5BFD4658',
      phoneNumber: '01627710926',
    },
    2: {
      userName: 'Giấu Tên',
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/36863457_1347281165405719_4452561375645925376_n.jpg?_nc_cat=0&oh=14c3b5db3f6929ae8d117c1d49b4b673&oe=5C022B2A',
      phoneNumber: '01686461297',
    },
    3: {
      userName: 'Tran Linh',
      avatar:
        'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/38507167_1180872435401627_1655620329654976512_n.jpg?_nc_cat=0&oh=43a06efeaa27d0b99c2f95867fc678cf&oe=5BFCF1B5',
      phoneNumber: '01686461299',
    },
  },
};

export default dataRender;
