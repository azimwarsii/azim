// projectsData.js
import indiancarpool from '/src/assets/images/indiancarpool-desktop.webp';
import delemate from '/src/assets/images/delemate-desktop.webp';
import acc from '/src/assets/images/acc-square.webp';
import resume from '/src/assets/images/resume-desktop.webp';
import sunnyside from '/src/assets/images/sunny-side-square.webp';

const projectsData = [
  {
    title: 'App with ML model',
    description: 'ML model that detects fish disease and species',
    imageSrc: sunnyside,
    link: 'https://www.youtube.com/watch?v=ImCkcmlosjk'
  },
  {
    title: 'Courier with realtime updates',
    description: 'Full-Stack Web & App Development',
    imageSrc: delemate,
    link: 'https://delemate.com/'
  },
  {
    title: 'Forms using blockchain',
    description: 'Design & Full-Stack Development',
    imageSrc: acc,
    link: 'https://www.youtube.com/watch?v=N3H0mRFHo2E'
  },
  {
    title: 'Resume Maker',
    description: 'Full-Stack Development',
    imageSrc: resume,
    link: 'https://resume-maker-pi.vercel.app/'
  },
  {
    title: 'Ticket Booking Service',
    description: 'Full-Stack Development',
    imageSrc: indiancarpool,
    link: 'https://indian-carpool.vercel.app/'
  }
];

export default projectsData;