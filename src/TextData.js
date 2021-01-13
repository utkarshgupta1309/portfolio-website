import { FaSchool, FaUniversity, FaReact, FaNodeJs } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { DiMongodb, DiPhotoshop } from "react-icons/di";
import { BsPen } from "react-icons/bs";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
  AiFillHtml5,
} from "react-icons/ai";
let WebsiteText = null;
if (WebsiteText === null) {
  WebsiteText = {
    home: {
      header: {
        nav: {
          logo: {},
          navItems: {},
        },
        headings: {
          greeting: "Hello,",
          intro: "I'm Utkarsh Gupta",
          title: "Full Stack Developer",
        },
      },
      about: {
        heading: "About me",
        aboutTxt:
          'As a Motivated and determined Student, I like to think of myself as Creative and Dependable. "Always Looking for more bearable ways to live life." I read and cook sometimes. ',
      },
      accomplishments: [
        {
          icon: <FaSchool />,
          title: "Higher Education",
          description:
            "1st division in PCM (89%) from Mother Teresa School, Bhopal",
        },
        {
          icon: <FaUniversity />,
          title: "Graduation",
          description:
            "BTech focused on Computer Science and Business Systems from Bharati Vidyapeeth, Pune. (2022)",
        },
        {
          icon: <MdWork />,
          title: "Internship",
          description:
            "Content writer and Graphic designer with Gyanbox(Jan 2020  - May 2020)",
        },
        {
          icon: <MdWork />,
          title: "Internship",
          description: "React developer with Tawi Tech Solutions. ",
        },
        {
          icon: <GrUserManager />,
          title: "Freelancing Experience",
          description: "Web developer with  Spell bathing.",
        },
        {
          icon: <GrUserManager />,
          title: "Freelancing Experience",
          description: "Web developer with Kidzee Waghbil Thane",
        },
      ],
      contact: {
        heading: "my friends call me Utkarsh but you can call me anytime.",
        socialIcons: [
          {
            link: "https://www.linkedin.com/in/utkarsh-gupta-5696bb1a2/",
            ico: <AiOutlineLinkedin />,
          },
          {
            link: "https://github.com/utkarshgupta1309",
            ico: <AiOutlineGithub />,
          },
          { link: "mailto:utkarshgupta1309@gmail.com", ico: <AiOutlineMail /> },
          {
            link: "https://www.instagram.com/13utkarsh/",
            ico: <AiOutlineInstagram />,
          },
        ],
      },
      skills: [
        {
          icon: <FaReact />,
          title: "React ",
        },
        { icon: <FaNodeJs />, title: "Node JS" },
        { icon: <DiMongodb />, title: "MongoDB" },
        { icon: <DiPhotoshop />, title: "Adobe PhotoShop" },
        { icon: <AiFillHtml5 />, title: "HTML/CSS" },
        { icon: <BsPen />, title: "Content Writing" },
      ],
      projects: {
        heading: "My Projects",
        projectsList: [
          {
            id: 0,
            title: "Connect Trends || Find Salons in your area",
            description:
              "This app helps you look up salons near you, read the reviews, check the ratings and look up the services provided by them and then make appointments for your visits accordingly.",
            techUsed: ["Node JS", "MongoDB", "Express JS", "HTML CSS"],
            projectsImg: [
              { id: 1, src: "/Assests/Images/ProjectImg/CT1.png" },
              { id: 2, src: "/Assests/Images/ProjectImg/CT2.png" },
              { id: 3, src: "/Assests/Images/ProjectImg/CT3.png" },
            ],
            link: "https://connect-trends.herokuapp.com/",
          },
          {
            id: 1,
            title: "Hospital Management System",
            description:
              "Features of this WebApp includes Registering complaint, Login and Signup to View Medical records",
            techUsed: ["Node JS", "MongoDB", "Express JS", "HTML CSS"],
            projectsImg: [
              { id: 1, src: "/Assests/Images/ProjectImg/HM1.png" },
              { id: 2, src: "/Assests/Images/ProjectImg/HM2.png" },
              { id: 3, src: "/Assests/Images/ProjectImg/HM3.png" },
            ],
            link: "https://hospital-nba.herokuapp.com/",
          },
          {
            id: 2,
            title: "E-commerce Website using Contentful",
            description:
              "A fully functional modern E-commerce website built on JavaScript. Inlcludes Checkout using Stripe API. Content management using Contenful GUI for a user friendly inventory management. User login with Authentication.",
            techUsed: [
              "Node JS",
              "Contentful",
              "MongoDB",
              "Express JS",
              "Vanilla JavaScript",
              "HTML CSS",
            ],
            projectsImg: [
              { id: 1, src: "/Assests/Images/ProjectImg/EW1.png" },
              { id: 2, src: "/Assests/Images/ProjectImg/EW2.png" },
              { id: 3, src: "/Assests/Images/ProjectImg/EW3.png" },
            ],
            link: "https://e-commerce-spell-bathing.herokuapp.com/",
          },
          {
            id: 3,
            title: "Expense Tracker using React",
            description: "A simple and elegant React Expense tracker.",
            techUsed: ["React"],
            projectsImg: [{ id: 1, src: "/Assests/Images/ProjectImg/ET1.png" }],
            link: "https://react-expense-tracker-2020.herokuapp.com/",
          },
          {
            id: 4,
            title: "Kidzee Website(Freelance Project)",
            description: "Official Website of Kidzee Waghbil ",
            techUsed: ["HTML CSS"],
            projectsImg: [
              { id: 1, src: "/Assests/Images/ProjectImg/KW1.png" },
              { id: 2, src: "/Assests/Images/ProjectImg/KW2.png" },
              { id: 3, src: "/Assests/Images/ProjectImg/KW3.png" },
            ],
            link: "http://evlearningco.com/",
          },
        ],
      },
    },
  };
}
export default WebsiteText;
