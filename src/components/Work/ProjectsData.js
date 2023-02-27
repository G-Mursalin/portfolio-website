// Dent Care
import dentCare from "./../../assets/DentCare/main.png";
import dentCareBookingSection from "./../../assets/DentCare/bookingSection.png";
import dentCareDashboard from "./../../assets/DentCare/dashboard.png";
// Tool Planet
import toolPlanet from "./../../assets/ToolPlanet/main.png";
import toolPlanetProducts from "./../../assets/ToolPlanet/products-page.png";
import toolPlanetDashboard from "./../../assets/ToolPlanet/dashboard.png";
// Dominate
import dominate from "./../../assets/Dominate/main.png";
import dominateInventory from "./../../assets/Dominate/inventory.png";
import dominateInventoryManagement from "./../../assets/Dominate/manageInventory.png";
// Dragon News
import dragonNews from "./../../assets/DragonNews/main.png";
import dragonNewsUserProfile from "./../../assets/DragonNews/userProfile.png";
import dragonNewsUserSignUp from "./../../assets/DragonNews/signUp.png";
// Jobster
import jobster from "./../../assets/Jobster/main.png";
import jobsterStats from "./../../assets/Jobster/dashboardStats.png";
import jobsterAllJobs from "./../../assets/Jobster/dashboardAllJobs.png";
// Natours
import natours from "./../../assets/Natours/main.png";
import natoursTours from "./../../assets/Natours/tours.png";
import natoursBooking from "./../../assets/Natours/booking.png";
// Comfy Sloth
import comfySloth from "./../../assets/ComfySloth/main.png";
import comfySlothProducts from "./../../assets/ComfySloth/products.png";
import comfySlothCart from "./../../assets/ComfySloth/cart.png";

export const projectsData = [
  // Front End
  {
    id: "fe1",
    mainImage: natours,
    name: "Natours",
    images: [
      { id: 1, title: "Tours", image: natoursTours },
      { id: 2, title: "Booking", image: natoursBooking },
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
  {
    id: "fe2",
    mainImage: comfySloth,
    name: "Comfy Sloth",
    images: [
      { id: 1, title: "Products", image: comfySlothProducts },
      { id: 2, title: "Cart", image: comfySlothCart },
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
  // Backend
  {
    id: "be1",
    mainImage: jobster,
    name: "Jobster",
    images: [
      { id: 1, title: "Dashboard Stats", image: jobsterStats },
      { id: 2, title: "Dashboard All Jobs", image: jobsterAllJobs },
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
    mainImage: dentCare,
    images: [
      { id: 1, title: "Booking Section", image: dentCareBookingSection },
      { id: 2, title: "Dashboard", image: dentCareDashboard },
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
    mainImage: toolPlanet,
    images: [
      { id: 1, title: "Products Section", image: toolPlanetProducts },
      { id: 2, title: "Dashboard", image: toolPlanetDashboard },
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
    mainImage: dominate,
    images: [
      { id: 1, title: "Cars Inventory", image: dominateInventory },
      {
        id: 2,
        title: "Inventory Management",
        image: dominateInventoryManagement,
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
  {
    id: "fs4",
    name: "Dragon News",
    mainImage: dragonNews,
    images: [
      { id: 1, title: "User Profile Page", image: dragonNewsUserProfile },
      {
        id: 2,
        title: "User Signup Page",
        image: dragonNewsUserSignUp,
      },
    ],
    link: "https://login-various-way.firebaseapp.com/",
    description:
      "One kind of news site that is completely devoted to news. This site include all types of news like political, judicial, entertainment, sports or more",
    overView: [
      "⛔Frontend developed by using ReactJS",
      "⛔Backend developed by using NodeJS and ExpressJS",
      "⛔The Website's data is stored in MongoDB and retrieved via the server-side API",
      "⛔Implemented Firebase Authentication (Google Login , Email/Password Login-SignUp & GitHub Login-SignUP). Private Route is implemented for security purposes.",
    ],
    technology: [
      "♨️ReactJS",
      "♨️React Firebase Hook",
      "♨️React Router",
      "♨️React Icons",
      "♨️React Share",
      "♨️React Toastify",
      "♨️React Copy to Clipboard",
      "♨️ExpressJS",
      "♨️NodeJS",
      "♨️MongoDB",
      "♨️Multer",
    ],
    gitHubFrontEnd: "https://github.com/G-Mursalin/dragon-news-front-end",
    gitHubBackEnd: "https://github.com/G-Mursalin/dragon-news-back-end",
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
