import { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/brandmark-design.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";

const drawerWidth = 240;
const navItems = ["Home", "About", "Portfolio", "Blog", "Contact"];

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const socials = (
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
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      className="nav"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <img className="nav-logo" src={Logo} alt="developd logo" />
      <Typography variant="subtitle1">
        developd | programmed to perfection.
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton className="nav-btn" sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
          <img className="nav-logo" src={Logo} alt="developd logo" />
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            developd | programmed to perfection
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button className="nav-btn" key={item}>
                {item}
              </Button>
            ))}
          </Box>
          {socials}
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
