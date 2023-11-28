function calculateAge(birthDate) {
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  let age = currentYear - birthYear;

  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }
  return age;
}

const birthDate = new Date(1993, 10, 4); // Замените значениями вашей даты рождения (год, месяц - 1, день)
const myAge = calculateAge(birthDate);


const dictionary = {
  ru: {
    name: 'Ирина Вихрова',
    position: 'Frontend разработчик',
    cv: 'Скачать резюме',
    portfolio: 'Портфолио',
    about: 'Обо мне',
    loadMore: 'Показать ещё',
    endOfList: 'На этом пока всё :)',
    aboutDesc: `Привет! Мне ${myAge}. Работаю фронтенд разработчиком в Optimal Group удаленно и много путешествую.`,
    present: 'Сейчас',
    jobDesc: '',
    workExp: 'Опыт работы',
    workPosition1: 'Frontend разработчик',
    workDesс1: 'Занимаюсь вёрсткой, делаю анимации на pcss',
    employer1: 'Optimal Group, Москва',
    educationTitle: 'Обучение',
    education:
      [{
        place: 'СПБГУТ им. Бонч-Бруевича',
        dates: '2011 - 2015',
        course: 'Инфокоммуникационные технологии'
      },
        {
          place: 'HTML-академия',
          dates: '2022',
          course: 'Профессиональная вёрстка сайтов'
        },
        {
          place: 'Udemy',
          dates: '2022 - 2023',
          course: 'JavaScript'
        },
        {
          place: 'Udemy',
          dates: '2022 - 2023',
          course: 'React JS- с нуля до про'
        }],
    hardSkills: [
      { name: 'HTML5',
        img: '../../src/assets/hard/html.png',
        tags: '',
        bgColor: 'darkorange',
      },
      { name: 'PUG',
        img: '../../src/assets/hard/pug.png',
        tags: '',
        bgColor: 'white',
      },
      { name: 'CSS3',
        img: '../../src/assets/hard/pcss.png',
        tags: '',
        bgColor: '#35a8db'
      },
      { name: 'POSTCSS',
        img: '../../src/assets/hard/pcss.png',
        tags: '',
        bgColor: 'black'
      },
      { name: 'Sass',
        img: '../../src/assets/hard/sass.png',
        tags: '',
        bgColor: 'white'
      },
      { name: 'Vanila JS',
        img: '../../src/assets/hard/js.png',
        tags: '',
        bgColor: '#f0db4f'
      },
      { name: 'REACT JS',
        img: '../../src/assets/hard/react.png',
        tags: '',
        bgColor: 'black'
      },
      { name: 'GIT',
        img: '../../src/assets/hard/git.png',
        tags: '',
        bgColor: 'white'
      },
      { name: 'WEBPACK',
        img: '../../src/assets/hard/wp.png',
        tags: '',
        bgColor: 'white'
      },
      { name: 'VITE',
        img: '../../src/assets/hard/vite.png',
        tags: '',
        bgColor: 'white'
      },
      { name: 'Figma',
        img: '../../src/assets/hard/figma.png',
        tags: '',
        bgColor: 'white'
      }],
    softSkills: ['Быстро учусь', 'Вежливая и вникающая', 'Организованная', 'Командный игрок', 'На меня можно положиться']
  },
  en: {
    name: 'Irina Vikhrova',
    position: 'Frontend Developer',
    cv: 'Download CV',
    portfolio: 'Portfolio',
    about: 'About Me',
    loadMore: 'Load More',
    endOfList: 'That\'s all for now :)',
    aboutDesc: ` Hi there! I'm ${myAge} and I'm front-end development. Work remotely at the OptimalGroup web-studio. Do sites with HTML, CSS, JS. Studying ReactJS.`,
    present: 'Present',
    jobDesc: '',
    workExp: 'Work Experience',
    workPosition1: 'Frontend Developer',
    workDesс1: 'My work involves crafting user interfaces using HTML, CSS, Vanilla JS. Like creating small animations on pcss',
    employer1: 'Optimal Group, Moscow',
    educationTitle: 'Education',
    education: [
      {
        place: 'Bonch-Bruevich SSUT',
        dates: '2011 - 2015',
        course: 'IT & Telecommunications'
      },
      {
        place: 'HTML Academy',
        dates: '2022',
        course: 'Professional Website Layout'
      },
      {
        place: 'Udemy',
        dates: '2022 - 2023',
        course: 'JavaScript Fundamentals'
      },
      {
        place: 'Udemy',
        dates: '2022 - 2023',
        course: 'React - Complete Guide'
      }],
    hardSkills: [
      { name: 'HTML5',
        img: '../../src/assets/hard/html.png',
        tags: '',
        bgColor: 'darkorange',
      },
      { name: 'PUG',
        img: '../../src/assets/hard/pug.png',
        tags: '',
        bgColor: 'white',
      },
      { name: 'CSS3',
        img: '../../src/assets/hard/pcss.png',
        tags: '',
        bgColor: '#35a8db'
      },
      { name: 'POSTCSS',
        img: '../../src/assets/hard/pcss.png',
        tags: '',
        bgColor: 'black'
      },
      { name: 'Sass',
        img: '../../src/assets/hard/sass.png',
        tags: '',
        bgColor: 'white'
      },
      { name: 'Vanila JS',
        img: '../../src/assets/hard/js.png',
        tags: '',
        bgColor: '#f0db4f'
      },
      { name: 'REACT JS',
        img: '../../src/assets/hard/react.png',
        tags: '',
        bgColor: 'black'
      },
      { name: 'GIT',
        img: '../../src/assets/hard/git.png',
        tags: '',
        bgColor: 'white'
      },
      { name: 'WEBPACK',
        img: '../../src/assets/hard/wp.png',
        tags: '',
        bgColor: 'white'
      },
      { name: 'VITE',
        img: '../../src/assets/hard/vite.png',
        tags: '',
        bgColor: 'white'
      },
      { name: 'Figma',
        img: '../../src/assets/hard/figma.png',
        tags: '',
        bgColor: 'white'
      }],
    softSkills: ['Fast Learning', 'Empathy', 'Time management', 'Team work', 'Responsibility'],

  }
}

export default dictionary;