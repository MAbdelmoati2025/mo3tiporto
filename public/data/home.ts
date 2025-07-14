import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  myImage: "/assets/WhatsApp Image 2025-06-22 at 17.04.14_e8e43668.jpg",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "codexacademy50@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Cairo, Maadi, Egypt",
      Link: "https://www.google.com/maps/place/Cairo,+Cairo+Governorate/@30.0594885,31.2584644,13z", // This is just a simple location of my city
    },
    {
      Icon: FaPhoneAlt,
      Label: "+20 102 207 5809",
      Link: "tel:+201022075809",
    },
  ],
  education: [
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
    {
      Icon: FaTiktok,
      Label: "TikTok",
      Link: "https://www.tiktok.com/@codexacademy1?_t=ZS-8xVhNzXXq6R&_r=1",
    },
  ],
};