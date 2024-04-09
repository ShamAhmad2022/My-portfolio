import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import corpcommentImg from "../public/corpcomment.png";
import rmtdevImg from "../public/rmtdev.png";
import wordanalyticsImg from "../public/wordanalytics.png";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const homeProjectsThumbnails = [
  {
    name: "Shat.1.0.1",
    thumbnail: "https://raw.githubusercontent.com/SHAT-2024/SHAT/main/src/Assets/homepage.png",
    url: "https://shat.netlify.app"
  },
  {
    name: "SamiGo1.2.0",
    thumbnail: "https://raw.githubusercontent.com/ShamAhmad2022/SamiGo/main/Assets/Screenshot1.png",
    url: "https://shamahmad2022.github.io/SamiGo"
  },
  {
    name: "FrontStore",
    thumbnail: "https://raw.githubusercontent.com/ShamAhmad2022/Online-store/main/src/images/Screenshot%202023-12-08%20193335.png",
    url: "https://idyllic-marzipan-c82c0e.netlify.app"
  },
  {
    name: "Users-Management-System",
    thumbnail: "https://raw.githubusercontent.com/ShamAhmad2022/Users-Management-System/main/images/Screenshot%202023-12-11%20153823.png",
    url: "https://github.com/ShamAhmad2022/Users-Management-System"
  }
];

export const filterTags = ["all", "ReactJs", "NextJs", "game", "NodeJs", "PostgresQl"];

