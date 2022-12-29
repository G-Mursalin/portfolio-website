// Dent Care
import dentCare from "./../../assets/DentCare/main.png";
import dentCareBookingSection from "./../../assets/DentCare/bookingSection.png";
import dentCareDashboard from "./../../assets/DentCare/dashboard.png";
import Work2 from "./../../assets/work2.jpg";
import Work3 from "./../../assets/work3.jpg";
import Work4 from "./../../assets/work4.jpg";
import Work5 from "./../../assets/work5.jpg";

export const projectsData = [
  {
    id: 1,
    mainImage: Work5,
    name: "Project-1",
    images: [],
    link: "",
    category: "frontend",
  },
  {
    id: 2,
    mainImage: Work2,
    name: "Project-2",
    images: [],
    link: "",
    category: "frontend",
  },
  {
    id: 3,
    mainImage: Work3,
    name: "Project-3",
    images: [],
    link: "",
    category: "backend",
  },
  {
    id: 4,
    name: "Dent Care",
    mainImage: dentCare,
    images: [
      { id: 1, title: "Booking Section", image: dentCareBookingSection },
      { id: 2, title: "Dashboard", image: dentCareDashboard },
    ],
    link: "https://dent-care-39dfe.firebaseapp.com/",
    description: "A Full Stack Application For Managing A Clinic Center",
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
    category: "fullstack",
  },
  {
    id: 5,
    mainImage: Work5,
    name: "Project-5",
    images: [],
    link: "",
    category: "webapp",
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
  {
    name: "webapp",
  },
];
