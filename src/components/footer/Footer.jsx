import { FacebookIcon, YoutubeIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const socialLinks = [
    { href: "https://facebook.com", icon: <FacebookIcon />, label: "Facebook" },
    { href: "https://youtube.com", icon: <YoutubeIcon />, label: "YouTube" },
    { href: "https://linkedin.com", icon: <LinkedinIcon />, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-100 py-5">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between px-4 space-y-4 md:space-y-0">
        <div className="flex items-end gap-3">
          <Image src="/xtech.png" alt="XTech Solution" width={50} height={50} />
          <p className="text-gray-600 text-center md:text-left">
            Building Smart Tech for Tomorrow.
          </p>
        </div>

        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p className="text-gray-500 text-sm text-center md:text-right">
          © 2025 XTech Solution. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