export const projectsPageProjects = [
  {
    name: "Shat.1.0.1",
    date: "Feb 2024",
    desciption: 'Shat is a web-based app that allows users to connect, chat, and edit their profiles.',
    details: "<img src='https://github.com/SHAT-2024/SHAT/raw/main/src/Assets/shat-logo.png' alt='logo' width='100'><h2 class='mb-3 text-xl font-bold'>Features:</h2><li>Users can create an account</li><li>Users can edit their profile information</li><li>Users can search for other users</li><li>Users can view other users information</li><li>Users can chat with each other</li><li>Users can delete conversations</li><li>Users can edit any sent message in a conversation</li><li>Users can delete any sent message in a conversation</li><li>Real time chatting</li><li>Typing indicator</li><h3 class='mb-3 mt-8 text-xl font-bold'>coming Features:</h3><li>sending media and voice records</li><li>deleting other users messages in a conversation</li><li>notification when receiving a new message</li><li>message read indicators</li><li>new and unread messages badge</li><li>voice and video calls</li><li>group chats</li><li>block users</li><li>adding a chat bot</li>",
    tags:["ReactJs", "NodeJs", "ExpressJs", "PostgresQl", "personal"],
    notes:[],
    thumbnail: "https://raw.githubusercontent.com/SHAT-2024/SHAT/main/src/Assets/homepage.png",
    liveUrl: "https://shat.netlify.app",
    GithubUrl: "https://github.com/SHAT-2024/SHAT",
    videoUrl: "https://drive.google.com/file/d/1koQDwlB4SsuY25M5MPPvi76-0GQTntI4/view",
    images: ["https://raw.githubusercontent.com/SHAT-2024/SHAT/main/src/Assets/homepage.png", "https://raw.githubusercontent.com/SHAT-2024/SHAT/main/src/Assets/home%20page%202.png", "https://raw.githubusercontent.com/SHAT-2024/SHAT/main/src/Assets/search%20page.png", "https://raw.githubusercontent.com/SHAT-2024/SHAT/main/src/Assets/chat%20page.png", "https://raw.githubusercontent.com/SHAT-2024/SHAT/main/src/Assets/profile%20page.png", "https://raw.githubusercontent.com/SHAT-2024/SHAT/main/src/Assets/edit%20profile.png", "https://raw.githubusercontent.com/SHAT-2024/SHAT/main/src/Assets/Mhome.jpg", "https://raw.githubusercontent.com/SHAT-2024/SHAT/main/src/Assets/Mhome2.jpg", "https://raw.githubusercontent.com/SHAT-2024/SHAT/main/src/Assets/Mseaerch.jpg", "https://raw.githubusercontent.com/SHAT-2024/SHAT/main/src/Assets/Mchat1.jpg", "https://raw.githubusercontent.com/SHAT-2024/SHAT/main/src/Assets/Mchat2.jpg", "https://raw.githubusercontent.com/SHAT-2024/SHAT/main/src/Assets/Mprofile.jpg", "https://raw.githubusercontent.com/SHAT-2024/SHAT/main/src/Assets/Mprofiledit.jpg"]
  },
  {
    name: "SamiGo.1.2.0",
    date: "Nov 2024",
    desciption: 'A simple 2D game where your goal is to help Sami collect enough amount of coffee cups so he can stay focus, but if you ran into any errors or bugs you\'ll lose.',
    details: "<img src='https://github.com/ShamAhmad2022/SamiGo/raw/main/Assets/samigomk.png' alt='logo'><h2>How to play</h2><p>- After opening the link, press on 'Play' button to play the game.</p><br><p>- You must collect enough amount of coffee cups, there is 2 main types of coffee cups to collect:</p><br><div class='flex flex-row justify-center' align='center'><img src='https://github.com/ShamAhmad2022/SamiGo/raw/main/Assets/Bigcoffeemd.png' alt='big coffe cup' width='200'><img src='https://github.com/ShamAhmad2022/SamiGo/raw/main/Assets/Smallcoffeemd.png' alt='small coffee cup'width='200'></div><br><br><br><p>- Be careful to not run into any errors or bugs:</p><br><div class='flex flex-row justify-center' align='center'><img src='https://github.com/ShamAhmad2022/SamiGo/raw/main/Assets/error1.png' alt='error' width='100'><img src='https://github.com/ShamAhmad2022/SamiGo/raw/main/Assets/error2.png' alt='error'width='100'><img src='https://github.com/ShamAhmad2022/SamiGo/raw/main/Assets/error3.png' alt='error'width='100'><img src='https://github.com/ShamAhmad2022/SamiGo/raw/main/Assets/error4.png' alt='error'width='100'></div><br><br><br><p>Enjoy ^-^</p>",
    tags:["HTML", "JavaScript", "CSS", "game", "personal", "HTML Canvas"],
    notes:["I built this game using plain HTML, CSS and JS.", "As a digital artist, i was responsible for drawing most of the assets and backgrounds in the website. of course I thought abouusing assets from the internet, but nothing matched my style or what was in my mind, so it's a good thing to be both an artist and programmer :)", "I still have so many thoughts to add to the game, so I'll keep working on it and add new features, such as selecting differencharacters and add some challenges."],
    thumbnail: "https://raw.githubusercontent.com/ShamAhmad2022/SamiGo/main/Assets/Screenshot1.png",
    liveUrl: "https://shamahmad2022.github.io/SamiGo",
    GithubUrl: "https://github.com/ShamAhmad2022/SamiGo",
    videoUrl: "https://drive.google.com/file/d/1YpN-74IL_-I6WrQfe0_EL9M4ysCHRgk8/view",
    images: ["https://github.com/ShamAhmad2022/SamiGo/raw/main/Assets/Screenshot1.png", "https://github.com/ShamAhmad2022/SamiGo/raw/main/Assets/tutorialsc.png", "https://github.com/ShamAhmad2022/SamiGo/raw/main/Assets/aboutsc.png", "https://github.com/ShamAhmad2022/SamiGo/raw/main/Assets/Screenshot2.png", "https://github.com/ShamAhmad2022/SamiGo/raw/main/Assets/gameoversc.png", "https://github.com/ShamAhmad2022/SamiGo/raw/main/Assets/victorysc.png"]
  }, {
    name: "FrontStore",
    date: "Sep 2023",
    desciption: 'React Web application that power an online storefront that will allow the users to browse products offerings by category, place items in their shopping cart, and check-out when they are ready to make their purchase. I used Redux to manage the state in this project.',
    details: "",
    tags:["ReactJs", "Redux", "Bootstrap", "CSS", "personal"],
    notes:[],
    thumbnail: "https://raw.githubusercontent.com/ShamAhmad2022/Online-store/main/src/images/Screenshot%202023-12-08%20193335.png",
    liveUrl: "https://idyllic-marzipan-c82c0e.netlify.app",
    GithubUrl: "https://github.com/ShamAhmad2022/Online-store",
    videoUrl: '',
    images: ["https://github.com/ShamAhmad2022/Online-store/raw/main/src/images/Screenshot%202023-12-08%20193335.png" ,"https://github.com/ShamAhmad2022/Online-store/raw/main/src/images/Screenshot%202023-12-08%20193723.png"]
  },{
    name: "NoteApplication",
    date: "Sep 2022",
    desciption: 'A ReactJs app to create notes and handle them. it contains the following features: add note, delete note, add a Title to the note, view the detail of the note, edit the title and the note, Toggle Layout button to toggle between the notes layout(Grid or flex), and the edited note will show at first, dark mode.',
    details: "",
    tags:["ReactJs", "Bootstrap", "CSS", "personal"],
    notes:[],
    thumbnail: "https://raw.githubusercontent.com/ShamAhmad2022/Notes-application/main/images/Screenshot%202023-12-11%20140012.png",
    liveUrl: "",
    GithubUrl: "https://github.com/ShamAhmad2022/Notes-application",
    videoUrl: '',
    images: ["https://github.com/ShamAhmad2022/Notes-application/raw/main/images/Screenshot%202023-12-11%20140012.png", "https://github.com/ShamAhmad2022/Notes-application/raw/main/images/Screenshot%202023-12-11%20140034.png"]
  }, {
    name: "Users-Management-System",
    date: "Sep 2022",
    desciption: 'A ReactJs app to handle users. it contains the following features: add users, delete users, update users, get a list of users, view each user details.',
    details: "",
    tags:["ReactJs", "Bootstrap", "CSS", "personal"],
    notes:[],
    thumbnail: "https://raw.githubusercontent.com/ShamAhmad2022/Users-Management-System/main/images/Screenshot%202023-12-11%20153823.png",
    liveUrl: "",
    GithubUrl: "https://github.com/ShamAhmad2022/Users-Management-System",
    videoUrl: "",
    images: ["https://github.com/ShamAhmad2022/Users-Management-System/raw/main/images/Screenshot%202023-12-11%20153823.png"]
  }, 
  {
    name: "TodoApp",
    date: "Sep 2023",
    desciption: 'A Web Application for securely managing a To Do List. The users can register then log in to the system, The users can add to their to-do list and toggle the completeness of each one after that, the users then can change the settings by update the display of the completed tasks, the settings of the number of page to display, and the sort keyword. Users can do tasks based on their roles. I used reducers and context API to manage the project state and local storage to save to the to-do list.',
    details: "",
    tags:["ReactJs", "Bootstrap", "CSS", "personal"],
    notes:["here are some users you can try to log in with:", "an Admin user that has all the capabilities: username: sham, password: s123", "an regular user that has only the read capability: username: Liam, password: s123"],
    thumbnail: "https://raw.githubusercontent.com/ShamAhmad2022/Todo-app/main/images/Screenshot%202023-12-10%20180046.png",
    liveUrl: "",
    GithubUrl: "https://github.com/ShamAhmad2022/Todo-app",
    videoUrl: '',
    images: ["https://github.com/ShamAhmad2022/Todo-app/raw/main/images/Screenshot%202023-12-10%20175724.png", "https://github.com/ShamAhmad2022/Todo-app/raw/main/images/Screenshot%202023-12-10%20180046.png", "https://github.com/ShamAhmad2022/Todo-app/raw/main/images/Screenshot%202023-12-10%20180125.png"]
  }, {
    name: "Questions-Game",
    date: "Nov 2023",
    desciption: 'A simple game I made for a tenth-grade computer science project. In the game, a student spins a wheel to select a question, each of which is represented by a specific color. After the question is revealed, the student who spun the wheel listens to their classmates\' answers. They can then indicate whether the answer is true or false by clicking on the corresponding buttons. This process continues until all questions have been answered. Finally, upon completing all questions, a congratulatory message pops up.',
    details: "",
    tags:["HTML", "CSS", "JavaScript", "game", "personal"],
    notes:[],
    thumbnail: "https://github.com/ShamAhmad2022/Questions-game/raw/main/Assets/MG-landingpage.png",
    liveUrl: "https://shamahmad2022.github.io/Questions-game",
    GithubUrl: "https://github.com/ShamAhmad2022/Questions-game",
    videoUrl: 'https://drive.google.com/file/d/1-APD-OWzAnnjHxJ8vDJLVia2L31mO8rf/view',
    images: ["https://github.com/ShamAhmad2022/Questions-game/raw/main/Assets/MG-landingpage.png", "https://github.com/ShamAhmad2022/Questions-game/raw/main/Assets/gamepage.png", "https://github.com/ShamAhmad2022/Questions-game/raw/main/Assets/gameqtrue.png", "https://github.com/ShamAhmad2022/Questions-game/raw/main/Assets/gameqfalse.png", "https://github.com/ShamAhmad2022/Questions-game/raw/main/Assets/gamevictory.png"]
  }
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
];