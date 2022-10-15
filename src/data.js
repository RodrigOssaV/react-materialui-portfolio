const projectsData = [
  {
    id: 1,
    title: "Agenda",
    subtitle: "Proyecto personal.",
    description:
      "Aplicación Web que permite a distintos usuarios almacenar tareas y contactos en una base de datos MySQL.",
    imageAlt: "Project 1 Image",
    imageUrl: "/nodejs-app-img-1920x1040.JPG",
    tags: ["Express", "Nodejs", "MySQL", "Bulma CSS"],
    links: [
      {
        icon: "",
        href: "https://github.com/RodrigOssaV/nodejs-agenda-app",
      },
    ],
  },
  {
    id: 2,
    title: "MUNDO App",
    subtitle: "Proyecto personal.",
    description:
      "Proyecto para agilizar el trabajo en recepción de llamadas en un Call Center. Trabajo personal para facilitar mi trabajo en esa área.",
    imageAlt: "Project 2 Image",
    imageUrl: "/electron-img.JPG",
    tags: ["Electron", "Bulma CSS"],
    links: [
      {
        icon: "",
        href: "https://github.com/RodrigOssaV/electron_app",
      },
    ],
  },
  {
    id: 3,
    title: "WareSoffan",
    subtitle: "Proyecto de título.",
    description:
      "Software de inventario y generación de reportes para distribución y repartos de encomiendas. Proyecto de título presentada a la facultad de ingeniería de la Universidad Católica de la Santísima Concepción.",
    imageAlt: "Project 3 Image",
    imageUrl: "/waresoffan-img-1920x1040.jpg",
    tags: [
      "Angular",
      "React-Native",
      "Express",
      "Sequelize",
      "MySQL",
      "Bulma CSS",
    ],
    links: [
      {
        icon: "",
        href: "https://github.com/RodrigOssaV/proyecto_titulo",
      },
    ],
  },
  {
    id: 4,
    title: "Tareas WebApp",
    subtitle: "Proyecto personal.",
    description: "",
    imageAlt: "Project 4 Image",
    imageUrl: "/nodejs-app2-img-1920x1040.JPG",
    tags: ["Nodejs", "Express", "MySQL", "Bootstrap"],
    links: [
      {
        icon: "",
        href: "https://github.com/RodrigOssaV/nodejs-app",
      },
    ],
  },
  {
    id: 5,
    title: "Portafolio",
    subtitle: "Proyecto personal.",
    description:
      "Portafolio personal de mis trabajos y habilidades en lo que respecta al desarrollo de software.",
    imageAlt: "Project 5 Image",
    imageUrl: "/portfolio-img-1920x1040.JPG",
    tags: ["React", "Material UI"],
    links: [
      {
        icon: "",
        href: "https://github.com/RodrigOssaV/react-materialui-portfolio",
      },
    ],
  },
  {
    id: 6,
    title: "COVID Status",
    subtitle: "Proyecto realizado para el curso Gestión de Datos, UCSC.",
    description:
      "Repositorio que tiene relación al avance del Coronavirus mediante un análisis realizado en Python. Toma como referencia la información actual del Coronavirus subida en el repositorio de JHU CSSE.",
    imageAlt: "Project 6 Image",
    imageUrl: "/covid-jupyterlab-img-1920x1040.JPG",
    tags: ["Python"],
    links: [
      {
        name: "personal",
        href: "https://github.com/RodrigOssaV/COVID-status",
      },
      {
        name: "information",
        href: "https://github.com/CSSEGISandData/COVID-19",
      },
    ],
  },
  {
    id: 7,
    title: "Django APP",
    subtitle: "Proyecto personal.",
    description:
      "Proyecto de estudio personal desarrollado con Python, utilizando Django como marco de trabajo.",
    imageUrl:"/django-app-img.JPG",
    imageAlt: "Project 7 Image",
    tags: ["Django", "Python", "Bulma CSS"],
    links: [
      {
        icon: "",
        href: "https://github.com/RodrigOssaV/django-agenda-app",
      },
    ],
  },
];

const experienceData = [
  {
    title: "Ingeniero Civil Informático",
    description:
      "Encargado de la mantención de computadores y las diferentes necesidades informáticas que requiere la empresa Marketing y Comunicaciones SOFFAN en la ciudad de Concepción.",
    year_started: 2019,
    year_end: 2021,
  },
  {
    title: "Desarrollador",
    description: "Integrante del equipo de desarrollo Nebula.",
    year_started: 2019,
    year_end: 2021,
  },
  {
    title: "Desarrollador Independiente",
    description: "Desarrollador independiente.",
    year_started: 2019,
    year_end: "Actual",
  },
];

const skillList = [
  {
    title: "Django",
    value: 40,
    imageUrl: "",
  },
  {
    title: "Flask",
    value: 35,
    imageUrl: "",
  },
  {
    title: "Electron",
    value: 50,
    imgURL: "",
  },
  {
    title: "React",
    value: 55,
    imageUrl: "",
  },
  {
    title: "React Native",
    value: 45,
    imgURL: "",
  },
  {
    title: "Angular",
    value: 65,
    imgURL: "https://angular.io/assets/images/logos/angular/angular.svg",
  },
  { title: "Express", value: 75, imgURL: "" },
  {
    title: "Bootstrap",
    value: 45,
    imgURL: "",
  },
  {
    title: "Material UI",
    value: 55,
    imgURL: "",
  },
  {
    title: "Bulma CSS",
    value: 65,
    imgURL: "",
  },
];

const aboutDescription = [
  {
    title: "description",
    description:
      "Hola, mi nombre es Rodrigo Ossa Villalobos y me dedico al desarrollo de aplicaciones Web en los lenguajes de programación Python, JavaScript y TypeScript, utilizando a su vez Framework de desarrollo como Django, Angular, React Native y Express. Actualmente me dedico al desarrollo de software de forma independiente.",
  },
];

const aboutHeroSection = [
  {
    title: "about",
    about: "Hola! Mi nombre es Rodrigo Ossa Villalobos.",
    description: "Desarrollo Websites, aplicaciones Web y móviles.",
    location: "Concepción, Chile.",
  },
];

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "" },
];

const lenguageSkill = [
  { title: "TypeScript", value: 70 },
  { title: "JavaScript", value: 75 },
  { title: "Python", value: 40 },
  { title: "HTML", value: 60 },
  { title: "CSS", value: 45 },
  { title: "Inglés", value: 60 },
];

export {
  projectsData,
  experienceData,
  skillList,
  aboutDescription,
  navigationLinks,
  aboutHeroSection,
  lenguageSkill,
};
