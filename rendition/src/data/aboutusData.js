import scriptwritingImage from '../assets/script-writing.jpg';
import actingImage from '../assets/acting.jpg'
import backstageImage from '../assets/backstage.jpg'
export const aboutusData = [
  {
    image: (
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="30" width="140" height="140" rx="10" ry="10" fill="#ffffff" stroke="#cccccc" stroke-width="2"/>
    
      <g transform="translate(90, 80) rotate(-30)">
        <rect x="0" y="0" width="100" height="10" rx="5" ry="5" fill="#FFD700" stroke="#B8860B" stroke-width="2"/>
        <polygon points="100,0 110,5 100,10" fill="#B8860B"/>
        <polygon points="110,5 120,2 120,8" fill="#FFD700" stroke="#B8860B" stroke-width="1"/>
        <polygon points="120,2 125,5 120,8" fill="#ffffff"/>
        <polygon points="125,5 130,0 130,10" fill="#E5E5E5" stroke="#B8860B" stroke-width="1"/>
      </g>
    
      <line x1="60" y1="100" x2="160" y2="80" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
    
          <path d="M60 100 Q80 90, 100 100 T160 80" stroke="#000000" stroke-width="2" fill="none" stroke-linecap="round"/>
    
      <line x1="60" y1="120" x2="160" y2="100" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
      <line x1="60" y1="140" x2="160" y2="120" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
    </svg>
    ),
    heading: "Script Writing",
    details:
      "At the heart of every great performance is a captivating script. Our Script Writing team is dedicated to crafting original, compelling stories that engage audiences and bring characters to life. Whether you’re an experienced writer or just starting out, we offer workshops, collaborative sessions, and mentorship to help you hone your skills. Join us to explore the art of storytelling, develop your voice, and contribute to the creation of memorable theatrical productions.",
    image2:( <img src={scriptwritingImage} alt="Script Writing" width="400" height="300" loading='lazy'/>),
    },
  {
    image: <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="none"/>
  
    <rect x="30" y="60" width="140" height="100" rx="10" ry="10" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  
    <g transform="translate(30, 30)">
      <rect x="0" y="0" width="140" height="30" fill="#ffffff" stroke="#000000" stroke-width="3"/>
      <polygon points="0,0 35,0 0,30" fill="#000000"/>
      <polygon points="70,0 105,0 70,30" fill="#000000"/>
    </g>
  
    <line x1="30" y1="60" x2="170" y2="30" stroke="#000000" stroke-width="3" stroke-linecap="round"/>
  </svg>
  ,
    heading: "Drama Practice",
    details:
      "Step into the spotlight with our Acting & Drama team. Our actors are the soul of our performances, bringing scripts to life with emotion, energy, and authenticity. We offer acting workshops, rehearsals, and performance opportunities to help you develop your craft, whether you’re a seasoned performer or new to the stage. Learn techniques in voice, movement, improvisation, and character development, and experience the thrill of live theatre. Join us to express yourself, connect with fellow actors, and captivate audiences.",
      image2:( <img src={actingImage} alt="Drama Practice" width="400" height="300" loading='lazy' />),

    },
  {
    image: <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="none"/>
  
    <circle cx="100" cy="60" r="20" fill="#d9d9d9" stroke="#666" stroke-width="2"/>
    <rect x="80" y="80" width="40" height="60" fill="#d9d9d9" stroke="#666" stroke-width="2" rx="10" ry="10"/>
  
    <circle cx="50" cy="70" r="20" fill="#d9d9d9" stroke="#666" stroke-width="2"/>
    <rect x="30" y="90" width="40" height="60" fill="#d9d9d9" stroke="#666" stroke-width="2" rx="10" ry="10"/>
  
    <circle cx="150" cy="70" r="20" fill="#d9d9d9" stroke="#666" stroke-width="2"/>
    <rect x="130" y="90" width="40" height="60" fill="#d9d9d9" stroke="#666" stroke-width="2" rx="10" ry="10"/>
  
    <circle cx="25" cy="90" r="15" fill="#d9d9d9" stroke="#666" stroke-width="2"/>
    <rect x="10" y="105" width="30" height="45" fill="#d9d9d9" stroke="#666" stroke-width="2" rx="7.5" ry="7.5"/>
  
    <circle cx="175" cy="90" r="15" fill="#d9d9d9" stroke="#666" stroke-width="2"/>
    <rect x="160" y="105" width="30" height="45" fill="#d9d9d9" stroke="#666" stroke-width="2" rx="7.5" ry="7.5"/>
  </svg>,
    heading: "Backstage Fun",
    details:
      "Behind every seamless production is a dedicated Backstage Crew working tirelessly to ensure everything runs smoothly. From set design and construction to lighting, sound, and costumes, our backstage team handles all the technical and logistical aspects of our shows. If you’re passionate about the technical side of theatre or enjoy hands-on work, this is the place for you. Gain valuable experience in stage management, technical operations, and design, and be a crucial part of bringing our productions to life.",
      image2:( <img src={backstageImage} alt="Backstage Fun" width="400" height="300" loading='lazy' />),

    },
];


