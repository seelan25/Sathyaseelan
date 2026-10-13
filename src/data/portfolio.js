import {
  FaFacebookF,
  FaFilm,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRoute,
  FaUniversity,
} from "react-icons/fa";

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/pNaS3h4NHksGbud5/?mibextid=qi2Omg",
    Icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/itz_me._.seelan?igsh=MWF6MW9iMGtnYXJhMg==",
    Icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sathyaseelan-g-3b5414269",
    Icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/sathyaseelan25",
    Icon: FaGithub,
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#Education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const skills = [
  "Java",
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Bootstrap",
  "SQL",
  "Python",
  "Spring Boot",
  "Git",
];

export const projects = [
  {
    title: "CineVision",
    subtitle: "Online Movie Ticket Booking Platform",
    stack: "Java · Spring Boot · React · JWT",
    Icon: FaFilm,
    href: "https://movie-site-self-beta.vercel.app/",
    points: [
      "Built a microservices-based cinema ticket booking platform with Java and Spring Boot.",
      "Connected services with WebClient and secured the APIs using Spring Security and JWT.",
      "Created a responsive React frontend for booking and payment.",
    ],
  },
  {
    title: "Trip Planner",
    subtitle: "Day-wise Travel Itinerary Web App",
    stack: "HTML · CSS · JavaScript · Bootstrap",
    Icon: FaRoute,
    href: "https://seelan25.github.io/Travel/",
    points: [
      "Built a web app that creates day-wise travel plans from a user's inputs and budget.",
      "Designed a responsive interface with HTML, CSS, JavaScript, and Bootstrap.",
      "Added scheduling, cost estimation, and package generation.",
    ],
  },
  {
    title: "Bank Management System",
    subtitle: "Java Console Application",
    stack: "Java · OOP · Exception Handling",
    Icon: FaUniversity,
    points: [
      "Built a Java console app for account creation, deposits, withdrawals, and balance checks.",
      "Used object-oriented design so each part of the system stays modular.",
      "Added input validation, exception handling, and secure transaction logic.",
    ],
  },
];

export const contactEmail = "sathyaseelangandhi251004@gmail.com";
