// 🇬🇧 ENGLISH VERSION (Clean homepage content without Codex Academy)

import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export const homeData = {
  myImage: "/assets/default_profile.webp", // Use a general profile image

  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "example@email.com", // Replace with a generic or your email
      Link: "/contact", // Link to your contact page
    },
    {
      Icon: FaLocationDot,
      Label: "Cairo, Egypt",
      Link: "https://www.google.com/maps",
    },
    {
      Icon: FaPhoneAlt,
      Label: "+20 100 000 0000", // Replace with your contact number
      Link: "tel:+201000000000",
    },
  ],

  education: [
    {
      Icon: null,
      Label: "Explore our latest courses and workshops!",
      Link: "/courses", // Link to the courses section
    },
    {
      Icon: null,
      Label: "Join exciting activities and learning programs.",
      Link: "/activities", // Link to activities section
    },
  ],

  social: [
    {
      Icon: null,
      Label: "Follow us to stay updated!",
    },
  ],
};
