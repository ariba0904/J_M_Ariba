import disaster from "../assets/images/disaster.png";
import portfolio from "../assets/images/portfolio.png";
import cloudwings from "../assets/images/cloudwings.png";
import hotel from "../assets/images/hotel.png";
import library from "../assets/images/library.png";
import cosmicOdyssey from "../assets/images/cosmic-odyssey.svg";

const projects = [
  {
    title: "Cosmic Odyssey — 3D Solar System & Milky Way Explorer",
    image: cosmicOdyssey,
    description:
      "An interactive space exploration experience featuring a 3D Solar System, Milky Way view, Black-Hole view & Object simulation, ISS, voice narration, satellite mission simulator, Learning Hub, Mission Spacecraft.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "Three.js", "Vite"],
    github: "https://github.com/ariba0904/Cosmic-Odyssey",
    live: "https://ariba0904.github.io/Cosmic-Odyssey/",
  },
  {
    title: "Disaster Relief & Resource Management System",
    image: disaster,
    description:
      "A role-based disaster management web application for victims, volunteers and administrators.",
    tech: ["PHP", "MySQL","XAMPP", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/ariba0904/Team-collaboration",
    live: "https://github.com/ariba0904/Team-collaboration",
  },

  {
    title: "Cloud Wings - Airline Reservation System",
    image: cloudwings,
    description:
      "Desktop Airline Reservation System developed using Qt Creator and C++.",
    tech: ["C++", "Qt Creator"],
    github: "https://github.com/ariba0904/Cloud-Wings",
    live: "https://ariba0904.github.io/Cloud-Wings/",
  },

  {
    title: "Personal Portfolio",
    image: portfolio,
    description:
      "Modern Portfolio Website built using HTML, CSS and Javascript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ariba0904/My-Portfolio",
    live: "https://ariba0904.github.io/My-Portfolio/",
  },

  {
    title: "Hotel Management System",
    image: hotel,
    description:
      "C++ based desktop application for hotel management.",
    tech: ["C++", "Codeblocks", "VS Code"],
    github: "https://github.com/ariba0904/Hotel-Management-System",
    live: "https://ariba0904.github.io/Hotel-Management-System/",
  },

  {
    title: "Library Management System",
    image: library,
    description:
      "Desktop application for library book and student management.",
    tech: ["C", "Codeblocks", "VS Code"],
    github: "https://github.com/ariba0904/Library-Management-System",
    live: "https://ariba0904.github.io/Library-Management-System/",
  },
];

export default projects;
