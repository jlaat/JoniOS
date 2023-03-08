import CvPhoto from "../../assets/projects/cvproject.png";
import WeatherPhoto from "../../assets/projects/weather-app.png";
import CalculatorPhoto from "../../assets/projects/calculator.png";
import KalakaveriPhoto from "../../assets/projects/kalakaveri.png";
import PortfolioV2Photo from "../../assets/projects/portfoliov2.png";
import PortfolioV1Photo from "../../assets/projects/portfoliov1.png";
import JoniOSPhoto from "../../assets/projects/jonios.png";

interface Project {
  title: string;
  date: string;
  description: string;
  techs: string[];
  githubLink: string;
}

// Export photos to use them as props later on
export const ongoingPhotos = [JoniOSPhoto, PortfolioV2Photo, KalakaveriPhoto];
export const pastPhotos = [
  PortfolioV1Photo,
  CvPhoto,
  WeatherPhoto,
  CalculatorPhoto,
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
    title: "PortfolioV2",
    date: "03/2023",
    description: "New portfolio made with React and TypeScript",
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
    description: "Calculator made with JavaScript",
    techs: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/JLaat/Calculator",
  },
];

export {};
