import CvPhoto from "../../assets/projects/cvproject.png";
import WeatherPhoto from "../../assets/projects/weather-app.png";
import CalculatorPhoto from "../../assets/projects/calculator.png";
import KalakaveriPhoto from "../../assets/projects/kalakaveri.png";
import PortfolioV2Photo from "../../assets/projects/portfoliov2.png";
import PortfolioV1Photo from "../../assets/projects/portfoliov1.png";
import JoniOSPhoto from "../../assets/projects/jonios.png";
import BikeAppPhoto from "../../assets/projects/bikeApp.png";
import HeightAppPhoto from "../../assets/projects/heightApp.png";
import SignUpPhoto from "../../assets/projects/signupForm.png";
import TicTacToePhoto from "../../assets/projects/tictactoe.png";
import ScetchPhoto from "../../assets/projects/scetch.png";
import TombPhoto from "../../assets/projects/tomb.png";
import LandingPhoto from "../../assets/projects/landingPage.png";

interface Project {
  title: string;
  date: string;
  description: string;
  techs: string[];
  githubLink: string;
}

// Export photos to use them as props later on
export const ongoingPhotos = [
  JoniOSPhoto,
  BikeAppPhoto,
  PortfolioV2Photo,
  KalakaveriPhoto,
];
export const pastPhotos = [
  PortfolioV1Photo,
  CvPhoto,
  WeatherPhoto,
  CalculatorPhoto,
  HeightAppPhoto,
  SignUpPhoto,
  TicTacToePhoto,
  ScetchPhoto,
  TombPhoto,
  LandingPhoto,
];

export const ongoingProjects: Project[] = [
  {
    title: "JoniOS",
    date: "03/2023",
    description:
      "Website that mimics the look of an oldschool operating system",
    techs: ["React", "TypeScript", "NodeJS", "MongoDB"],
    githubLink: "https://github.com/JLaat/JoniOS",
  },
  {
    title: "Bike App",
    date: "03/2023",
    description: "Application for observing and importing city bike data.",
    techs: ["React", "TypeScript", "Spring Boot", "MongoDB"],
    githubLink:
      "https://github.com/JLaat/bike_app/tree/backend/src/main/java/com/jlaat/bike_back",
  },
  {
    title: "PortfolioV2",
    date: "03/2023",
    description: "New portfolio I started to create with React and TypeScript",
    techs: ["React", "TypeScript"],
    githubLink: "https://github.com/JLaat/portfoliov2",
  },
  {
    title: "Kalakaveri",
    date: "01/2023",
    description: "Fishing application made for personal and learning purposes",
    techs: ["Angular", "TypeScript", "Spring Boot"],
    githubLink: "https://github.com/JLaat/kalakaveri-spring-boot",
  },
];

export const pastProjects: Project[] = [
  {
    title: "PortfolioV1",
    date: "12/2022",
    description: "First portfolio made with React and TypeScript",
    techs: ["React", "TypeScript"],
    githubLink: "https://github.com/JLaat/portfolio",
  },
  {
    title: "CV Maker",
    date: "11/2022",
    description: "Application for making resume by using a ready template.",
    techs: ["React", "TypeScript"],
    githubLink: "https://github.com/JLaat/cv-project",
  },
  {
    title: "Weather App",
    date: "07/2022",
    description: "Application for checking weather in different cities",
    techs: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/JLaat/weather-app",
  },
  {
    title: "Calculator",
    date: "01/2021",
    description: "Simple calculator made with JavaScript",
    techs: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/JLaat/Calculator",
  },
  {
    title: "Height App",
    date: "08/2022",
    description:
      "Application for calculating height of object using mobile phone camera",
    techs: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/JLaat/HeightApp",
  },
  {
    title: "Sign Up Form",
    date: "04/2022",
    description: "Sign up form made with HTML and CSS",
    techs: ["HTML", "CSS"],
    githubLink: "https://github.com/JLaat/sign-up-form",
  },
  {
    title: "Tic Tac Toe",
    date: "04/2022",
    description: "Tic Tac Toe game made with JavaScript",
    techs: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/JLaat/tic-tac-toe",
  },
  {
    title: "Etch a Sketch",
    date: "01/2022",
    description: "Etch a Sketch game made with JavaScript",
    techs: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/JLaat/etch-a-scetch",
  },
  {
    title: "Tomb of Pharaoh",
    date: "01/2022",
    description: "Symbol guessing game made with JavaScript",
    techs: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/JLaat/TombOfPharaoh",
  },
  {
    title: "Landing Page",
    date: "11/2021",
    description: "Landing page made with HTML and CSS. First website I made.",
    techs: ["HTML", "CSS"],
    githubLink: "https://github.com/JLaat/landing-page",
  },
];

export {};
