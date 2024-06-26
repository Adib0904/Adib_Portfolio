import project1 from "../assets/projects/news.png";
import project2 from "../assets/projects/user.png";
import project3 from "../assets/projects/robot.png";
import project4 from "../assets/projects/drum.png";

export const HERO_CONTENT = `I am a passionate Front End Developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies such as React.js, JavaScript, HTML, CSS, and frameworks like Bootstrap and Tailwind CSS. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences`;

export const ABOUT_TEXT = `


I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. I graduated with a Bachelor's degree in Computer Engineering from Pune University, Sinhgad Academy of Engineering, Kondhwa, with First Class with Distinction, achieving a SGPA of 9.10. I am skilled in React.js and other front-end technologies such as HTML, CSS, and JavaScript. My strengths include being self-motivated, a quick learner, and a great team player.

My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024 ",
    college: "Sinhgad Academy of Engineering",
    strem: "BE",
    description: `I hold a BE in Computer Engineering from Savitribai Phule Pune University (SPPU).`,
    grade: ["SGPA-9.10"],
  },
  {
    year: "2017- 2020",
    college: "Jaywantrao Sawant Polytechnic",
    strem: "Diploma",
    description: `Diploma in Mechanical Engineering from the Maharashtra State Board of Technical Education (MSBTE).`,
    grade: ["Grade - 91.95%"],
  },
  {
    year: "2016 - 2017",
    college: "S M Joshi Vidyalaya",
    strem: "10th",
    description: `I have completed my 10th from the Secondary School Certificate (SSC) Board.`,
    grade: ["Grade - 86%"],
  },

];

export const PROJECTS = [
  {
    title: "React News App",
    image: project1,
    description:
      "This news application, built with React and external news APIs, brings the world's headlines to your fingertips.Explore a vast selection of news articles categorized by country and topic, allowing you to stay informed on what matters to you.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    url: 'https://github.com/Adib0904/NewsApp'
  },
  {
    title: "User Card Component",
    image: project2,
    description:
      "The project is a user card component built using React.js, designed to display user data fetched from a dummy API.To access the user data, users must be logged in.Key features include routing with React Router, ensuring private routes are accessible only when logged in, fetching data from the API using Axios, managing state and side effects with useState and useEffect hooks, styling components with Material UI library, handling Axios POST requests for authentication, and implementing pagination for displaying user data efficiently.",
    technologies: ["HTML", "CSS", "React", "ContextApi", "Material UI"],
    url: 'https://frolicking-madeleine-17fb88.netlify.app/'
  },
  {
    title: "React Modal Component",
    image: project3,
    description:
      "The project is a React application that displays user information using card components fetched from an API. It incorporates a modal component from the Material UI library to show detailed user information when clicked, with a backdrop feature for a clean interface. Users can perform live searches to find specific users, enhancing the usability of the application. Key features include managing state and side effects with useState and useEffect hooks, fetching data from an API, integrating Material UI for UI components, and implementing a modal component for displaying detailed user information.",
    technologies: ["HTML", "CSS", "React", "Material UI"],
    url: 'https://lovely-jelly-1c9ce5.netlify.app/',
  },
  {
    title: "Drum kit",
    image: project4,
    description:
      "The Drum Kit project is built using HTML, CSS, and JavaScript, allowing users to play different drum sounds. Each drum instrument is represented by a button on the webpage. When clicked with the mouse or triggered using keyboard keys, these buttons produce corresponding drum sounds in real-time. Key features include adding event listeners to detect user interactions (mouse click or keyboard press) and implementing setTimeout to control the duration of sound playback, providing a realistic drumming experience. ",
    technologies: ["HTML", "CSS", "javaScript"],
    url: 'https://polite-brioche-d80c54.netlify.app/'
  },
];

export const CONTACT = {
  address: "Flat no-701 Vedant Pinakin, Pune, Maharashtra-421307.",
  phoneNo: "+91 84838 14560 ",
  email: "adibshaikh0904@gmail.com",
};
