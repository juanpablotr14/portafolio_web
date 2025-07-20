import { TECH } from "./tech-name";
import type { Technology, TechnologyHelper } from "../types/technology";

const logo_path = "/tech_logos";

export const technologies: TechnologyHelper = Object.freeze({
  [TECH.HTML]: {
    name: "HTML",
    logo_path: `${logo_path}/html.svg`,
    url: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  [TECH.CSS]: {
    name: "CSS",
    logo_path: `${logo_path}/css.svg`,
    url: "https://developer.mozilla.org/es/docs/Web/CSS",
  },
  [TECH.JS]: {
    name: "JavaScript",
    logo_path: `${logo_path}/js.svg`,
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  [TECH.TS]: {
    name: "TypeScript",
    logo_path: `${logo_path}/ts.svg`,
    url: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",
  },
  [TECH.REACT]: {
    name: "React",
    logo_path: `${logo_path}/react.svg`,
    url: "https://es.react.dev/",
  },
  [TECH.NEXT]: {
    name: "NextJS",
    logo_path: `${logo_path}/next.svg`,
    url: "https://nextjs.org/",
  },
  [TECH.NODE]: {
    name: "NodeJS",
    logo_path: `${logo_path}/node.svg`,
    url: "https://nodejs.org/en",
  },
  [TECH.EXPRESS]: {
    name: "Express",
    logo_path: `${logo_path}/express.svg`,
    url: "https://expressjs.com/",
  },
  [TECH.TAILWIND]: {
    name: "Tailwind CSS",
    logo_path: `${logo_path}/tailwind.svg`,
    url: "https://tailwindcss.com/",
  },
  [TECH.MATERIAL_UI]: {
    name: "Material UI",
    logo_path: `${logo_path}/material_ui.svg`,
    url: "https://mui.com/",
  },
  [TECH.VITE]: {
    name: "Vite",
    logo_path: `${logo_path}/vite.svg`,
    url: "https://vite.dev/",
  },
  [TECH.GIT]: {
    name: "Git",
    logo_path: `${logo_path}/git.svg`,
    url: "https://git-scm.com/",
  },
  [TECH.JAVA]: {
    name: "Java",
    logo_path: `${logo_path}/java.webp`,
    url: "https://www.oracle.com/java/",
  },
  [TECH.PYTHON]: {
    name: "Python",
    logo_path: `${logo_path}/python.webp`,
    url: "https://www.python.org/",
  },
  [TECH.SPRINGBOOT]: {
    name: "Spring Boot",
    logo_path: `${logo_path}/spring-logo.png`,
    url: "https://spring.io/projects/spring-boot",
  },
  [TECH.NESTJS]: {
    name: "NestJS",
    logo_path: `${logo_path}/NestJS.svg`,
    url: "https://nestjs.com/",
  },
  [TECH.FIREBASE]: {
    name: "Firebase",
    logo_path: `${logo_path}/firebase.svg`,
    url: "https://firebase.google.com/",
  },
  [TECH.MONGO]: {
    name: "MongoDB",
    logo_path: `${logo_path}/mongodb.svg`,
    url: "https://www.mongodb.com/",
  },
  [TECH.POSTGRES]: {
    name: "PostgreSQL",
    logo_path: `${logo_path}/postgresql.png`,
    url: "https://www.postgresql.org/",
  },
  [TECH.MYSQL]: {
    name: "MySQL",
    logo_path: `${logo_path}/mysql.webp`,
    url: "https://www.mysql.com/",
  },
  [TECH.CPLUS]: {
    name: "C++",
    logo_path: `${logo_path}/cplus.png`,
    url: "https://www.cplusplus.com/",
  },
  [TECH.ANGULAR]: {
    name: "Angular",
    logo_path: `${logo_path}/angular.png`,
    url: "https://angular.io/",
  },
  [TECH.BOOSTRAP]: {
    name: "Bootstrap",
    logo_path: `${logo_path}/boostrap.png`,
    url: "https://getbootstrap.com/",
  },
  [TECH.IONIC]: {
    name: "Ionic",
    logo_path: `${logo_path}/ionic.png`,
    url: "https://ionicframework.com/",
  },
  [TECH.DOCKER]: {
    name: "Docker",
    logo_path: `${logo_path}/docker.svg`,
    url: "https://www.docker.com/",
  },
});

export const unspecializedTech: TechnologyHelper = Object.freeze({
  [TECH.NET]: {
    name: ".NET",
    logo_path: `${logo_path}/net.svg`,
  },
  [TECH.SQL]: {
    name: "SQL",
    logo_path: `${logo_path}/sql.svg`,
  },
  [TECH.DOCKER]: {
    name: "Docker",
    logo_path: `${logo_path}/docker.svg`,
  },
  [TECH.AUTH0]: {
    name: "Auth0",
    logo_path: `${logo_path}/auth0.svg`,
    url: "https://auth0.com",
  },
  [TECH.SHADCN]: {
    name: "Shadcn",
    logo_path: `${logo_path}/shadcn.svg`,
  },
  [TECH.STORYBOOK]: {
    name: "Storybook",
    logo_path: `${logo_path}/storybook.svg`,
  },
  [TECH.GITLAB]: {
    name: "Gitlab CI CD",
    logo_path: `${logo_path}/gitlab.svg`,
  },
  [TECH.SOCKET_IO]: {
    name: "Socket.IO",
    logo_path: `${logo_path}/socket_io.svg`,
    url: "https://socket.io/",
  },
  [TECH.FIGMA]: {
    name: "Figma",
    logo_path: `${logo_path}/figma.svg`,
  },
});

export const technologiesList: Technology[] = Object.values(technologies);
