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
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";

const drawerWidth = 240;
const navItems = {
  items: [
    { title: "Home", link: "/" },
    { title: "About", link: "/#about" },
    { title: "Skills", link: "/#skills" },
    { title: "Projects", link: "/projects" },
    { title: "Blog", link: "/blog/" },
    { title: "Contact", link: "/contact" },
  ],
};

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
        {navItems.items.map((item: any) => (
          <ListItem key={item}>
            <Link href={item.link}>
              <a className="nav-btn">{item.title}</a>
            </Link>
          </ListItem>
        ))}
      </List>
      <div className="nav-social">
        <a href="https://github.com/csimes" target="_blank" rel="noreferrer">
          <GithubIcon htmlColor="#47463b" sx={{ fontSize: 32 }} />
        </a>
        <a
          href="https://www.linkedin.com/in/cherron-simes-1b016614b"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon htmlColor="#47463b" sx={{ fontSize: 32 }} />
        </a>
      </div>
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
            <MenuIcon />
          </IconButton>
          {/* Remove logo when mobile breakpoint is reached */}
          <Image
            className="nav-logo desktop"
            src="/assets/brandmark-design.png"
            alt="developd logo"
            width="50"
            height="50"
          />
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            developd | programmed to perfection
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.items.map((item: any) => (
              <Link href={item.link} key={item}>
                <a className="nav-btn">{item.title}</a>
              </Link>
            ))}
          </Box>
          <div className="nav-social desktop">
            <a
              href="https://github.com/csimes"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon htmlColor="#47463b" sx={{ fontSize: 32 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/cherron-simes-1b016614b"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon htmlColor="#47463b" sx={{ fontSize: 32 }} />
            </a>
          </div>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
