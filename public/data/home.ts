import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaGraduationCap, FaTiktok } from "react-icons/fa6";
import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaUniversity,
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
      Label: "+201022075809",
      Link: "tel:+201022075809",
    },
  ],
  social: [
    {
      Icon: FaTiktok,
      Label: "TikTok",
      Link: "https://www.tiktok.com/@codexacademy1?_t=ZS-8xVhNzXXq6R&_r=1",
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "https://www.facebook.com/profile.php?id=61572621389592",
    },
    {
      Icon: FaInstagram,
      Label: "Instagram",
      Link: "https://www.instagram.com/codex__academy?igsh=bXByeWl4c3VuM3h3",
    },
  ],
};
