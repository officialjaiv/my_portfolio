import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    icons: [
      "/skills/redux.svg",
      "/skills/nextjs.png",
      "/skills/react.svg",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "I provide expert web development, creating responsive, user-friendly websites that drive results.",
    description:
        "As a skilled web developer, I build responsive, user-friendly websites tailored to your needs. My services include front-end and back-end development, website maintenance, and performance optimization, ensuring your online presence is secure and engaging. Let's create a website that stands out and drives success.",
  },
  {
    id: 2,
    title: "Backend Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/docker.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "I specialize in robust backend development, ensuring your applications are fast, secure, and scalable.",
    description:
        "With extensive experience in backend development, I build the server-side logic and databases that power your applications. My focus is on creating efficient, secure, and scalable solutions that can handle high traffic and complex functionalities. Whether you need an API, microservices architecture, or database management, I ensure your backend is reliable and optimized for performance.",
  },
  {
    id: 3,
    title: "Mobile App Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/dart.svg",
      "/skills/ionic.svg",
      "/skills/flutter.svg",
      "/skills/firebase.svg",
    ],
    shortDescription:
      "I develop intuitive mobile apps that provide seamless user experiences across all devices.",
    description:
      "I offer comprehensive mobile app development services, creating apps that are user-friendly, visually appealing, and performant. From initial design to deployment, I handle every aspect of the development process. My apps are optimized for both iOS and Android platforms, ensuring a seamless user experience. Whether you need a new app or want to improve an existing one, I deliver solutions that meet your business goals.",
  },
  {
    id: 4,
    title: "Product Strategy",
    icons: [
      "/skills/git.svg",
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png",
      "/skills/ubuntu.png",
    ],
    shortDescription:
      "I provide strategic insights to guide your product development and ensure market success.",
    description:
      "My product strategy services help you navigate the complexities of bringing a product to market. I work with you to define your product vision, identify market opportunities, and develop a roadmap for success. By aligning your product development with business goals and customer needs, I ensure your product stands out in the competitive landscape. From ideation to launch, I offer strategic guidance to maximize your product's potential.",
  },
  {
    id: 5,
    title: "DevOps",
    icons: [
      "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/jenkins.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "I implement DevOps practices to streamline your development and operations processes.",
    description:
      "My DevOps services enhance collaboration between your development and operations teams, leading to faster and more reliable software delivery. I implement continuous integration and continuous deployment (CI/CD) pipelines, automate infrastructure management, and ensure your systems are secure and scalable. By adopting DevOps practices, I help you achieve shorter development cycles, increased deployment frequency, and more dependable releases.",
  },
  {
    id: 6,
    title: "Database Management",
    icons: [
      "/skills/redis.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/mysql.svg",
      "/skills/sqlite.svg",
    ],
    shortDescription: "I offer expert database management to ensure your data is organized, secure, and accessible.",
    description:
      "I provide comprehensive database management services, ensuring your data is efficiently stored, organized, and protected. From database design and development to maintenance and optimization, I handle all aspects of database management. My focus is on creating secure, scalable, and high-performance databases that meet your business needs. Whether you need a new database system or improvements to an existing one, I deliver solutions that enhance data accessibility and reliability.",
  },
];

export default services;
