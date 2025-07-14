import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export const homeData = {
  myImage: "/assets/WhatsApp Image 2025-06-22 at 17.04.14_e8e43668.jpg",
  
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "codexacademy50@gmail.com",
      Link: "/contact",
    },
    {
      Icon: FaLocationDot,
      Label: "Cairo, Maadi, Egypt",
      Link: "https://www.google.com/maps/place/Cairo,+Cairo+Governorate/@30.0594885,31.2584644,13z",
    },
    {
      Icon: FaPhoneAlt,
      Label: "+20 1022075809",  // ✅ التنصيص اتقفل هنا
      Link: "tel:+201022075809",
    },
  ],

  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/KareemEhab",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/kareem-hamouda/",
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "https://www.facebook.com/kareem.ehab.37",
    },
    {
      Icon: FaInstagram,
      Label: "Instagram",
      Link: "https://www.instagram.com/kareem.ehabz/",
    },
  ],
};
