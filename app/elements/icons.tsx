import React from "react";
import LogoLoop from "../elements/logoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiC,
  SiKotlin,
  SiOracle,
  SiMysql,
  SiAngular,
  SiPhp,
  SiPython,
  SiFirebase,
  SiGit,
  SiBootstrap,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiHtml5 color="#E34F26" size={50} />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiCss3 color="#1572B6" size={50} />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiJavascript color="#F7DF1E" size={50} />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiBootstrap color="#7952B3" size={50} />,
    title: "Bootstrap",
    href: "https://getbootstrap.com",
  },
  {
    node: <SiTailwindcss color="#06B6D4" size={50} />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiReact color="#61DAFB" size={50} />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiAngular color="#DD0031" size={50} />,
    title: "Angular",
    href: "https://angular.io",
  },
  {
    node: <SiC color="#A8B9CC" size={50} />,
    title: "C Programming Language",
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    node: <SiPhp color="#777BB4" size={50} />,
    title: "PHP",
    href: "https://www.php.net",
  },
  {
    node: <SiNodedotjs color="#339933" size={50} />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiPython color="#3776AB" size={50} />,
    title: "Python",
    href: "https://www.python.org",
  },
  {
    node: <SiNextdotjs color="#000000" size={50} />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript color="#3178C6" size={50} />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiKotlin color="#0095D5" size={50} />,
    title: "Kotlin",
    href: "https://kotlinlang.org",
  },
  {
    node: <SiOracle color="#F80000" size={50} />,
    title: "Oracle Database",
    href: "https://www.oracle.com/database/",
  },
  {
    node: <SiMysql color="#4479A1" size={50} />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },
  {
    node: <SiFirebase color="#FFCA28" size={50} />,
    title: "Firebase",
    href: "https://firebase.google.com",
  },
  {
    node: <SiGit color="#F05032" size={50} />,
    title: "Git",
    href: "https://git-scm.com",
  },
];

const Icons = () => {
  return (
    <div className="max-w-6xl mx-auto h-full">
      <LogoLoop
        logos={techLogos}
        speed={70}
        direction="right"
        logoHeight={70}
        gap={70}
        pauseOnHover
        scaleOnHover
        showLabel
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
};

export default Icons;
