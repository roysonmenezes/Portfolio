import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/roysonmenezes" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/royson-menezes-aaba2b260/" },
  { icon: <FaTwitter />, path: "https://x.com/roysonmenezes1" },
  // {icon: <FaGithub />, path:''},
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
