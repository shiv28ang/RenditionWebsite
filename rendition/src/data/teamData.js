import teamImage1 from '../assets/t-img1.jpg'
import teamImage2 from '../assets/t-img2.jpg'
import teamImage3 from '../assets/t-img3.jpg'
import teamImage4 from '../assets/t-img4.jpg'
import teamImage5 from '../assets/t-img5.jpg'
import teamImage6 from '../assets/t-img6.jpg'
import teamImage7 from '../assets/t-img7.jpg'
import teamImage8 from '../assets/t-img8.jpg'

import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const teamData = [
    {
        image:( <img src={teamImage1} alt="image" width="200" height="200" loading='lazy'/>),
        heading: "Aanchal Jain",
        key:1,
        icon:<FontAwesomeIcon icon={faInstagram}/> , 
        icon2:<FontAwesomeIcon icon={faGithub}/>,
        icon3:<FontAwesomeIcon icon={faLinkedin}/>, 
    },
    {
        image:( <img src={teamImage3} alt="image" width="200" height="200" loading='lazy'/>),
        heading: "Shivang Chauhan",
        key:2,
        icon:<FontAwesomeIcon icon={faInstagram}/> , 
        icon2:<FontAwesomeIcon icon={faGithub}/>,
        icon3:<FontAwesomeIcon icon={faLinkedin}/>, 
    },
    {
        image:( <img src={teamImage2} alt="image" width="200" height="200" loading='lazy'/>),
        heading: "Ananya Khadria",
        key:3,
        icon:<FontAwesomeIcon icon={faInstagram}/> , 
        icon2:<FontAwesomeIcon icon={faGithub}/>,
        icon3:<FontAwesomeIcon icon={faLinkedin}/>, 
    },
];

export const teamData2 = [
    {
        image:( <img src={teamImage4} alt="image" width="200" height="200" loading='lazy'/>),
        heading: "Mohit Soni",
        key:1,
        icon:<FontAwesomeIcon icon={faInstagram}/> , 
        icon2:<FontAwesomeIcon icon={faGithub}/>,
        icon3:<FontAwesomeIcon icon={faLinkedin}/>, 
    },
    {
        image:( <img src={teamImage5} alt="image" width="200" height="200" loading='lazy'/>),
        heading: "Maitreyee Kulkarni",
        key:2,
        icon:<FontAwesomeIcon icon={faInstagram}/> , 
        icon2:<FontAwesomeIcon icon={faGithub}/>,
        icon3:<FontAwesomeIcon icon={faLinkedin}/>, 
    },
    {
        image:( <img src={teamImage6} alt="image" width="200" height="200" loading='lazy'/>),
        heading: "Sanyam Munot",
        key:3,
        icon:<FontAwesomeIcon icon={faInstagram}/> , 
        icon2:<FontAwesomeIcon icon={faGithub}/>,
        icon3:<FontAwesomeIcon icon={faLinkedin}/>, 
    },
];


export const teamData3 = [
    {
        image:( <img src={teamImage7} alt="image" width="200" height="200" loading='lazy'/>),
        heading: "Pratyush Srivastava",
        key:1,
        icon:<FontAwesomeIcon icon={faInstagram}/> , 
        icon2:<FontAwesomeIcon icon={faGithub}/>,
        icon3:<FontAwesomeIcon icon={faLinkedin}/>, 
    },
    {
        image:( <img src={teamImage8} alt="image" width="200" height="200" loading='lazy'/>),
        heading: "Anukriti Shrivastava",
        key:2,
        icon:<FontAwesomeIcon icon={faInstagram}/> , 
        icon2:<FontAwesomeIcon icon={faGithub}/>,
        icon3:<FontAwesomeIcon icon={faLinkedin}/>, 
    },
];

