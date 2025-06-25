"use client";
import Image from "next/image";
import Link from "next/link";
import { LucideArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-gray-100 px-4 shadow-md">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center py-2">
          <Image src="/xtech.png" alt="XTech Solution" width={60} height={60} />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-black"
            >
              {link.label}
            </Link>
          ))}

          <button className="ml-3 flex items-center bg-white text-gray-800 px-3 py-1 rounded-full border hover:shadow-md transition gap-2 cursor-pointer">
            BOOK A CALL
            <LucideArrowRight />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pb-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              {link.label}
            </Link>
          ))}

          <button className="w-full flex mt-2 justify-between text-left px-4 py-2 bg-white text-gray-800 border rounded-md cursor-pointer">
            BOOK A CALL
            <LucideArrowRight />
          </button>
        </div>
      )}
    </nav>
  );
}
