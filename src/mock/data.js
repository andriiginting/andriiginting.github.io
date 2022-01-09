import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Andriiginting',
  lang: 'en',
  description: 'Welcome to my page!',
};

// HERO DATA
export const heroData = {
  title: "Heyo folks 👋 I'm",
  name: 'Andriiginting',
  subtitle: 'I am a Software Engineer focusing on Android',
  cta: "Let's take a look",
};

// ABOUT DATA
export const aboutData = {
  img: 'andri_profile.jpeg',
  paragraphOne:
    "Hi, I'm Andri Ginting, I am currently a Senior Android Engineer at Gojek focusing on Orders Management and improving Customer Experience of Gojek apps.",
  paragraphTwo:
    "I'm highly motivated for learning new things especially android development and also other new technology.",
  paragraphThree:
    "Apart from that, I'm also the organizer of GDG Cloud Jakarta and sometimes post some videos on youtube and article on medium",
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gojek_poster.png',
    title: 'Gojek',
    info: 'Gojek is a Super App. It’s one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia’s first and fastest growing unicorn building an on-demand empire across Southeast Asia.',
    info2:
      'As of 2020, Gojek processed more than $10 billion annualized gross transaction value (GTV) across all markets where it operates - Indonesia, Singapore, Vietnam and Thailand.',
    url: 'https://play.google.com/store/apps/details?id=com.gojek.app&hl=en&gl=US',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'kawalcovid19_poster.jpeg',
    title: 'KawalCovid19',
    info: 'This project is a source of information on pro-data Indonesian citizen voluntary initiatives, consisting of health practitioners, academics & professionals.',
    info2:
      'I was leading the Android team (65 members) to rewrite the codebase from Flutter to Kotlin, helped develop new feature, helped code review to keep good quality of code and helped to modularize the project',
    url: 'https://kcov.id/apk/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'golife_poster.jpeg',
    title: 'GoLife Service Provider',
    info: 'GoLife Mitra is an app for golife service provider',
    info2: '',
    url: 'https://apkgk.com/com.gojek.spapp',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'crossfade_poster.png',
    title: 'Crossfade Player',
    info: 'Crossfade transition between 2 songs',
    info2: '',
    url: 'https://github.com/andriiginting/crossfade-player',
    repo: 'https://github.com/andriiginting/crossfade-player',
  },
  {
    id: nanoid(),
    img: 'muvi_banner.png',
    title: 'Muvi',
    info: 'Very simple project to show a collection of Movie from MovieDb with a minimalist design',
    info2: '',
    url: 'https://github.com/andriiginting/Muvi',
    repo: 'https://github.com/andriiginting/Muvi',
  },
  {
    id: nanoid(),
    img: 'preloading_video.png',
    title: 'Instagram Preloading',
    info: 'This project to show how to use preloading in exoplayer android using simple MVVM',
    info2: '',
    url: 'https://github.com/andriiginting/instagram-preloading',
    repo: 'https://github.com/andriiginting/instagram-preloading',
  },
  {
    id: nanoid(),
    img: 'comeapp_poster.jpeg',
    title: 'Come App',
    info: 'Build ComeApp android from scratch with the ability to search user based on user location, have chat feature that able to communicate with other users in the same group using GraphQl',
    info2: '',
    url: 'https://play.google.com/store/apps/details?id=id.comeapp.come&hl=en&gl=US',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Wanna talk something about tech?',
  btn: "Let's grab some coffee ☕",
  email: 'andris.ginting@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@andris.ginting',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/andriiginting/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/andriiginting',
    },
  ],
};
