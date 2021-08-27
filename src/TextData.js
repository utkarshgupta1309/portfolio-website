import {
  FaSchool,
  FaUniversity,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaLaptopCode
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { DiMongodb, DiPhotoshop, DiSass, DiCss3 } from "react-icons/di";
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
          'As a motivated and determined student, I like to think of myself as creative and dependable. ',
      },
      accomplishments: [
        {
          icon: <FaUniversity />,
          title: "Graduation",
          description:
            "BTech focused on Computer Science and Business Systems from Bharati Vidyapeeth, Pune. (2022)",
        },
        {
          icon: <FaLaptopCode />,
          title: "Freelance Experience",
          description: "Full Stack Developer at Spool",
        },
        {
          icon: <MdWork />,
          title: "Internship",
          description: "Full Stack Developer at Spool",
        },
        ,
        {
          icon: <MdWork />,
          title: "Internship",
          description:
            "Content writer and Graphic designer with Gyanbox(Jan 2020  - May 2020)",
        },

        {
          icon: <FaLaptopCode />,
          title: "Freelance Experience",
          description: "Web developer with  Spell bathing.",
        },
        {
          icon: <FaLaptopCode />,
          title: "Freelance Experience",
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
        { icon: <AiFillHtml5 />, title: "HTML" },
        { icon: <DiCss3 />, title: "CSS" },
        { icon: <DiSass />, title: "SASS/SCSS" },
        { icon: <DiPhotoshop />, title: "Adobe PhotoShop" },
        { icon: <FaFigma />, title: "Figma" },

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
            title: "CRUD CLI Tool",
            description: "CLI tool for User management",
            techUsed: ["Node Js", "MongoDB", "Inquirer"],
            projectsImg: [
              { id: 1, src: "/Assests/Images/ProjectImg/CLI1.png" },
              { id: 2, src: "/Assests/Images/ProjectImg/CLI2.png" },
              { id: 3, src: "/Assests/Images/ProjectImg/CLI3.png" },
            ],
            link: "https://github.com/utkarshgupta1309/cms-cli",
          },
          {
            id: 5,
            title: "RegExp Password strength meter ",
            description: "Does what it says. It can be easily intergrated in any user authentication page",
            techUsed: ["HTML CSS", "Vanilla Javascript"],
            projectsImg: [
              { id: 1, src: "/Assests/Images/ProjectImg/PSM.png" },
            ],
            link: "https://passwrd-str-meter.netlify.app/",
          },
          {
            id: 6,
            title: "Greenbacks! Ideas tracker",
            description: "A chrome extension better than bookmarks! Save any webpage url as an idea/lead or input your own with our custom input field.",
            techUsed: ["HTML CSS", "Vanilla Javascript"],
            projectsImg: [
              { id: 1, src: "/Assests/Images/ProjectImg/IT1.png" },
            ],
            link: "https://github.com/utkarshgupta1309/Lead-tracker-chrome-extension",
          },
        ],
      },
    },
    HIHome: {
      header: {
        nav: {
          logo: {},
          navItems: {},
        },
        headings: {
          greeting: "हलो!",
          intro: "मेरा नाम उत्कर्ष गुप्ता है",
          title: "Full-Stack Developer(वेब डेवलपर)",
        },
      },
      about: {
        heading: "मुझे यहाँ जानो",
        aboutTxt:
          'एक प्रेरित और दृढ़ छात्र के रूप में, मैं खुद को रचनात्मक और भरोसेमंद समझना पसंद करता हूं। "हमेशा जीवन जीने के लिए और अधिक सहने योग्य तरीकों की तलाश में।" मैं कभी-कभी पढ़ता और खाना बनाता हूँ।',
      },
      accomplishments: [
        {
          icon: <FaSchool />,
          title: "उच्च शिक्षा",
          description: "मदर टेरेसा स्कूल, भोपाल से PCM (89%) में प्रथम श्रेणी",
        },
        {
          icon: <FaUniversity />,
          title: "स्नातक स्तर की पढ़ाई",
          description:
            "बीटेक पुणे के भारती विद्यापीठ से कंप्यूटर साइंस और बिजनेस सिस्टम पर केंद्रित है। (2022)",
        },
        {
          icon: <MdWork />,
          title: "इंटर्नशिप",
          description:
            "सामग्री लेखक और ग्राफिक डिजाइनर ज्ञानबॉक्स के साथ (जनवरी 2020 - मई 2020)",
        },
        {
          icon: <MdWork />,
          title: "इंटर्नशिप",
          description: "तवी टेक सॉल्यूशंस के साथ रिएक्ट डेवलपर।",
        },
        {
          icon: <GrUserManager />,
          title: "फ्रीलांसिंग का अनुभव",
          description: "वेब डेवलपर स्पेल बाथिंग के साथ।",
        },
        {
          icon: <GrUserManager />,
          title: "फ्रीलांसिंग का अनुभव",
          description: "किड्जी वाघबिल ठाणे के साथ वेब डेवलपर",
        },
      ],
      contact: {
        heading:
          "मेरे दोस्त मुझे उत्कर्ष बुलाते हैं लेकिन आप मुझे कभी भी बुला सकते हैं।",
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
        heading: "मेरे प्रोजेक्ट्स",
        projectsList: [
          {
            id: 0,
            title: "Connect Trends || अपने क्षेत्र में सैलून खोजें",
            description:
              "यह ऐप आपके आस-पास के सैलून देखने, समीक्षाओं को पढ़ने, रेटिंग्स की जांच करने और उनके द्वारा प्रदान की गई सेवाओं को देखने में मदद करता है और फिर उसी के अनुसार आपकी यात्राओं के लिए नियुक्तियां करता है।",
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
            title: "अस्पताल प्रबंधन प्रणाली",
            description:
              "इस वेबऐप की विशेषताओं में रजिस्टर शिकायत, लॉगिन और साइनअप देखने से लेकर मेडिकल रिकॉर्ड शामिल हैं",
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
            title: "सामग्री का उपयोग कर ई-कॉमर्स वेबसाइट",
            description:
              "जावास्क्रिप्ट पर निर्मित एक पूरी तरह कार्यात्मक आधुनिक ई-कॉमर्स वेबसाइट। स्ट्राइप एपीआई का उपयोग करके चेकआउट को सम्मिलित करता है। एक उपयोगकर्ता के अनुकूल सूची प्रबंधन के लिए कॉन्टेनफुल जीयूआई का उपयोग करके सामग्री प्रबंधन। प्रमाणीकरण के साथ उपयोगकर्ता लॉगिन।",
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
            title: "व्यय ट्रैकर",
            description: "एक सरल और सुरुचिपूर्ण React Expense tracker.",
            techUsed: ["React"],
            projectsImg: [{ id: 1, src: "/Assests/Images/ProjectImg/ET1.png" }],
            link: "https://react-expense-tracker-2020.herokuapp.com/",
          },
          {
            id: 4,
            title: "किड्जी वेबसाइट (फ्रीलांस प्रोजेक्ट)",
            description: "किड्जी वाघबिल की आधिकारिक वेबसाइट",
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
