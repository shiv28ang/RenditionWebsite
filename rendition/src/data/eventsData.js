import rangshalaImage from '../assets/img7.jpg';
import monoactImage from '../assets/img8.jpg'
import mimeImage from '../assets/img9.jpg'
import { faMasksTheater, faVideoCamera,faFaceLaughBeam} from '@fortawesome/free-solid-svg-icons';

export const eventsData = [
  {
    image:( <img src={rangshalaImage} alt="image" width="300" height="300" loading='lazy'/>),
    heading: "Rangshaala",
    key:1,
    details:"Rangshala, our college’s esteemed cultural fest, is a grand celebration of stage plays that brings together the finest theatrical talents from across the campus. This vibrant event not only showcases the acting and directorial prowess of our students but also emphasizes the crucial behind-the-scenes elements that bring each performance to life.",
    icon: faMasksTheater,  
  },
   
    
  {
    image:( <img src={monoactImage} alt="image" width="300" height="400" loading='lazy' />),
    heading: "Paddhati",
    key:2,
    details:"Paddhati is a form of solo theatrical performance where a single actor portrays all characters and elements of a dramatic piece. This genre challenges the performer to seamlessly transition between diverse roles, convey a wide range of emotions, and maintain strong stage presence, all without any support from other actors.",
    icon: faVideoCamera,
    
  },
    
  {
    image:( <img src={mimeImage} alt="Backstage Fun" width="300" height="400" loading='lazy' />),
    heading: "Mukhauta",
    key:3,
    details:"Mukhauta is a theatrical performance where actors use body movements, facial expressions, and gestures to convey a story or emotions without spoken dialogue. This form of performance emphasizes physical expression and non-verbal communication, requiring the performers to skillfully portray characters and narratives solely through movement and expression.",
    icon: faFaceLaughBeam,  
  },

];


