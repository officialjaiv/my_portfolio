import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "e-commerce-website",
    title: "E-commerce Website",
    description: "I developed a robust e-commerce website using WordPress and WooCommerce, featuring all essential functionalities and integrated Paytm for secure payments. The site is optimized for performance and user experience, ensuring a seamless shopping experience.",
    icon: "/skills/wordpress.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Freelance,
    // githubUrl: "",
    url: "https://secretjunction.com",
    tags: ["Wordpress", "Woo-Commerce", "PHP", "Paytm"],
  },
  {
    id: "finance-app",
    title: "Finance App",
    description: "I developed a finance app using React-Ionic and Express-Node. It tracks money given to or received from clients, with daily, monthly, and yearly interest calculations. The app provides summaries of total transactions, remaining capital, and interest owed, making financial management easy and transparent.",
    icon: "/skills/ionic.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Freelance,
    // githubUrl: "",
    // url: "",
    tags: ["Ionic", "ReactJS", "NodeJS", "Express.js", "MongoDB"],
  },
  {
    id: "stock-market-strategy-dashboard",
    title: "Stock Market Strategy Dashboard",
    description:
      "Created a dynamic dashboard using ReactJS, StyledComponents, and Bootstrap to offer real-time stock market strategy insights. The dashboard features interactive charts, stock recommendations, and notification functionalities, providing users with actionable data at their fingertips.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    // githubUrl: "",
    tags: ["React JS", "Styled Components", "Bootstrap"],
  },
  {
    id: "stock-market-strategy-admin",
    title: "Stock Market Strategy Admin & APIs",
    description:
        "Developed an intuitive admin panel using ReactJS and implemented robust APIs using NodeJS, ExpressJS, and MongoDB. This integrated solution allows seamless management and delivery of stock market strategies, empowering administrators to update recommendations, manage user access, and ensure reliable data integration for real-time updates and notifications.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    // githubUrl: "",
    tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
  },
  {
    id: "stock-market-strategy-app",
    title: "Stock Market Strategy App",
    description:
        "Developed a mobile app using React-Ionic, CSS, and Bootstrap for easy access to stock market strategies anywhere, anytime. The app delivers real-time updates on recommended stocks, portfolio performance tracking, and personalized notifications, ensuring users stay informed and proactive.",
    icon: "/skills/ionic.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    // githubUrl: "",
    tags: ["Ionic", "React JS", "CSS", "Bootstrap"],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
