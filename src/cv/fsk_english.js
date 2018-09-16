import litImg from '../assets/lit.png'

export default {

  layout: {
    bgColor: '#DDD',
    color1: '#EEE'
  },

  name: 'Filip Sas-Kulczycki',
  position: 'Software Developer',
  quote: 'Committed, reliable and short - just like my code.',

  phone: '+48 733 393 093',
  mail: 'filipsaskulczycki@gmail.com',
  street: 'Starościńska 4/6 m.3',
  city: 'Warszawa 02-516',
  github: 'https://github.com/pusiekwithgun',
  birthday: '04.08.1995',

  skills: {
    programmingLanguages: [
      { title: 'Javascript', value: 95 },
      { title: 'Python', value: 85 },
      { title: 'Java', value: 75 },
      { title: 'C++', value: 60 },
      { title: 'C#', value: 50 },
      { title: 'Bash', value: 50 },
      { title: 'Pascal', value: 25 }
    ],
    frameworks: [
      { title: 'React.js', value: 95 },
      { title: 'Redux', value: 75 },
      { title: 'React Native', value: 55 },
      { title: 'Socket.IO', value: 50 },
      { title: 'Angular', value: 25 }
    ],
    other: [
      { title: 'Semantic', value: 95 },
      { title: 'HTML5', value: 95 },
      { title: 'CSS', value: 85 },
      { title: 'Bootstrap', value: 75 },
      { title: 'MongoDB', value: 50 },
      { title: 'MySQL', value: 40 }
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
      { title: 'Polish', description: 'Fluent' },
      { title: 'English', description: 'Advanced' },
      { title: 'German', description: 'Beginner' }
    ],
    certificates: [
      { title: 'CAE certificate', description: 'Level C1' },
      { title: 'Driving license', description: 'Category B' }
    ],
  },

  experiences: [
    {
      startDate: '02/2018',
      endDate: '08/2018',
      title: 'Beside The Park',
      position: 'Front-end developer',
      description: `For the vast majority of time I was taking part in developing a large project of CRM - creating and styling components, as well as connecting them to API and fixing bugs.`,
      technologies: `I was mainly working with React.js, Apollo GraphQL and Formik. I also had to have sufficient understanding of Ruby on Rails to be able to work with Back-end developers.`
    }
  ],

  universities: [
    {
      startDate: '09/2017',
      endDate: 'Now',
      title: 'Warsaw University of Technology',
      course: 'Applied Programming'
    },
    {
      startDate: '09/2015',
      endDate: '02/2016',
      title: 'Strathclyde University, Glasgow',
      course: 'Mathematics & Physics'
    }
  ],

  secondary: {
    startDate: '09/2011',
    endDate: '07/2014',
    title: 'European School of Frankfurt',
    ac: 'Mathematics, Physics',
    avg: '80%',
    diploma: 'European Baccalaureate'
  },

  projects: [
    {
      image: litImg,
      link: 'https://lostintown.org',
      title: 'Lost in Town',
      description: `I've spent at least half a year developing this web-browser game. All the front-end is written in React, as I initially wrote it in order to master this framework. Under the following link you can see for yourself how the game looks at this early stage.`
    }
  ]
}
