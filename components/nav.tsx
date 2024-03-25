"use client";
// import React from "react";
import Image from "next/image";
import { useState } from "react";
import { GitHub, Linkedin, Instagram, Menu } from "react-feather";
import { Link } from "@chakra-ui/next-js";

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
    <div className=" sm:block">
      <ul className="flex flex-row p-4 mt-4 md:space-x-8 md:mt-0">
        {navItems.items.map((item: any, id: number) => (
          <li key={id}>
            <Link
              legacyBehavior
              href={item.link}
            >
              <a className="text-dark-gray text-decoration-none hover:text-soft-white">
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
    <div className="flex flex-row m-3">
      <a
        className="m-2"
        href="https://github.com/csimes"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub style={socialStyle} />
      </a>
      <a
        className="m-2"
        href="https://www.linkedin.com/in/cherron-simes-1b016614b"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin style={socialStyle} />
      </a>
      <a
        className="m-2"
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
      {/* Remove tagline when mobile breakpoint is reached */}
      <p className="block grow sm:hidden">
        developd | programmed to perfection
      </p>
      {nav}
      <div>{socials}</div>
    </div>
  );

  return (
    <nav className="m-0 bg-medium-orange dark:bg-gray-900 sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between m-auto px-6">
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          onClick={handleDrawerToggle}
        >
          <Menu />
        </button>
        <Image
          src="/assets/transparent.png"
          width={200}
          height={200}
          alt="developd logo"
        />
        <div></div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          {nav}
          {socials}
          <div
            className="block sm:hidden w-500"
            // open={mobileOpen}
            // onClose={handleDrawerToggle}
            // ModalProps={{
            //   keepMounted: true, // Better open performance on mobile.
            // }}
          >
            {/* {drawer} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
