"use client";
import React from "react";
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
} from "@chakra-ui/react";
import Image from "next/image";
import { GitHub, Linkedin, Instagram, Menu } from "react-feather";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";

const Nav = () => {
  const navItems = {
    items: [
      { title: "Home", link: "/" },
      { title: "About", link: "/#about" },
      { title: "Skills", link: "/#skills" },
      { title: "Projects", link: "#projects" },
      { title: "Blog", link: "/blog/" },
      { title: "Contact", link: "/#contact" },
    ],
  };

  const nav = (
    <ul className="flex md:flex-row sm:flex-col md:space-x-4 text-center">
      {navItems.items.map((item, id) => (
        <li key={id}>
          <a
            // as={NextLink}
            className="font-bold text-dark-gray hover:text-soft-white hover:overline"
            href={item.link}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );

  const transparent_logo = (
    <Image
      src="/assets/transparent.png"
      width={200}
      height={200}
      alt="developd logo"
    />
  );

  const socialStyle = {
    color: "#47463b",
    size: 24,
  };

  const socials = (
    <div className="flex flex-row space-x-4">
      <a
        href="https://github.com/csimes"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub style={socialStyle} />
      </a>
      <a
        href="https://www.linkedin.com/in/cherron-simes-1b016614b"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin style={socialStyle} />
      </a>
      <a
        href="https://www.instagram.com/thelittlecoderthatcould/"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram style={socialStyle} />
      </a>
    </div>
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const drawer = (
    <Drawer
      closeOnOverlayClick
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{transparent_logo}</DrawerHeader>
        <DrawerBody>{nav}</DrawerBody>
        <DrawerFooter>{socials}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  return (
    <nav className="sticky top-0 bg-medium-orange dark:bg-gray-900 z-20 h-24">
      <div className="max-w-screen-2xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center">{transparent_logo}</div>
        <div className="hidden md:flex items-center space-x-8">
          {nav}
          {socials}
        </div>
        <button
          className="md:hidden p-2 text-dark-gray"
          aria-label="Open menu"
          onClick={onOpen}
        >
          <Menu />
        </button>
        {drawer}
      </div>
    </nav>
  );
};

export default Nav;
