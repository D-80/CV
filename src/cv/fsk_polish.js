import litImg from '../assets/lit.png'
import yokoImg from '../assets/yoko.png'
import cvPhoto from '../assets/cv1.png'
import turboExcell from '../assets/turbo-excell.png'

export default {

  layout: {
    header: '#357',
    bgColor1: '#EEE',
    bgColor2: '#357',
    color1: '#567',
    color2: '#345'
  },

  name: 'Filip Sas-Kulczycki',
  position: 'Software Developer',
  quote: `W pełni funkcjonalny, zawsze oddany i z klasą - tak jak mój kod.`,
  photo: cvPhoto,

  phone: '+48 733 393 093',
  mail: 'filipsaskulczycki@gmail.com',
  street: 'Starościńska 4/6 m.3',
  city: 'Warszawa 02-516',
  github: 'https://github.com/D-80',
  birthday: '04.08.1995',

  skills: {
    programmingLanguages: [
      { title: 'JavaScript', value: 80 },
      { title: 'Python', value: 75 },
      { title: 'Java', value: 65 },
      { title: 'C++', value: 60 },
      { title: 'C#', value: 50 },
      { title: 'Bash', value: 50 }
    ],
    frameworks: [
      { title: 'React.js', value: 80 },
      { title: 'Redux', value: 75 },
      { title: 'React Native', value: 55 },
      { title: 'Socket.IO', value: 50 },
      { title: 'Jest', value: 40 },
      { title: 'Angular', value: 40 },
      { title: 'Vue.js', value: 40 }
    ],
    other: [
      { title: 'HTML5', value: 90 },
      { title: 'CSS', value: 85 },
      { title: 'Bootstrap', value: 75 },
      { title: 'MongoDB', value: 50 },
      { title: 'MySQL', value: 40 },
      { title: 'Git', value: 50 },
      { title: `Algorytmy`, value: 70 },
      { title: `Regex`, value: 60 },

      { title: 'Linux', value: 80 },
      { title: 'Windows', value: 65 },
      { title: 'MacOS', value: 50 },
    ],
    /*
    webDev: [
      { title: 'JavaScript', description: `I have a very good understanding of JavaScript, including ECMA6.` },
      { title: 'React.js', description: `I use React.js on the daily basis - even the document that you are reading I wrote using this framework.` },
      { title: 'Bootstrap', description: `I am proficient with using Bootstrap v.4 and some of its React alternatives.` },
      { title: 'CSS', description: `I have a good understanding of all the basic principles, as well as animations, flex-box layout and media queries.` }
    ],
    */

    languages: [
      { title: 'Polski', description: 'Ojczysty' },
      { title: 'Angielski', description: 'Płynny' },
      { title: 'Niemiecki', description: 'Początkujący' }
    ],
    certificates: [
      { title: 'Certyfikat CAE', description: 'Poziom C1' },
      { title: 'Prawo jazdy', description: 'Kategoria B' }
    ],
  },

  experiences: [
    {
      startDate: '02/2018',
      endDate: '08/2018',
      title: 'Beside The Park',
      position: 'Front-end developer',
      description: `Brałem udział w realizacji projektu front-endu dużego CRMa. Byłem głównie odpowiedzialny za łączenie aplikacji z API (Ruby on Rails), pisanie widoków i rozwijanie funkcjonalności strony.`,
      technologies: `JavaScript, React.js, Apollo GraphQL`
    },
    {
      startDate: '03/2017',
      endDate: 'Teraz',
      title: 'Freelancer',
      position: 'Software Developer',
      description: `Aktualnie pracuję dla fundacji "Narodowy Instytut Studiów Strategicznych" nad aplikacją webową o funkcjonalności portfela dla kryptowaluty "NaviCoin".`,
      technologies: `Wszystkie, które opisałem i więcej (np. Pascal)`
    }
  ],

  universities: [
    {
      startDate: '09/2017',
      endDate: 'Teraz',
      title: 'Politechnika Warszawska',
      course: 'Programowanie Stosowane'
    },
  ],
/*
  secondary: {
    startDate: '09/2011',
    endDate: '07/2014',
    title: 'European School of Frankfurt',
    ac: 'Matematyka, Fizyka',
    avg: '80%',
    diploma: 'European Baccalaureate'
  },
*/

  projects: [
    {
      image: litImg,
      link: 'https://lostintown.org',
      title: 'Lost in Town',
      description: `Aby szybko nauczyć się React.js, napisałem detektywistyczną grę przeglądarkową. Serdecznie zapraszam!`,
      technologies: `JavaScript, React.js, Semantic, Nginx, DigitalOcean, Redux`
    },
    {
      image: turboExcell,
      link: 'GitHub',
      title: 'Category Matcher',
      description: `Program do przydzielania kategorii do produktów.`,
      technologies: 'Python, Regex, Tkinter'
    },
    {
      image: yokoImg,
      link: `GitHub`,
      title: 'Yoko Hama',
      description: `Prosta gra zręcznościowa.`,
      technologies: `JavaScript`
    }
  ]
}
