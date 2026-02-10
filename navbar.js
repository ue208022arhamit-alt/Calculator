import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import HomeIcon from "@mui/icons-material/Home";

import CallIcon from "@mui/icons-material/Call";

const pages = ["Home", "Contact Us"];

const settings = ["Profile", "Account", "Log out"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "black" }}>
      <Container maxWidth="xl" sx={{ height: 70 }}>
        <Toolbar
          disableGutters
          sx={{
            alignItems: "center",
            marginLeft: "100px",
            "@media (max-width:1200px)": { marginLeft: "60px" },
            "@media (max-width:600px)": { marginLeft: "20px" },
          }}
        >
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              color: "white",
              marginRight: 2,
              "@media (max-width:1200px)": { marginRight: 1 },
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Raleway",
              fontWeight: 500,
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              letterSpacing: "4px",
            }}
          >
            Travel Buddy
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => {
                let icon;
                if (page === "Home") {
                  icon = <HomeIcon sx={{ marginRight: 1 }} />;
                } else if (page === "Contact Us") {
                  icon = <CallIcon sx={{ marginRight: 1 }} />;
                }

                return (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    {icon}
                    <Typography
                      textAlign="center"
                      sx={{
                        color: "black",
                        "&:hover": { backgroundColor: "grey", color: "black" },
                        fontFamily: "Roboto",
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          <AdbIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: "white",
              "@media (max-width:600px)": { mr: 0 },
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Raleway",
              fontWeight: 500,
              color: "white",
              textDecoration: "none",
              letterSpacing: "2px",
              "@media (max-width:1200px)": {
                fontWeight: 400,
                letterSpacing: "3px",
                variant: "h5",
              },
              "@media (max-width:600px)": {
                fontWeight: 200,
                letterSpacing: "1px",
              },
            }}
          >
            PGM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              let icon;

              if (page === "Home") {
                icon = <HomeIcon sx={{ marginRight: 1 }} />;
              } else if (page === "Contact Us") {
                icon = <CallIcon sx={{ marginRight: 1 }} />;
              }

              return (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 2,
                    paddingX: 2,
                    borderRadius: "28px",
                    "&:hover": { backgroundColor: "lightgrey", color: "black" },
                    "@media (max-width:1200px)": { mx: 0, paddingX: 1 },
                  }}
                >
                  {icon}
                  <Typography
                    textAlign="center"
                    sx={{
                      color: "white",
                      "&:hover": { color: "black" },
                      fontSize: "14px",
                      fontFamily: "Poppins",
                      letterSpacing: "1px",
                      "@media (max-width:1200px)": {
                        fontSize: "12px",
                        letterSpacing: "0px",
                      },
                    }}
                  >
                    {page}
                  </Typography>
                </Button>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                  sx={{
                    marginRight: { xs: "40px", md: "100px" },
                    "@media (max-width:1200px)": { marginRight: "60px" },
                    "@media (max-width:600px)": { marginRight: "40px" },
                  }}
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px", ml: "-70px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ color: "black", fontFamily: "playfair" }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
