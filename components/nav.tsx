// import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material/";
import { GitHub, Linkedin, Instagram, Menu } from "react-feather";

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

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const darkGray = "color-dark-gray";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const socialStyle = {
    color: "#47463b",
    size: 24,
  };

  const socials = (
    <>
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
    </>
  );

  const drawer = (
    <Box
      className="nav"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <Image
        className="nav-logo"
        src="/assets/brandmark-design.png"
        alt="developd logo"
        width="50"
        height="50"
      />
      <Typography variant="subtitle2">
        developd | programmed to perfection
      </Typography>
      <List>
        {navItems.items.map((item: any, id: number) => (
          <ListItem key={id}>
            <Link href={item.link}>
              <a className="nav-btn">{item.title}</a>
            </Link>
          </ListItem>
        ))}
      </List>
      <div className="nav-social">{socials}</div>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar className="nav">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Image
            className="nav-logo"
            src="/assets/brandmark-design.png"
            alt="developd logo"
            width="50"
            height="50"
          />
          {/* Remove tagline when mobile breakpoint is reached */}
          <Typography
            className="desktop"
            variant="subtitle1"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            developd | programmed to perfection
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.items.map((item: any, id: number) => (
              <Link
                href={item.link}
                key={id}
              >
                <a className="nav-btn">{item.title}</a>
              </Link>
            ))}
          </Box>
          <div className="flex flex-row nav-social desktop">{socials}</div>
        </Toolbar>
      </AppBar>
      <Box
        className="drawer"
        component="nav"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Nav;
