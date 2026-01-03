import {
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
export interface Social {
  name: string;
  url: string;
  icon: IconType;
  target?: string | undefined;
  rel?: string | undefined;
}

export const Socials: Social[] = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Stianlars1",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/stianlars1",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram/stianlarsen",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:stian.larsen@mac.com?subject=👋%20Hello,%20Stian",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    name: "X",
    icon: FaTwitter,
    url: "https://www.x.com/litehode",
  },
  {
    name: "Resume",
    icon: FaFilePdf,
    url: "/resume.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
