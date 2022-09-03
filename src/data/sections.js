import { FaDev, FaGamepad, FaInfoCircle, FaSignLanguage } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { MdPerson, MdSchool, MdWork } from "react-icons/md";
import { GoTools } from "react-icons/go";


const sections = [
  { id: "about-me", title: "About Me", icon: MdPerson },
  { id: "work", title: "Work", icon: MdWork },
  { id: "education", title: "Education", icon: MdSchool },
  { id: "skills", title: "Skills", icon: GoTools },
  { id: "projects", title: "Projects", icon: FaDev },
  { id: "gaming", title: "Gaming", icon: FaGamepad },
  { id: "languages", title: "Languages", icon: FaSignLanguage },
  { id: "resume", title: "Resume", icon: IoIosDocument },
  { id: "footer", title: "About SotW", icon: FaInfoCircle },
];

export default sections;
