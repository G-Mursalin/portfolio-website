import { StaticImageData } from "next/image";
import assets from "../../public/assets";

// Type
export type TImages = {
  id: number;
  title: string;
  image: StaticImageData;
};

export type TProject = {
  id: string;
  mainImage: StaticImageData;
  name: string;
  images: TImages[];
  link: string;
  description: string;
  overView: string[];
  technology: string[];
  gitHubFrontEnd: string;
  gitHubBackEnd?: string;
  category: string;
};

export const projectsData: TProject[] = [
  // Front End
  {
    id: "fe1",
    mainImage: assets.projectsImages.comfySloth.comfySloth,
    name: "Comfy Sloth",
    images: [
      {
        id: 1,
        title: "Products",
        image: assets.projectsImages.comfySloth.comfySlothProducts,
      },
      {
        id: 2,
        title: "Cart",
        image: assets.projectsImages.comfySloth.comfySlothCart,
      },
    ],
    link: "https://comfy-sloth-furnitures1.netlify.app/",
    description: "A Website For Ordering Furniture of Your Comfort",
    overView: [
      "⛔Designed full website using only vanilla css",
      "⛔Used Auth0 for creating users account",
      "⛔Used Redux toolkit for state management",
      "⛔Used Stripe for making payment gateway",
    ],
    technology: [
      "♨️ReactJS",
      "♨️React Router",
      "♨️Stripe payment service",
      "♨️Auth0",
      "♨️NodeJS",
      "♨️ExpressJS",
    ],
    gitHubFrontEnd: "https://github.com/G-Mursalin/Natours",
    category: "frontend",
  },
  {
    id: "fe2",
    mainImage: assets.projectsImages.natours.natours,
    name: "Natours",
    images: [
      {
        id: 1,
        title: "Tours",
        image: assets.projectsImages.natours.natoursTours,
      },
      {
        id: 2,
        title: "Booking",
        image: assets.projectsImages.natours.natoursBooking,
      },
    ],
    link: "https://natours-1232.netlify.app/",
    description: "A Static Website For Booking Tours Around The World",
    overView: [
      "⛔Designed full website using only vanilla css",
      "⛔Used SASS for write better CSS code",
    ],
    technology: ["♨️HTML", "♨️CSS", "♨️SASS"],
    gitHubFrontEnd: "https://github.com/G-Mursalin/Natours",
    category: "frontend",
  },

  // Backend
  {
    id: "be1",
    mainImage: assets.projectsImages.jobster.jobster,
    name: "Jobster",
    images: [
      {
        id: 1,
        title: "Dashboard Stats",
        image: assets.projectsImages.jobster.jobsterStats,
      },
      {
        id: 2,
        title: "Dashboard All Jobs",
        image: assets.projectsImages.jobster.jobsterAllJobs,
      },
    ],
    link: "https://jobster-360.netlify.app/",
    description: "A Full Stack Application For Managing Jobs Posts",
    overView: [
      "⛔Designed full website using only css.(No css framework used)",
      "⛔Used Redux toolkit for state management",
      "⛔Used Redux Thunk to handled APIs calls",
      "⛔Authentication is handled by the backend (expressJS, mongoDB)",
      "⛔Users can create, update, and delete a job",
      "⛔Users can edit their profile data",
    ],
    technology: [
      "♨️ReactJS",
      "♨️React Router",
      "♨️Redux",
      "♨️Rechart",
      "♨️React Toastify",
      "♨️Jason Web Token",
      "♨️ExpressJS",
      "♨️MongoDB",
    ],
    gitHubFrontEnd: "https://github.com/G-Mursalin/jobster-frontend",
    gitHubBackEnd: "https://github.com/G-Mursalin/jobster-backend",
    category: "backend",
  },
  // Full Stack

  {
    id: "fs1",
    name: "Dent Care",
    mainImage: assets.projectsImages.dentCare.dentCare,
    images: [
      {
        id: 1,
        title: "Booking Section",
        image: assets.projectsImages.dentCare.dentCareBookingSection,
      },
      {
        id: 2,
        title: "Dashboard",
        image: assets.projectsImages.dentCare.dentCareDashboard,
      },
    ],
    link: "https://dent-care-39dfe.firebaseapp.com/",
    description:
      "A Full Stack Application For Managing A Clinic Center. Users, Doctors, And Admins Can Manage Their Activities. A Role Based Authentication System. Implement A Multi-Layer Dashboard. Connect Server Side For Role Based Access To A Secure API",
    overView: [
      "⛔The Website's data is stored in MongoDB and retrieved via the server-side API where I used Express JS",
      "⛔Implemented Firebase Authentication (Google Sign in & Email/Password Login). Private Route & Admin Route is implemented for security purposes",
      "⛔Separate Dashboard available for users and Admins with different facilities",
      "⛔Used Stripe for making payment gateway",
    ],
    technology: [
      "♨️ReactJS",
      "♨️Tailwind CSS",
      "♨️React Firebase Hook",
      "♨️React Router",
      "♨️React Form Hook",
      "♨️DaisyUI",
      "♨️React Toastify",
      "♨️ExpressJS",
      "♨️NodeJS",
      "♨️Json Web Token",
      "♨️MongoDB",
      "♨️Render",
    ],
    gitHubFrontEnd: "https://github.com/G-Mursalin/dent-care-front-end",
    gitHubBackEnd: "https://github.com/G-Mursalin/dent-care-back-end",
    category: "fullstack",
  },
  {
    id: "fs2",
    name: "Tool Planet",
    mainImage: assets.projectsImages.toolPlanet.toolPlanet,
    images: [
      {
        id: 1,
        title: "Products Section",
        image: assets.projectsImages.toolPlanet.toolPlanetProducts,
      },
      {
        id: 2,
        title: "Dashboard",
        image: assets.projectsImages.toolPlanet.toolPlanetDashboard,
      },
    ],
    link: "https://tool-planet.firebaseapp.com/",
    description: "A Full Stack Application For Ordering Tools",
    overView: [
      "⛔The Website's data is stored in MongoDB and retrieved via the server-side API where I used Express JS",
      "⛔Implemented Firebase Authentication (Google Sign in & Email/Password Login). Private Route & Admin Route is implemented for security purposes",
      "⛔Separate Dashboard available for users and Admins with different facilities",
      "⛔Used Stripe for making payment gateway",
    ],
    technology: [
      "♨️ReactJS",
      "♨️Tailwind CSS",
      "♨️React Firebase Hook",
      "♨️React Router",
      "♨️React Form Hook",
      "♨️DaisyUI",
      "♨️React Toastify",
      "♨️ExpressJS",
      "♨️NodeJS",
      "♨️Json Web Token",
      "♨️MongoDB",
      "♨️Render",
    ],
    gitHubFrontEnd: "https://github.com/G-Mursalin/tool-planet-frontend",
    gitHubBackEnd: "https://github.com/G-Mursalin/tool-planet-backend",
    category: "fullstack",
  },
  {
    id: "fs3",
    name: "Dominate",
    mainImage: assets.projectsImages.dominate.dominate,
    images: [
      {
        id: 1,
        title: "Cars Inventory",
        image: assets.projectsImages.dominate.dominateInventory,
      },
      {
        id: 2,
        title: "Inventory Management",
        image: assets.projectsImages.dominate.dominateInventoryManagement,
      },
    ],
    link: "https://dominate-db3ff.firebaseapp.com/",
    description: "A Website for Cars Management",
    overView: [
      "⛔Implemented firebase authentication system",
      "⛔Used MongoDB as database",
      "⛔Add any car",
      "⛔Delete any car",
    ],
    technology: [
      "♨️ReactJS",
      "♨️React Firebase Hook",
      "♨️React Router",
      "♨️React Model",
      "♨️React Toastify",
      "♨️ExpressJS",
      "♨️NodeJS",
      "♨️MongoDB",
    ],
    gitHubFrontEnd: "https://github.com/G-Mursalin/dominate-frontend",
    gitHubBackEnd: "https://github.com/G-Mursalin/dominate-backend",
    category: "fullstack",
  },
  // {
  //   id: "fs4",
  //   name: "Dragon News",
  //   mainImage: assets.projectsImages.dragonNews.dragonNews,
  //   images: [
  //     {
  //       id: 1,
  //       title: "User Profile Page",
  //       image: assets.projectsImages.dragonNews.dragonNewsUserProfile,
  //     },
  //     {
  //       id: 2,
  //       title: "User Signup Page",
  //       image: assets.projectsImages.dragonNews.dragonNewsUserSignUp,
  //     },
  //   ],
  //   link: "https://login-various-way.firebaseapp.com/",
  //   description:
  //     "One kind of news site that is completely devoted to news. This site include all types of news like political, judicial, entertainment, sports or more",
  //   overView: [
  //     "⛔Frontend developed by using ReactJS",
  //     "⛔Backend developed by using NodeJS and ExpressJS",
  //     "⛔The Website's data is stored in MongoDB and retrieved via the server-side API",
  //     "⛔Implemented Firebase Authentication (Google Login , Email/Password Login-SignUp & GitHub Login-SignUP). Private Route is implemented for security purposes.",
  //   ],
  //   technology: [
  //     "♨️ReactJS",
  //     "♨️React Firebase Hook",
  //     "♨️React Router",
  //     "♨️React Icons",
  //     "♨️React Share",
  //     "♨️React Toastify",
  //     "♨️React Copy to Clipboard",
  //     "♨️ExpressJS",
  //     "♨️NodeJS",
  //     "♨️MongoDB",
  //     "♨️Multer",
  //   ],
  //   gitHubFrontEnd: "https://github.com/G-Mursalin/dragon-news-front-end",
  //   gitHubBackEnd: "https://github.com/G-Mursalin/dragon-news-back-end",
  //   category: "fullstack",
  // },
  {
    id: "fs5",
    name: "Travel Buddy",
    mainImage: assets.projectsImages.travelBuddy.travelBuddy,
    images: [
      {
        id: 1,
        title: "User Dashboard",
        image: assets.projectsImages.travelBuddy.travelBuddyUserDashboard,
      },
      {
        id: 2,
        title: "Admin Dashboard",
        image: assets.projectsImages.travelBuddy.travelBuddyAdminDashboard,
      },
    ],
    link: "https://travel-buddy-front-end.vercel.app/",
    description:
      "The Travel Buddy website is designed to connect travelers looking for companionship on their trips. It allows users to share their travel plans, search for trips, and find like-minded individuals to join them. The platform aims to foster a community of travelers who can explore the world together, share experiences, and make travel more enjoyable and safe.",
    overView: [
      "⛔Frontend developed by using NextJS",
      "⛔Backend developed by using ExpressJS",
      "⛔The Website's data is stored in MongoDB and retrieved via the server-side API",
      "⛔Implemented backend authentication",
    ],
    technology: [
      "♨️NextJS",
      "♨️React Icons",
      "♨️React Toastify",
      "♨️ExpressJS",
      "♨️NodeJS",
      "♨️MongoDB",
    ],
    gitHubFrontEnd: "https://github.com/G-Mursalin/travel-buddy-front-end",
    gitHubBackEnd: "https://github.com/G-Mursalin/travel-buddy-back-end",
    category: "fullstack",
  },
];

export const projectsNav = [
  {
    name: "frontend",
  },
  {
    name: "backend",
  },
  {
    name: "fullstack",
  },
];
