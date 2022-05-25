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
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DiamondIcon from "@mui/icons-material/Diamond";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";

const pages = [
  {
    name: "Products",
    url: "/product",
  },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  const matches = useMediaQuery("(min-width:540px)");

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <DiamondIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Link href="/">
              <a>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  I-Shop
                </Typography>
              </a>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
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
                {pages.map((page, index) => (
                  <Link key={index} href={page.url}>
                    <a>
                      <MenuItem
                        key={index}
                        sx={{ width: "100vh" }}
                        onClick={handleCloseNavMenu}
                      >
                        <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    </a>
                  </Link>
                ))}
              </Menu>
            </Box>
            <DiamondIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none", cursor: "pointer" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link href="/">
                <a>I-shop</a>
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Link key={index} href={page.url}>
                  <a>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page.name}
                    </Button>
                  </a>
                </Link>
              ))}
            </Box>

            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: `${matches == true ? "block" : "none"}` }}>
                <Tooltip title="Search...">
                  <IconButton sx={{ mr: 2 }}>
                    <SearchIcon />
                  </IconButton>
                </Tooltip>

                <Badge
                  badgeContent={2}
                  color="primary"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  sx={{ mr: 2 }}
                >
                  <Tooltip title="Favorite">
                    <IconButton>
                      <FavoriteIcon />
                    </IconButton>
                  </Tooltip>
                </Badge>
                <Badge
                  badgeContent={4}
                  color="primary"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  sx={{ mr: 2 }}
                >
                  <Tooltip title="Product">
                    <IconButton>
                      <ShoppingCartIcon />
                    </IconButton>
                  </Tooltip>
                </Badge>
              </Box>
              <Tooltip title="Javohir Bozorboyev">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Javohir Bozorboyev" src="" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;
