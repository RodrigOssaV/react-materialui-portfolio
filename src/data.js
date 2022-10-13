const projectsData = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    imageUrl:
      "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80",
    imageAlt: "Project 1 Image",
    tags: ["React.js", "Material-UI", "Gatsby.js"],
    /* links: [
                {
                icon: GitHubIcon,
                href: "https://www.github.com",
                },
                {
                icon: OpenInNewIcon,
                href: "https://www.google.com",
                },
            ], */
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    imageAlt: "Project 2 Image",
    imageUrl:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    tags: ["GraphQL", "Apollo Client", "Prisma", "Material-UI"],
    /* links: [
                {
                icon: GitHubIcon,
                href: "https://www.github.com",
                },
                {
                icon: OpenInNewIcon,
                href: "https://www.google.com",
                },
            ], */
  },
  {
    title: "Lorem ipsum dolor ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    imageAlt: "Project 3 Image",
    imageUrl:
      "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    tags: ["React.js", "Node.js", "PostgreSQL", "Next.js"],
    /* links: [
                {
                icon: OpenInNewIcon,
                href: "https://www.google.com",
                },
            ], */
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
    year_end: 2022,
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
    value: 45,
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
    value: 45,
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
    location: "Concepción, Chile."
  }
]

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience"},
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "" },
];

const lenguageSkill = [
  { title: "TypeScript", value: 70},
  { title: "JavaScript", value: 75},
  { title: "Python", value: 40},
  { title: "HTML", value: 60},
  { title: "CSS", value: 45},
  { title: "Inglés", value: 60},
]

export { projectsData, experienceData, skillList, aboutDescription, navigationLinks, aboutHeroSection, lenguageSkill };
