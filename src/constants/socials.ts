import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/michael-joshua-paloa-277a3a259",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/mjdesu1",
    icon: FaGithub,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/mj.bp.367598/",
    icon: FaFacebook,
  }
];
