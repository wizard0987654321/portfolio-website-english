import { useOutletContext } from "react-router-dom";
import SkillBar from "./SkillBar.jsx";
import htmlIcon from "../assets/htmlIcon.svg";
import cssIcon from "../assets/cssIcon.svg";
import jsIcon from "../assets/javascriptIcon.svg";
import reactIcon from "../assets/reactIcon.svg";
import sqlIcon from "../assets/sqlIcon.svg";
import javaIcon from "../assets/javaIcon.svg";
import kotlinIcon from "../assets/kotlinIcon.svg";
import figmaIcon from "../assets/figmaIcon.svg";
import phpIcon from "../assets/phpIcon.svg";
import pythonIcon from "../assets/pythonIcon.svg";
import AnimatedWord from "./AnimatedWord.jsx";

const mySkills = [
  { name: "HTML", level: "very good", icon: htmlIcon },
  { name: "CSS", level: "very good", icon: cssIcon },
  { name: "JavaScript", level: "very good", icon: jsIcon },
  { name: "React", level: "very good", icon: reactIcon },
  { name: "SQL", level: "good", icon: sqlIcon },
  { name: "Java", level: "very good", icon: javaIcon },
  { name: "Kotlin", level: "good", icon: kotlinIcon },
  { name: "Figma", level: "good", icon: figmaIcon },
  { name: "PHP", level: "medium", icon: phpIcon },
  { name: "Python", level: "medium", icon: pythonIcon }
];

export default function Skills() {
  const { isDarkMode } = useOutletContext();
  
  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <AnimatedWord text="Skills" isDarkMode={isDarkMode} />
      {mySkills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} level={skill.level} icon={skill.icon} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
}