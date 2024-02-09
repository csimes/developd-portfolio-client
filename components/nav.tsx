"use client";
// import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GitHub, Linkedin, Instagram, Menu } from "react-feather";

const Nav = () => {
  const drawerWidth = 500;

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
    <ul className="flex flex-row p-4 mt-4 md:space-x-8 md:mt-0">
      {navItems.items.map((item: any, id: number) => (
        <li key={id}>
          <Link
            legacyBehavior
            href={item.link}
          >
            <a className="text-dark-gray text-decoration-none">{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const socialStyle = {
    color: "#47463b",
    size: 24,
  };

  const socials = (
    <div className="flex flex-row justify-between">
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

  const drawer = (
    <div
      className="text-center"
      onClick={handleDrawerToggle}
    >
      <Image
        className="nav-logo"
        src="/assets/brandmark-design.png"
        alt="developd logo"
        width="50"
        height="50"
      />
      <p>developd | programmed to perfection</p>
      {nav}
      <div>{socials}</div>
    </div>
  );

  return (
    <nav className="bg-medium-orange dark:bg-gray-900 sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between m-auto px-6">
        <a
          href="https://www.developdbycherron.com"
          className="flex items-center"
        >
          <Image
            src="/assets/transparent.png"
            width={200}
            height={100}
            className="h-8"
            alt="developd logo"
          />
        </a>
        <div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          {nav}
          <div>{socials}</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
